const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const id = process.env.MONGO_ID;
const pass = process.env.MONGO_PASS;

const app = express();
app.use(express.json());
const PORT = 3001;
const mongo_URL = `mongodb+srv://${id}:${pass}@cluster0.hbxy7dt.mongodb.net/?appName=Cluster0`;

const DB_NAME = "HelloWorld";

const client = new MongoClient(mongo_URL);

async function main() {
  try {
    await client.connect();

    console.log("monogodb connected");

    const db = client.db(DB_NAME);
    const collection = db.collection("collegeData");


    app.get('/',(req,res)=>{
        res.json({
            message:'College API is running',
            status:'OK'
        })
    })



    app.get("/users", async (req, res) => {
      try {
        const users = await collection.find({}).toArray();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });






    app.listen(PORT, () => {
      console.log(`server is successfully running on port:${PORT}`);
    });
  } catch (error) {
    console.log(`Failed to start server:`, error);
  }
}

main();
