package db

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

var DB *sql.DB

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

	_, err = DB.Exec(
		"INSERT INTO users (username, password) VALUES ($1, $2)",
		username, password,
	)

	return err
}

func CheckUser(username, password string) bool {
	var count int
	err := DB.QueryRow(
		"SELECT COUNT(*) FROM users WHERE username = $1 AND password = $2",
		username, password,
	).Scan(&count)

	return err == nil && count > 0
}
