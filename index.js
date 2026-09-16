const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://rajivr021_db_user:PWXiqBHbC9ztT2bM@cluster0.hbxy7dt.mongodb.net/?appName=Cluster0";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const collection = client.db(dbName).collection("collegeData");
  console.log("collection created successfully");


  

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
