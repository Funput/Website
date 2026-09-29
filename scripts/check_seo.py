"""Validate the generated site, not just the source templates. No dependencies."""
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
SITE = "https://funput.app"


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.meta = {}
        self.canonicals = []
        self.links = []
        self.ids = set()
        self.h1 = 0
        self.titles = []
        self.schemas = []
        self.lang = None
        self.capture = None
        self.buffer = ""
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag == "html":
            self.lang = attrs.get("lang")
        if tag == "h1":
            self.h1 += 1
        if tag == "meta":
            key = attrs.get("name", attrs.get("property"))
            if key:
                assert key not in self.meta, f"Duplicate meta {key}: {self.path}"
                self.meta[key] = attrs.get("content", "")
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href"))
        if tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])
        if tag == "title" or (tag == "script" and attrs.get("type") == "application/ld+json"):
            self.capture = tag
            self.buffer = ""

    def handle_data(self, data):
        if self.capture:
            self.buffer += data

    def handle_endtag(self, tag):
        if tag == self.capture:
            if tag == "title":
                self.titles.append(self.buffer)
            else:
                self.schemas.extend(json.loads(self.buffer)["@graph"])
            self.capture = None


assert DIST.exists(), "Run pnpm build first"
pages = {}
for path in DIST.rglob("*.html"):
    relative = path.relative_to(DIST).as_posix()
    route = "/" + relative.removesuffix("index.html") if relative.endswith("index.html") else "/" + relative
    pages[route] = Page(path)

index = ET.parse(DIST / "sitemap-index.xml")
ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
sitemap_urls = set()
for loc in index.findall(".//s:loc", ns):
    tree = ET.parse(DIST / urlsplit(loc.text).path.lstrip("/"))
    sitemap_urls.update(item.text for item in tree.findall(".//s:loc", ns))

titles = set()
for route, page in pages.items():
    assert page.lang == "vi", f"Missing Vietnamese lang: {route}"
    assert page.h1 == 1, f"Expected one h1: {route}"
    assert len(page.titles) == 1 and page.titles[0], f"Missing/duplicate title: {route}"
    assert page.titles[0] not in titles, f"Duplicate title across pages: {route}"
    titles.add(page.titles[0])
    assert page.meta.get("description"), f"Missing description: {route}"
    if route == "/404.html":
        assert "noindex" in page.meta["robots"]
        assert not page.canonicals
        assert SITE + route not in sitemap_urls
        continue
    expected = SITE + route
    assert page.canonicals == [expected], f"Canonical mismatch: {route} {page.canonicals}"
    assert expected in sitemap_urls, f"Not in sitemap: {route}"
    assert "noindex" not in page.meta["robots"], f"Accidental noindex: {route}"
    assert page.meta["og:url"] == expected
    assert page.meta["og:title"] == page.titles[0]
    assert page.meta["twitter:card"] == "summary_large_image"
    assert page.meta.get("og:image:alt") and page.meta.get("twitter:image:alt")
    image = urlsplit(page.meta["og:image"])
    if image.netloc == "funput.app":
        assert (DIST / image.path.lstrip("/")).is_file(), f"Missing OG image: {route}"
    assert any(node["@type"] in ("WebPage", "CollectionPage") for node in page.schemas)
    for href in page.links:
        url = urlsplit(href)
        if url.scheme in ("mailto", "tel") or (url.netloc and url.netloc != "funput.app"):
            continue
        target = url.path or route
        # Public navigation uses root-relative paths.
        assert target.startswith("/"), f"Unexpected relative link: {route} {href}"
        target = target if target in pages else target.rstrip("/") + "/"
        assert target in pages, f"Broken internal link: {route} -> {href}"
        if url.fragment:
            assert unquote(url.fragment) in pages[target].ids, f"Broken anchor: {route} -> {href}"

# Published articles must be discoverable and have complete article metadata.
for route, page in pages.items():
    if route.startswith("/blog/") and route != "/blog/":
        article = next(node for node in page.schemas if node["@type"] == "BlogPosting")
        assert article["mainEntityOfPage"]["@id"] == SITE + route + "#webpage"
        assert article["datePublished"] == page.meta["article:published_time"]
        assert article["headline"] and article["author"]["name"] == "Funput"
        assert page.meta["og:type"] == "article"
        assert route in pages["/blog/"].links

assert sitemap_urls == {SITE + route for route in pages if route != "/404.html"}
robots = (DIST / "robots.txt").read_text()
assert "User-agent: *\nAllow: /" in robots
assert f"Sitemap: {SITE}/sitemap-index.xml" in robots
assert "Disallow: /" not in robots
stores = {"ios": "https://apps.apple.com/vn/app/id6788829996", "android": "https://play.google.com/store/apps/details?id=app.funput.funput"}
for platform, store in stores.items():
    page = pages[f"/{platform}/"]
    app = next(node for node in page.schemas if node["@type"] == "MobileApplication")
    assert app["downloadUrl"] == app["installUrl"] == store
    assert app["offers"]["url"] == store
    assert store in page.links
    assert app["@id"] == f"{SITE}/{platform}/#app"
    home_app = next(node for node in pages["/"].schemas if node.get("@id") == app["@id"])
    assert home_app == app, f"App identity differs across pages: {platform}"
    assert f"/{platform}/" in pages["/"].links
    assert f"{SITE}/{platform}/" in (DIST / "llms.txt").read_text()
windows_store = "https://apps.microsoft.com/store/detail/9NR3WL5PD4ZS"
windows_page = pages["/windows/"]
windows_app = next(node for node in windows_page.schemas if node.get("@id") == f"{SITE}/windows/#app")
assert windows_app["downloadUrl"] == windows_app["installUrl"] == windows_store
assert windows_app["offers"]["url"] == windows_store
assert windows_app["identifier"] == "9NR3WL5PD4ZS"
assert windows_store in windows_app["sameAs"]
assert "Microsoft Store" in windows_page.meta["description"]
for route in ("/", "/windows/", "/blog/cai-funput-windows-10-11/", "/blog/funput-la-gi/"):
    assert windows_store in pages[route].links, f"Missing Microsoft Store link: {route}"
assert windows_store in (DIST / "llms.txt").read_text()
for platform in ("macos", "windows", "linux", "ios", "android"):
    page = pages[f"/{platform}/"]
    app_id = f"{SITE}/{platform}/#app"
    app = next(node for node in page.schemas if node.get("@id") == app_id)
    assert app == next(node for node in pages["/"].schemas if node.get("@id") == app_id)
    webpage = next(node for node in page.schemas if node["@type"] == "WebPage")
    assert webpage["mainEntity"]["@id"] == app_id
    assert app["url"] == SITE + f"/{platform}/"
    assert (DIST / urlsplit(app["screenshot"]).path.lstrip("/")).is_file()
    assert f"/{platform}/" in pages["/"].links
    assert f"{SITE}/{platform}/" in (DIST / "llms.txt").read_text()
    for other in ("macos", "windows", "linux", "ios", "android"):
        if other != platform:
            assert f"/{other}/" in page.links
    if platform not in stores:
        assert app["@type"] == "SoftwareApplication"
        assert app["softwareRequirements"] and app["operatingSystem"]
        assert app["installUrl"] in page.links
        assert app["downloadUrl"] in page.links
        assert app["offers"]["price"] == "0"
assert len({pages[f"/{p}/"].meta["description"] for p in ("macos", "windows", "linux", "ios", "android")}) == 5
assert pages["/ios/"].meta["apple-itunes-app"] == "app-id=6788829996"
assert not any(node["@type"] == "FAQPage" for page in pages.values() for node in page.schemas)
assert not any("welcome" in url or "design-verification" in url for url in sitemap_urls)
print(f"SEO OK: {len(pages)} HTML pages, {len(sitemap_urls)} sitemap URLs; canonical, metadata, JSON-LD, internal links, app stores and robots verified.")
