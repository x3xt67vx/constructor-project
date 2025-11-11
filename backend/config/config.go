package config

import "os"

type Config struct {
	DSN  string
	Port string
}

func Load() Config {
	dsn := os.Getenv("DATABASE_DSN")
	if dsn == "" {
		dsn = "postgres://postgres:postgres@localhost:5432/constructor?sslmode=disable"
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	return Config{
		DSN:  dsn,
		Port: port,
	}
}
