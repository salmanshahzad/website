package main

import (
	"log"
	"net"
	"net/http"
	"os"
)

func main() {
	addr := net.JoinHostPort("0.0.0.0", os.Getenv("PORT"))
	if err := http.ListenAndServe(addr, http.FileServer(http.Dir("public"))); err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
}
