package handlers

import (
	"constructor-project/backend/db"
	"constructor-project/backend/middleware"
	"encoding/json"
	"net/http"
)

func CreateLayoutHandler(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(middleware.UserIDKey).(int)

	var req struct {
		Name        string `json:"name"`
		Description string `json:"description"`
	}

	json.NewDecoder(r.Body).Decode(&req)

	id, err := db.CreateLayout(userID, req.Name, req.Description)
	if err != nil {
		http.Error(w, "failed", 500)
		return
	}

	json.NewEncoder(w).Encode(map[string]any{
		"success": true,
		"id":      id,
	})
}

func DeleteLayoutHandler(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(middleware.UserIDKey).(int)

	var req struct {
		ID int `json:"id"`
	}
	json.NewDecoder(r.Body).Decode(&req)

	_, err := db.DB.Exec(
		"DELETE FROM user_layouts WHERE id = $1 AND user_id = $2",
		req.ID, userID,
	)

	if err != nil {
		json.NewEncoder(w).Encode(map[string]any{
			"success": false,
		})
		return
	}

	json.NewEncoder(w).Encode(map[string]any{
		"success": true,
	})
}

func GetLayoutsHandler(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(middleware.UserIDKey).(int)

	layouts, err := db.GetLayouts(userID)
	if err != nil {
		http.Error(w, "failed", 500)
		return
	}

	json.NewEncoder(w).Encode(layouts)
}
