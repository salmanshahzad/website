FROM oven/bun:1.1.27
WORKDIR /usr/src/app
COPY bun.lockb package.json ./
RUN bun install
COPY . .
RUN bun run build
CMD ["./website"]
