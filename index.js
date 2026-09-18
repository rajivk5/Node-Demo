const { MongoClient } = require("mongodb");
require("dotenv").config();

const id = process.env.MONGO_ID;
const pass = process.env.MONGO_PASS;
const url = `mongodb+srv://${id}:${pass}@cluster0.hbxy7dt.mongodb.net/?appName=Cluster0`;


const client = new MongoClient(url);

const dbName = "newDB";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const collection = client.db(dbName).collection("users");
  console.log("collection created successfully");

  // let many = await collection.insertMany([{ Name: "Rajiv", age: 27 },{Name:'Sanjiv',age:20},{Name:'Nikesh',age:22}]);
  // console.log(many);

  let result = await collection.find({Name:'Rajiv'}).toArray()
  console.log(result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
