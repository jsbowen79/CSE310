const { MongoClient } = require("mongodb"); 
require("dotenv").config();
const client = new MongoClient(process.env.MONGO_URI); 
let db; 

async function connectDB() {
    if (!db) {
        await client.connect();
        db = client.db("Database1");
        console.log("Connected to MongoDB")
    }
}    
 async function retrieveData(req, res){   
    try {
        await connectDB();
            const collection = db.collection("testprofile"); 
        const data = await collection.findOne({}); 
        res.json(data); 
        } catch (error) {
        console.error(error); 
        res.status(500).send("Error fetching Data");
    }
}; 


const defaultRoute = (req, res) => {
    res.send("Server Running");
}; 

module.exports = { defaultRoute, retrieveData }; 