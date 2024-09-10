FROM oven/bun:1.1.27 AS build
WORKDIR /usr/src/app
COPY bun.lockb package.json ./
RUN bun install
COPY . .
RUN bun run build

FROM ubuntu:24.04
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/website website
CMD ["./website"]
