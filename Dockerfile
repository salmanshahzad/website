FROM golang:1.20.5
WORKDIR /usr/src/app
COPY . .
RUN go build -o bin/website main.go
CMD ["./bin/website"]
