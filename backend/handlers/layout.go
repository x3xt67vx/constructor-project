package handlers

import (
	"constructor-project/backend/repository"
	"encoding/json"
	"net/http"
)

func GetLayoutHandler(w http.ResponseWriter, r *http.Request) {
	layoutJSON, err := repository.GetLayoutByID(1)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(layoutJSON)
}

func SaveLayoutHandler(w http.ResponseWriter, r *http.Request) {
	var layout map[string]interface{}
	if err := json.NewDecoder(r.Body).Decode(&layout); err != nil {
		http.Error(w, "Invalid JSON: "+err.Error(), http.StatusBadRequest)
		return
	}
	err := repository.SaveLayout(1, layout)
	if err != nil {
		http.Error(w, "Error saving layout: "+err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"status":"ok"}`))
}
