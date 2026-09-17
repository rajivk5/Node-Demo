const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://rajivr021_db_user:PWXiqBHbC9ztT2bM@cluster0.hbxy7dt.mongodb.net/?appName=Cluster0";
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
