package repository

import (
	"constructor-project/backend/db"
	"encoding/json"
	"log"
)

func GetLayoutByID(id int) ([]byte, error) {
	row := db.DB.QueryRow("SELECT layout FROM user_layouts WHERE id=$1", id)
	var layoutJSON []byte
	var err = row.Scan(&layoutJSON)
	if err != nil {
		return nil, err
	}
	return layoutJSON, nil
}

func SaveLayout(id int, layout interface{}) error {
	layoutJSON, err := json.Marshal(layout)
	if err != nil {
		return err
	}
	_, err = db.DB.Exec("UPDATE user_layouts SET layout=$1, updated_at=now() WHERE id=$2", layoutJSON, id)
	if err != nil {
		log.Println("Error saving layout:", err)
	}
	return err
}
