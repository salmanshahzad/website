package main

import (
	"embed"
	"io/fs"
	"log"
	"net"
	"net/http"
	"os"
)

//go:embed public
var public embed.FS

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("PORT environment variable is required")
	}
	addr := net.JoinHostPort(net.IPv4zero.String(), port)
	public, err := fs.Sub(public, "public")
	if err != nil {
		log.Fatalf("Could not find public directory: %v\n", err)
	}
	if err := http.ListenAndServe(addr, http.FileServer(http.FS(public))); err != nil {
		log.Fatalf("Could not start server: %v", err)
	}
}
