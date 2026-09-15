const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://rajivr021_db_user:PWXiqBHbC9ztT2bM@cluster0.hbxy7dt.mongodb.net/?appName=Cluster0';
const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);

  await db.dropDatabase();
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());