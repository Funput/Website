import { FUNPUT_CONSTANTS as links } from './constants';
import { PLATFORMS, type PlatformId } from './platforms';
import { DESKTOP } from './desktop';

export const DEFAULT_DESCRIPTION =
  'Funput là bộ gõ tiếng Việt miễn phí, mã nguồn mở. Gõ Telex và VNI trên iPhone, iPad, Android, macOS, Windows và Linux. Tải từ App Store, Google Play hoặc GitHub.';
export const HOME_TITLE = 'Funput — Bộ gõ tiếng Việt cho iOS, Android, macOS, Windows và Linux';

/** Page URLs match Astro's directory output and sitemap. Asset URLs are left intact. */
export function absoluteUrl(path = '/'): string {
  return new URL(path, `${links.SITE_URL}/`).href;
}
export function canonicalUrl(path = '/'): string {
  const url = new URL(path, links.SITE_URL);
  url.search = '';
  url.hash = '';
  url.pathname = `${url.pathname.replace(/\/+$/, '')}/`;
  return url.href;
}
export function ogImageUrl(path: string = links.OG_IMAGE_PATH): string {
  return absoluteUrl(path);
}
export type SeoInput = {
  title: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  iosBanner?: boolean;
};
export function buildSeo(input: SeoInput) {
  const url = canonicalUrl(input.canonicalPath ?? '/');
  return {
    ...input,
    description: input.description ?? DEFAULT_DESCRIPTION,
    canonical: url,
    ogType: input.ogType ?? 'website',
    ogImage: ogImageUrl(input.ogImage),
    url,
  };
}

const organizationId = `${links.SITE_URL}/#organization`;
const websiteId = `${links.SITE_URL}/#website`;
const softwareId = `${links.SITE_URL}/#software`;
const identity = () => [
  {
    '@type': 'Organization',
    '@id': organizationId,
    name: 'Funput',
    url: canonicalUrl(),
    logo: absoluteUrl('/brand/logo.png'),
    email: links.CONTACT_EMAIL,
    sameAs: [links.GITHUB_URL, links.FACEBOOK_URL],
  },
  {
    '@type': 'WebSite',
    '@id': websiteId,
    name: 'Funput',
    alternateName: 'Funput IME',
    url: canonicalUrl(),
    inLanguage: 'vi',
    publisher: { '@id': organizationId },
  },
];
export function pageJsonLd(input: SeoInput) {
  const seo = buildSeo(input);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...identity(),
      {
        '@type': input.canonicalPath === '/blog' ? 'CollectionPage' : 'WebPage',
        '@id': `${seo.url}#webpage`,
        url: seo.url,
        name: seo.title,
        description: seo.description,
        inLanguage: 'vi',
        isPartOf: { '@id': websiteId },
        primaryImageOfPage: { '@type': 'ImageObject', url: seo.ogImage },
      },
    ],
  };
}
export function mobileAppJsonLd(platform: 'ios' | 'android') {
  const ios = platform === 'ios';
  const storeUrl = ios ? links.IOS_APP_STORE_URL : links.ANDROID_PLAY_STORE_URL;
  return {
    '@type': 'MobileApplication',
    '@id': `${canonicalUrl(`/${platform}`)}#app`,
    name: 'Funput: Bàn phím tiếng Việt',
    alternateName: `Funput ${ios ? 'iOS' : 'Android'}`,
    url: canonicalUrl(`/${platform}`),
    description: ios
      ? 'Bàn phím tiếng Việt Funput cho iPhone và iPad, hỗ trợ Telex và VNI.'
      : 'Bàn phím tiếng Việt Funput cho điện thoại và máy tính bảng Android, hỗ trợ Telex và VNI.',
    applicationCategory: 'UtilitiesApplication',
    applicationSubCategory: 'Vietnamese keyboard',
    operatingSystem: ios ? 'iOS 18.6+, iPadOS 18.6+' : 'Android 8.0+',
    identifier: ios ? '6788829996' : 'app.funput.funput',
    installUrl: storeUrl,
    downloadUrl: storeUrl,
    sameAs: [storeUrl],
    image: absoluteUrl('/brand/logo.png'),
    screenshot: absoluteUrl(`/brand/screenshots/${platform}.png`),
    featureList: ['Telex', 'VNI', 'Vietnamese keyboard'],
    isAccessibleForFree: true,
    license: links.LICENSE_URL,
    publisher: { '@id': organizationId },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', url: storeUrl },
  };
}
export function platformAppJsonLd(id: PlatformId) {
  if (id === 'ios' || id === 'android') return mobileAppJsonLd(id);
  const platform = PLATFORMS.find((p) => p.id === id)!;
  const content = DESKTOP[id];
  return {
    '@type': 'SoftwareApplication',
    '@id': `${canonicalUrl(`/${id}`)}#app`,
    name: `Funput cho ${platform.name}`,
    alternateName: `Funput Vietnamese Input Method for ${platform.name}`,
    url: canonicalUrl(`/${id}`),
    description: content.description,
    applicationCategory: 'UtilitiesApplication',
    applicationSubCategory: 'Vietnamese input method',
    operatingSystem: content.os,
    softwareRequirements: content.requirements,
    downloadUrl: links.RELEASES_URL,
    installUrl: `${links.INSTALL_DOCS_URL}${id}/`,
    softwareHelp: { '@type': 'WebPage', url: `${links.INSTALL_DOCS_URL}${id}/` },
    image: absoluteUrl('/brand/logo.png'),
    screenshot: absoluteUrl(platform.screenshotSrc),
    featureList: ['Telex', 'Telex+', 'VNI', ...content.features.map(([title]) => title)],
    isAccessibleForFree: true,
    license: links.LICENSE_URL,
    publisher: { '@id': organizationId },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', url: links.RELEASES_URL },
  };
}
export function homeJsonLd() {
  const page = pageJsonLd({ title: HOME_TITLE, description: DEFAULT_DESCRIPTION });
  return {
    ...page,
    '@graph': [
      ...page['@graph'],
      {
        '@type': 'SoftwareApplication',
        '@id': softwareId,
        name: 'Funput',
        alternateName: ['Funput IME', 'Bộ gõ Funput', 'Funput Vietnamese Input Method'],
        url: canonicalUrl(),
        description: DEFAULT_DESCRIPTION,
        applicationCategory: 'UtilitiesApplication',
        applicationSubCategory: 'Vietnamese input method',
        operatingSystem: ['iOS', 'Android', 'macOS', 'Windows', 'Linux'],
        featureList: ['Telex', 'VNI', 'Open source', 'On-device input processing'],
        isAccessibleForFree: true,
        license: links.LICENSE_URL,
        image: absoluteUrl('/brand/logo.png'),
        downloadUrl: links.RELEASES_URL,
        softwareHelp: { '@type': 'WebPage', url: links.DOCS_URL },
        publisher: { '@id': organizationId },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', url: links.RELEASES_URL },
      },
      ...PLATFORMS.map((p) => platformAppJsonLd(p.id)),
    ],
  };
}
export function platformPageJsonLd(platform: PlatformId, title: string, description: string) {
  const page = pageJsonLd({ title, description, canonicalPath: `/${platform}` });
  const url = canonicalUrl(`/${platform}`);
  return {
    ...page,
    '@graph': [
      ...page['@graph'].map((node) =>
        node['@type'] === 'WebPage' ? { ...node, mainEntity: { '@id': `${url}#app` } } : node,
      ),
      platformAppJsonLd(platform),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Funput', item: canonicalUrl() },
          {
            '@type': 'ListItem',
            position: 2,
            name: `Funput cho ${PLATFORMS.find((p) => p.id === platform)!.name}`,
            item: url,
          },
        ],
      },
    ],
  };
}
export function articleJsonLd(input: SeoInput & { publishedTime: string }) {
  const page = pageJsonLd(input);
  const seo = buildSeo(input);
  return {
    ...page,
    '@graph': [
      ...page['@graph'],
      {
        '@type': 'BlogPosting',
        '@id': `${seo.url}#article`,
        headline: input.title,
        description: seo.description,
        image: [seo.ogImage],
        inLanguage: 'vi',
        mainEntityOfPage: { '@id': `${seo.url}#webpage` },
        datePublished: input.publishedTime,
        dateModified: input.modifiedTime ?? input.publishedTime,
        author: {
          '@type': 'Organization',
          '@id': organizationId,
          name: 'Funput',
          url: canonicalUrl(),
        },
        publisher: { '@id': organizationId },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Funput', item: canonicalUrl() },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: canonicalUrl('/blog') },
          { '@type': 'ListItem', position: 3, name: input.title, item: seo.url },
        ],
      },
    ],
  };
}
