package main

import (
	"constructor-project/backend/db"
	"constructor-project/backend/handlers"
	"constructor-project/backend/middleware"
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

	http.HandleFunc("/home", middleware.RequireAuth(func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/user_home.html")
	}))

	http.HandleFunc("/constructor", middleware.RequireAuth(func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/index.html")
	}))

	http.HandleFunc("/api/register", handlers.RegisterHandler)
	http.HandleFunc("/api/login", handlers.LoginHandler)
	http.HandleFunc("/api/me", middleware.RequireAuth(handlers.MeHandler))
	http.HandleFunc("/logout", middleware.RequireAuth(handlers.LogoutHandler))

	http.HandleFunc("/api/layouts/create", middleware.RequireAuth(handlers.CreateLayoutHandler))
	http.HandleFunc("/api/layouts/list", middleware.RequireAuth(handlers.GetLayoutsHandler))
	http.HandleFunc("/api/layouts/get", middleware.RequireAuth(handlers.GetLayoutHandler))
	http.HandleFunc("/api/layouts/save", middleware.RequireAuth(handlers.SaveLayoutHandler))
	http.HandleFunc("/api/layouts/delete", middleware.RequireAuth(handlers.DeleteLayoutHandler))

	log.Println("Server started at :8080")
	http.ListenAndServe(":8080", nil)
}
