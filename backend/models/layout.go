package handlers

import (
	"constructor-project/backend/middleware"
	"constructor-project/backend/repository"
	"encoding/json"
	"net/http"
)

type Layout struct {
	ID          int    `json:"id"`
	UserID      int    `json:"user_id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	CreatedAt   string `json:"created_at"`
}

func GetLayoutHandler(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(middleware.UserIDKey).(int)

	layoutJSON, err := repository.GetLayoutByUser(userID)
	if err != nil {
		http.Error(w, "Layout not found", 404)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(layoutJSON)
}

func SaveLayoutHandler(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(middleware.UserIDKey).(int)

	var layout map[string]interface{}
	if err := json.NewDecoder(r.Body).Decode(&layout); err != nil {
		http.Error(w, "Invalid JSON: "+err.Error(), http.StatusBadRequest)
		return
	}

	err := repository.SaveLayoutForUser(userID, layout)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"status":"ok"}`))
}
