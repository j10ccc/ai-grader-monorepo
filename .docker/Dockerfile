FROM node:18-alpine as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /opt/app
COPY . /opt/app

FROM base AS builder
RUN pnpm install
RUN pnpm build:all
RUN mkdir -p build
RUN mv apps/grader/dist build/grader

FROM nginx:alpine
COPY .docker/nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /opt/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]