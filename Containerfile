FROM docker.io/alpine:3.21.3 AS build
RUN apk add build-base make
WORKDIR /usr/src/app
COPY . .
RUN make LDFLAGS="-static"

FROM scratch
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/server server
CMD ["./server", "-d", "public", "-h", "0.0.0.0"]
