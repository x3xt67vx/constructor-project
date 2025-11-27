package main

import (
	"constructor-project/backend/db"
	"constructor-project/backend/handlers"
	"log"
	"net/http"
)

func main() {
	db.Init()

	fs := http.FileServer(http.Dir(`./static`))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/home.html")
	})

	http.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/login.html")
	})

	http.HandleFunc("/register", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/register.html")
	})

	http.HandleFunc("/home", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/user_home.html")
	})

	http.HandleFunc("/constructor", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/index.html")
	})

	http.HandleFunc("/api/register", handlers.RegisterHandler)
	http.HandleFunc("/api/login", handlers.LoginHandler)
	http.HandleFunc("/api/layouts/1", handlers.GetLayoutHandler)
	http.HandleFunc("/api/layouts/1/save", handlers.SaveLayoutHandler)

	log.Println("Server started at :8080")
	http.ListenAndServe(":8080", nil)
}
