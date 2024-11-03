FROM rust:1.82.0 AS build
WORKDIR /usr/src/app
COPY . .
RUN cargo build --release

FROM ubuntu:24.04
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/target/release/website website
CMD ["./website"]
