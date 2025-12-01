package db

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
	"golang.org/x/crypto/bcrypt"
)

var DB *sql.DB

type User struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
}

func Init() {
	var err error

	DB, err = sql.Open("postgres", "postgres://postgres:postgres@localhost:5432/constructor?sslmode=disable")
	if err != nil {
		log.Fatal("DB open error:", err)
	}

	err = DB.Ping()
	if err != nil {
		log.Fatal("DB ping error:", err)
	}

	log.Println("DB connected successfully")
}

func RegisterUser(username, password string) error {
	var exists int
	err := DB.QueryRow(
		"SELECT COUNT(*) FROM users WHERE username = $1",
		username,
	).Scan(&exists)

	if err != nil {
		return err
	}

	if exists > 0 {
		return sql.ErrNoRows // пользователь уже есть
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}

	_, err = DB.Exec(`INSERT INTO users (username, password) VALUES ($1, $2)`, username, string(hash))
	return err
}

func CheckUser(username, password string) (bool, int) {
	var hash string
	var id int

	err := DB.QueryRow(`SELECT id, password FROM users WHERE username = $1`, username).Scan(&id, &hash)
	if err != nil {
		return false, 0
	}

	if bcrypt.CompareHashAndPassword([]byte(hash), []byte(password)) != nil {
		return false, 0
	}

	return true, id
}

func CreateLayout(userID int, name string) (int, error) {
	var id int
	err := DB.QueryRow(
		"INSERT INTO user_layouts (user_id, name) VALUES ($1, $2) RETURNING id",
		userID, name,
	).Scan(&id)
	return id, err
}

func GetLayouts(userID int) ([]map[string]any, error) {
	rows, err := DB.Query(
		"SELECT id, name, created_at FROM user_layouts WHERE user_id = $1 ORDER BY created_at DESC",
		userID,
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var result []map[string]any

	for rows.Next() {
		var id int
		var name string
		var createdAt string

		rows.Scan(&id, &name, &createdAt)

		result = append(result, map[string]any{
			"id":         id,
			"name":       name,
			"created_at": createdAt,
		})
	}

	return result, nil
}

func GetLayout(userID, layoutID int) (string, error) {
	var content string

	err := DB.QueryRow(
		"SELECT content FROM user_layouts WHERE id = $1 AND user_id = $2",
		layoutID, userID,
	).Scan(&content)

	return content, err
}

func SaveLayout(userID, layoutID int, json string) error {
	_, err := DB.Exec(
		"UPDATE user_layouts SET content = $1 WHERE id = $2 AND user_id = $3",
		json, layoutID, userID,
	)
	return err
}

func GetUserByID(id int) (*User, error) {
	row := DB.QueryRow("SELECT id, username FROM users WHERE id = $1", id)

	var user User
	err := row.Scan(&user.ID, &user.Username)
	if err != nil {
		return nil, err
	}
	return &user, nil
}
