package main

import (
	"fmt"
	"net/http"
	"os"
	"strconv"
)

func main() {
	port, err := strconv.Atoi(os.Getenv("PORT"))
	if err != nil || port < 0 || port > 65535 {
		fmt.Fprintln(os.Stderr, "Invalid PORT environment variable")
		os.Exit(1)
	}

	addr := fmt.Sprintf("0.0.0.0:%d", port)
	err = http.ListenAndServe(addr, http.FileServer(http.Dir("public")))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error starting server: %v\n", err)
		os.Exit(1)
	}
}
