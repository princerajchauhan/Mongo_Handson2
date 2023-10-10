const { MongoClient } = require("mongodb")
require("dotenv").config()

const client = new MongoClient(process.env.Mongo_URI)

module.exports = client