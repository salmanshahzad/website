FROM docker.io/rust:1.85.0 AS build
WORKDIR /usr/src/app
COPY . .
RUN cargo build --release

FROM docker.io/ubuntu:24.10
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/target/release/website website
CMD ["./website"]
