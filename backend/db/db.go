package db

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func Init() {
	var err error
	DB, err = sql.Open("postgres", "postgres://postgres:postgres@localhost:5432/constructor")
	if err != nil {
		log.Fatal(err)
	}
}
