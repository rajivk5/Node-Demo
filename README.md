# Node-Demo 🚀

A beginner-friendly backend project for learning **Node.js, Express.js, MongoDB, and REST APIs**.

This project demonstrates how to connect an Express server with **MongoDB Atlas** and perform basic database operations through API endpoints.

---

## 🛠️ Tech Stack

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework for building APIs
* **MongoDB** – NoSQL database
* **MongoDB Node.js Driver** – Connects Node.js with MongoDB
* **dotenv** – Manages environment variables

---

## 📁 Project Structure

```text
Node-Demo/
│
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd Node-Demo
```

### 3. Install dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
MONGO_ID=your_mongodb_username
MONGO_PASS=your_mongodb_password
```

The application reads these values using `dotenv`:

```js
require("dotenv").config();

const id = process.env.MONGO_ID;
const pass = process.env.MONGO_PASS;
```

> **Important:** Never commit your `.env` file or MongoDB credentials to GitHub.

Add the following to `.gitignore`:

```text
node_modules/
.env
```

---

## 🗄️ MongoDB Configuration

The project currently uses:

```text
Database: HelloWorld
Collection: collegeData
```

MongoDB connection:

```js
const { MongoClient } = require("mongodb");

const client = new MongoClient(mongo_URL);
```

Database and collection:

```js
const db = client.db("HelloWorld");
const collection = db.collection("collegeData");
```

---

## ▶️ Run the Project

Start the server with:

```bash
node server.js
```

The server runs on:

```text
http://localhost:3001
```

---

# 📡 API Endpoints

## 1. Health Check

### GET `/`

```text
http://localhost:3001/
```

Response:

```json
{
  "message": "College API is running",
  "status": "OK"
}
```

---

## 2. Get All Users

### GET `/users`

```text
http://localhost:3001/users
```

MongoDB query:

```js
collection.find({}).toArray();
```

Returns all documents from the `collegeData` collection.

---

## 3. Filter Users by City

### GET `/users?city=Delhi`

```text
http://localhost:3001/users?city=Delhi
```

Express reads the query parameter using:

```js
const city = req.query.city;
```

MongoDB filter:

```js
const users = await collection
  .find({ city })
  .toArray();
```

Example:

```text
/users?city=Delhi
```

returns users whose city is:

```text
Delhi
```

---

## 🧠 What This Project Teaches

This project is mainly for practicing:

### Node.js

* Modules
* npm
* Environment variables
* Async/await
* MongoDB driver

### Express.js

* Express server
* Routes
* Request and response
* Query parameters
* Route parameters
* Middleware
* HTTP status codes
* JSON responses

### MongoDB

* Database connection
* Collections
* Documents
* `find()`
* `findOne()`
* `insertOne()`
* `insertMany()`
* `updateOne()`
* `deleteOne()`
* Query filters
* MongoDB operators

---

## 🔄 Request Flow

The basic architecture of the project is:

```text
Client
  │
  │ HTTP Request
  ▼
Express.js
  │
  │ MongoDB Query
  ▼
MongoDB Atlas
  │
  │ Data
  ▼
Express.js
  │
  │ JSON Response
  ▼
Client
```

For example:

```text
GET /users?city=Delhi
        │
        ▼
   req.query.city
        │
        ▼
 { city: "Delhi" }
        │
        ▼
 MongoDB find()
        │
        ▼
 Matching documents
        │
        ▼
     res.json()
```

---

## 🧪 Testing

You can test the API using:

* Browser
* Postman
* Thunder Client
* curl

Example:

```bash
curl http://localhost:3001/users
```

With a city filter:

```bash
curl "http://localhost:3001/users?city=Delhi"
```

---

## 🚧 Future Improvements

Planned learning exercises:

* [ ] `GET /users/:id`
* [ ] `GET /users?age=30`
* [ ] Multiple query parameters
* [ ] `POST /users`
* [ ] `PATCH /users/:id`
* [ ] `DELETE /users/:id`
* [ ] Request validation
* [ ] Error handling
* [ ] Express middleware
* [ ] MongoDB ObjectId handling
* [ ] API authentication
* [ ] API project structure
* [ ] Controller and route separation

---

## 🎯 Purpose

This repository is a practical learning project for understanding how **Node.js, Express.js, REST APIs, and MongoDB work together** to build a backend application.
