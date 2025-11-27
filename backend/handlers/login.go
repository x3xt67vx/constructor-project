package handlers

import (
	"constructor-project/backend/db"
	"encoding/json"
	"net/http"
)

type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
		return
	}

	var creds struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}

	err := json.NewDecoder(r.Body).Decode(&creds)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}

	if db.CheckUser(creds.Username, creds.Password) {
		json.NewEncoder(w).Encode(map[string]any{"success": true})
	} else {
		json.NewEncoder(w).Encode(map[string]any{"success": false})
	}
}
