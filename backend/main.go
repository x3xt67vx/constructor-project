package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	_ "github.com/lib/pq"
)

type Component struct {
	ID       int    `json:"id"`
	Type     string `json:"type"`
	Position struct {
		X int `json:"x"`
		Y int `json:"y"`
	} `json:"position"`
	Size struct {
		Width  int `json:"width"`
		Height int `json:"height"`
	} `json:"size"`
	ZIndex  int             `json:"z_index"`
	Content json.RawMessage `json:"content"`
	Style   json.RawMessage `json:"style"`
}

type UserLayout struct {
	ID         int             `json:"id"`
	Name       string          `json:"name"`
	Components json.RawMessage `json:"components"`
}

var db *sql.DB

func main() {
	var err error
	db, err = sql.Open("postgres", "postgres://postgres:postgres@localhost:5432/constructor")
	if err != nil {
		log.Fatal(err)
	}

	http.Handle("/", http.FileServer(http.Dir("./static")))
	http.HandleFunc("/api/layouts/1", getLayout) // отдаём первый макет
	http.HandleFunc("/api/layouts/1/save", saveLayout)
	log.Println("Server started at :8080")
	http.ListenAndServe(":8080", nil)
}

func getLayout(w http.ResponseWriter, r *http.Request) {
	row := db.QueryRow("SELECT layout FROM user_layouts WHERE id = 1")
	var layoutJSON []byte
	err := row.Scan(&layoutJSON)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(layoutJSON)
}
func saveLayout(w http.ResponseWriter, r *http.Request) {
	var layout map[string]interface{}
	if err := json.NewDecoder(r.Body).Decode(&layout); err != nil {
		http.Error(w, "Invalid JSON: "+err.Error(), http.StatusBadRequest)
		return
	}

	layoutJSON, err := json.Marshal(layout)
	if err != nil {
		http.Error(w, "Error encoding JSON: "+err.Error(), http.StatusInternalServerError)
		return
	}

	_, err = db.Exec("UPDATE user_layouts SET layout = $1, updated_at = now() WHERE id = 1", layoutJSON)
	if err != nil {
		http.Error(w, "Error saving layout: "+err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"status":"ok"}`))
}
