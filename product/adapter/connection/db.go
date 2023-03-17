package connection

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"productservice/config"
	"time"
)

func ConnectDB() *sql.DB {
	config.LoadConfig()
	dbClient, err := sql.Open(os.Getenv("DB_DRIVER"), os.Getenv("DB_CONNECTION"))
	if nil != err {
		log.Fatal("open error:", err)
	}
	if err = dbClient.Ping(); err != nil {
		time.Sleep(time.Second * 3)
		fmt.Println("retry: connect to product_db")
		return ConnectDB()
	}
	fmt.Println("connected to product_db")
	return dbClient
}
