package db

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

func Connect(dsn string) *sql.DB {
	db, err := sql.Open("postgres", dsn)
	if err != nil {
		log.Fatal("db open:", err)
	}
	if err := db.Ping(); err != nil {
		log.Fatal("db ping:", err)
	}
	return db
}
