# Funput Landing

Official marketing site for [Funput](https://funput.app) — an open-source Vietnamese input method for **iOS**, **Android**, **macOS**, **Windows**, and **Linux**.

**Live site:** [funput.app](https://funput.app)

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/) 4. Static output is served via nginx in Docker.

## Prerequisites

- [Node.js](https://nodejs.org/) **22.12+** (Node 26 recommended for Docker)
- [pnpm](https://pnpm.dev/) **11.5+** (see `packageManager` in `package.json`)

## Getting started

```bash
pnpm install
pnpm dev --background
```

Open [http://localhost:4321](http://localhost:4321).

## Scripts

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `pnpm dev`          | Dev server                        |
| `pnpm build`        | Production static build (`dist/`) |
| `pnpm preview`      | Preview the production build      |
| `pnpm check`        | Astro + TypeScript checks         |
| `pnpm format`       | Format with Prettier              |
| `pnpm format:check` | Check Prettier formatting         |

## Project layout

```
website/
├── public/              # Static assets (icons, robots, OG image, llms.txt)
├── src/
│   ├── components/      # Home experience, shared header/footer, SEO
│   ├── content/
│   │   ├── blog/        # Blog Markdown/MDX (Content Collections)
│   │   └── privacy.md   # Privacy policy (Markdown)
│   ├── content.config.ts
│   ├── layouts/         # Shared page layouts
│   ├── lib/             # Constants, platforms, SEO helpers
│   ├── pages/           # File-based routes
│   └── styles/          # Global CSS (Tailwind + design tokens)
├── .github/workflows/   # CI (format, check, build)
├── astro.config.mjs
├── Dockerfile
├── nginx.conf
└── package.json
```

## Docker

Multi-stage image: Node 26 (build) + nginx alpine (serve `dist/`).

```bash
docker build -t funput-landing .
docker run --rm -p 8080:80 funput-landing
```

Then open [http://localhost:8080](http://localhost:8080).

## Links

- **Main repository:** [github.com/Funput/Funput](https://github.com/Funput/Funput)
- **Docs:** [docs.funput.app](https://docs.funput.app)
- **Releases:** [github.com/Funput/Funput/releases](https://github.com/Funput/Funput/releases)

## Contributing

1. Fork the repository and create a feature branch.
2. Install dependencies with `pnpm install`.
3. Make your changes; keep structure and copy consistent with the existing site.
4. Before opening a pull request, run `pnpm format:check`, `pnpm check`, and `pnpm build`.
5. Open a PR with a clear description of the change.

## License

See [LICENSE](LICENSE) and [NOTICE](NOTICE).

## Design system

The site uses a paper, orange, and sage palette with Vietnamese typography. Shared tokens, layout utilities, and article typography live in `src/styles/global.css`. `BaseLayout.astro` supplies the same header and footer to every page.

- `HomeExperience.astro`: landing page and interactive tone marks.
- `ReadingLayout.astro`: blog articles and the privacy policy, with a heading-based table of contents.
- `src/pages/blog/index.astro`: journal listing and empty state. Draft posts stay unpublished.

Manage the background preview with `pnpm astro dev status`, `pnpm astro dev logs`, and `pnpm astro dev stop`.
