/*
  Sepehr Yazdani
  Golang simple web server for HackNYU2k19
 */


package main

import(
  "github.com/kataras/iris"
  "strconv"
  "sync"
  "fmt"
)

type NameDB struct{
  db map[string]int
  mutex sync.Mutex
}

var database NameDB

func insertToMap(name string, bags int){
  database.mutex.Lock()
  defer database.mutex.Unlock()
  _, present :=database.db[name]
  if !present{
    database.db[name] = bags
  } else{
    database.db[name] += bags
  }

}
func main(){
  database = NameDB{map[string]int{}, sync.Mutex{}}
  listenPort := ":8080"
  app := iris.New()


  app.Get("/dropoff", func(ctx iris.Context){
    currMap := ctx.URLParams()
    personName := currMap["name"]
    numBags, _ := strconv.Atoi(currMap["bags"])
    insertToMap(personName, numBags)
    fmt.Println("Name: ", personName," Bags: ", numBags)
  })

  // Currently repeat code, but is intended to change later on
  app.Get("/pickup", func(ctx iris.Context){
    currMap := ctx.URLParams()
    personName := currMap["name"]
    numBags, _ := strconv.Atoi(currMap["bags"])
    insertToMap(personName, numBags)
  })

  app.Run(iris.Addr(listenPort),iris.WithoutServerError(iris.ErrServerClosed))
}
