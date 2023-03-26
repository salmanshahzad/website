FROM rust:1.68.1
WORKDIR /usr/src/app
COPY . .
RUN cargo build --release
CMD ["cargo", "run", "--release"]
