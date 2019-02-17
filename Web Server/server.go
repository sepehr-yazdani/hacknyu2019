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

type Score struct{
  Dropoff int `json:"Dropoff"`
  Pickup int `json:"Pickup"`
}

type NameDB struct{
  db map[string]Score
  mutex sync.Mutex
}


var database NameDB

func insertToMap(name string, dropoff int, pickup int){
  database.mutex.Lock()
  defer database.mutex.Unlock()
  currScore, present :=database.db[name]
  if !present{
    fakeScore := Score{dropoff,pickup}
    database.db[name] = fakeScore
  } else{
    currScore.Dropoff += dropoff
    currScore.Pickup += pickup
    database.db[name] = currScore
  }

}
func main(){
  database = NameDB{map[string]Score{}, sync.Mutex{}}
  database.db["Alice"] = Score{5,5}
  database.db["Bob"] = Score{15,6} // Hardcoding initial values
  listenPort := ":8080"
  app := iris.New()


  app.Get("/dropoff", func(ctx iris.Context){
    currMap := ctx.URLParams()
    personName := currMap["name"]
    numBags, _ := strconv.Atoi(currMap["bags"])
    insertToMap(personName, numBags, 0)
    database.mutex.Lock()
    currScore,_ := database.db[personName]
    ctx.HTML("You have currently dropped off " + strconv.Itoa(currScore.Dropoff)+
    " bags, and have picked up " + strconv.Itoa(currScore.Pickup) + " bags!"+
    "</br> Good job!")
    database.mutex.Unlock()
  })

  // Currently repeat code, but is intended to change later on
  app.Get("/pickup", func(ctx iris.Context){
    currMap := ctx.URLParams()
    personName := currMap["name"]
    numBags, _ := strconv.Atoi(currMap["bags"])
    insertToMap(personName, 0, numBags)
    database.mutex.Lock()
    currScore,_ := database.db[personName]
    ctx.HTML("You have currently dropped off " + strconv.Itoa(currScore.Dropoff)+
    " bags, and have picked up " + strconv.Itoa(currScore.Pickup) + " bags!"+
    "</br> Good job!")
    database.mutex.Unlock()
  })

  app.Get("/ask/{person:string}", func(ctx iris.Context){
    database.mutex.Lock()
    name:= ctx.Params().GetString("person")
    fmt.Println(name + " is here!") // Remove once testing is done
    currScore,exists := database.db[name]
    if exists{
      fmt.Println(currScore.Dropoff)
      fmt.Println(currScore.Pickup)
      fmt.Println("==========")
    }
    database.mutex.Unlock()
    if !exists{
      insertToMap(name, 0, 0)
    }
    toSend := Score{
              Dropoff: currScore.Dropoff,
              Pickup: currScore.Pickup,
              }
    ctx.JSON(toSend)

  })

  app.Run(iris.Addr(listenPort),iris.WithoutServerError(iris.ErrServerClosed))
}
