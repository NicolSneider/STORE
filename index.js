const express = require("express")
const routerApi = require('./routes')

const app = express ()
const port = 3000

app.get("/", (req,res) => {
res.send("Hola mundo")
} )

app.get("/patitofeliz",(req, res) => {
  res.send("patitofeliz")
})




routerApi(app)

app.listen(port, ()=>{
  console.log("Mi puerto es "+ port)
})

//prueba
