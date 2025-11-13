package main

import (
	"constructor-project/backend/db"
	"constructor-project/backend/handlers"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	db.Init() // инициализация БД

	// Статика
	fs := http.FileServer(http.Dir(`./static`))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// SPA: index.html на любой путь
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		indexPath := filepath.Join("static", "index.html")
		if _, err := os.Stat(indexPath); os.IsNotExist(err) {
			http.NotFound(w, r)
			return
		}
		http.ServeFile(w, r, indexPath)
	})

	// API
	http.HandleFunc("/api/layouts/1", handlers.GetLayoutHandler)
	http.HandleFunc("/api/layouts/1/save", handlers.SaveLayoutHandler)

	log.Println("Server started at :8080")
	http.ListenAndServe(":8080", nil)

}
