FROM golang:1.20.5
WORKDIR /usr/src/app
COPY . .
RUN go build -o website src/main.go
CMD ["./website"]
