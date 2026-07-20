# Funput Landing

Official marketing site for [Funput](https://funput.app) — an open-source Vietnamese input method for **macOS**, **Windows**, **Linux**, **Android**, and **iOS**.

**Live site:** [funput.app](https://funput.app)

Built with [Angular](https://angular.dev/) 22, [Tailwind CSS](https://tailwindcss.com/) 4, and served via nginx in Docker.

## Prerequisites

- [Node.js](https://nodejs.org/) **24+** (Node 26 recommended for Docker)
- [pnpm](https://pnpm.io/) **11.5+** (see `packageManager` in `package.json`)

## Getting started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm start
```

Open [http://localhost:4200](http://localhost:4200).

## Build

Production build (output under `dist/funput/`):

```bash
pnpm build
```

Run unit tests:

```bash
pnpm test
```

Format with Prettier:

```bash
pnpm format
pnpm format:check
```

## Docker

Multi-stage image: Node 26 (build) + nginx alpine (serve static browser output).

```bash
docker build -t funput-landing .
docker run --rm -p 8080:80 funput-landing
```

Then open [http://localhost:8080](http://localhost:8080).

## Project layout

```
website/
├── public/            # Static assets (icons, robots, sitemap, OG image)
├── src/
│   ├── app/           # Components, routes, constants
│   ├── index.html     # SEO meta, structured data
│   └── server.ts      # SSR entry (Express)
├── Dockerfile
├── nginx.conf
└── package.json
```

## Scripts

| Command | Description |
| ------- | ----------- |
| `pnpm start` | Dev server (`ng serve`) |
| `pnpm build` | Production build |
| `pnpm test` | Unit tests (Vitest) |
| `pnpm format` | Format sources with Prettier |
| `pnpm format:check` | Check Prettier formatting |
| `pnpm serve:ssr:funput` | Serve SSR build locally |

## Links

- **Main repository:** [github.com/Funput/Funput](https://github.com/Funput/Funput)
- **Docs:** [docs.funput.app](https://docs.funput.app)
- **Releases:** [github.com/Funput/Funput/releases](https://github.com/Funput/Funput/releases)

## Contributing

1. Fork the repository and create a feature branch.
2. Install dependencies with `pnpm install`.
3. Make your changes; keep UI and copy consistent with the existing site.
4. Before opening a pull request, run `pnpm format:check`, `pnpm test`, and `pnpm build`.
5. Open a PR with a clear description of the change.

## License

MIT — see [LICENSE](./LICENSE). Brand and trademark notes are in [NOTICE](./NOTICE).

The Funput application itself is also MIT; see [Funput/Funput](https://github.com/Funput/Funput/blob/main/LICENSE).
