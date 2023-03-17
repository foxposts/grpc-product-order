package config

import (
	"fmt"
	"github.com/joho/godotenv"
	"log"
	"os"
)

const envKeyName = "GO_ENV"

func LoadConfig() {
	if "" == os.Getenv(envKeyName) {
		_ = os.Setenv(envKeyName, "order")
	}
	err := godotenv.Load(fmt.Sprintf("%s.env", os.Getenv(envKeyName)))
	if err != nil {
		log.Fatal("Error loading env")
	}
}
