package handlers

import (
	"constructor-project/backend/db"
	"constructor-project/backend/middleware"
	"encoding/json"
	"net/http"
)

func UpdateDescriptionHandler(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(middleware.UserIDKey).(int)

	var req struct {
		ID          int    `json:"id"`
		Description string `json:"description"`
	}

	json.NewDecoder(r.Body).Decode(&req)

	err := db.UpdateDescription(userID, req.ID, req.Description)
	if err != nil {
		http.Error(w, "failed", 500)
		return
	}

	json.NewEncoder(w).Encode(map[string]any{
		"success": true,
	})
}
