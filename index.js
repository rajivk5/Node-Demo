const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://rajivr021_db_user:PWXiqBHbC9ztT2bM@cluster0.hbxy7dt.mongodb.net/?appName=Cluster0";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  //*******Delete a collection
  // const users = db.collection("users1");
  // const result = await users.drop();
  // console.log(result);


  //*******Insert a collection
  // const users = db.collection('schoolData')
  // let newData = await users.insertOne({Name:'Rajiv'});
  // console.log(newData);

  //*******insert a new user on a collection:
    // const users = db.collection('schoolData');
    // let newuser = await users.insertOne({Name:'sanjiv'})
    // console.log(newuser);
    

  
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
