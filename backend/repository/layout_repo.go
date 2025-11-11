package repository

import (
	"database/sql"
)

type LayoutRepo struct {
	DB *sql.DB
}

func NewLayoutRepo(db *sql.DB) *LayoutRepo { return &LayoutRepo{DB: db} }

func (r *LayoutRepo) GetLayoutByID(id int) ([]byte, error) {
	var layoutJSON []byte
	row := r.DB.QueryRow("SELECT layout FROM user_layouts WHERE id = $1", id)
	if err := row.Scan(&layoutJSON); err != nil {
		return nil, err
	}
	return layoutJSON, nil
}

func (r *LayoutRepo) SaveLayoutByID(id int, layoutJSON []byte) error {
	_, err := r.DB.Exec("UPDATE user_layouts SET layout = $1, updated_at = now() WHERE id = $2", layoutJSON, id)
	return err
}
