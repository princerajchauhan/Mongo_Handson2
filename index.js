const express = require("express")
const client = require("./DB/connection")
const routes = require("./Routing/userRoutes")

require("dotenv").config()

const port = process.env.PORT

const server = express()

const dbconnect = async() =>{
    try {
        await client.connect()
        console.log("Connected to Database.....")
    } catch (error) {
        console.log("Error :",error)
    }
}
dbconnect()
server.use("/api", routes)
server.get("/", (req, res) =>{
    res.status(200).send("Hello Handson2 of MongoDb")
})

server.listen(port, () =>{
    try {
        console.log(`Server is running on port: ${port}`)
    } catch (error) {
        console.log(`Server get error: ${error}`)
    }
})