package repository

import (
	"constructor-project/backend/db"
	"encoding/json"
	"log"
)

func GetLayoutByUser(userID int) ([]byte, error) {
	row := db.DB.QueryRow(`SELECT layout FROM user_layouts WHERE user_id=$1`, userID)
	var layoutJSON []byte
	return layoutJSON, row.Scan(&layoutJSON)
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

func SaveLayoutForUser(userID int, layout interface{}) error {
	layoutJSON, err := json.Marshal(layout)
	if err != nil {
		return err
	}

	_, err = db.DB.Exec(`
        INSERT INTO user_layouts (user_id, layout)
        VALUES ($1, $2)
        ON CONFLICT (user_id)
        DO UPDATE SET layout=$2, updated_at=now()
    `, userID, layoutJSON)

	return err
}
