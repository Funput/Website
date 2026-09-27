# Stage 1: Build the static site
FROM node:26-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@11.5.2

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

# Stage 2: Serve static files with nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

RUN nginx -t

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
