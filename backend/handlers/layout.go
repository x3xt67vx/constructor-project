package handlers

import (
	"constructor-project/backend/db"
	"constructor-project/backend/middleware"
	"encoding/json"
	"net/http"
	"strconv"
)

func GetLayoutHandler(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(middleware.UserIDKey).(int)

	id, _ := strconv.Atoi(r.URL.Query().Get("id"))

	content, err := db.GetLayout(userID, id)
	if err != nil {
		http.Error(w, "not found", 404)
		return
	}

	w.Write([]byte(content))
}

func SaveLayoutHandler(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value(middleware.UserIDKey).(int)

	id, _ := strconv.Atoi(r.URL.Query().Get("id"))

	var body map[string]any
	json.NewDecoder(r.Body).Decode(&body)

	jsonBytes, _ := json.Marshal(body)

	err := db.SaveLayout(userID, id, string(jsonBytes))
	if err != nil {
		http.Error(w, "failed", 500)
		return
	}

	w.Write([]byte(`{"success": true}`))
}
