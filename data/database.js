const { mongoClient } = require("mongodb"); 
const URL = require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI); 

let db; 

async function connectDB() {
    await client.connect(); 
    db = client.db("Database1"); 
    console.log("Connected to MongoDB")
}