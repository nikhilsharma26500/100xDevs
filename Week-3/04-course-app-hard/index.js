const express = require("express");
const app = express();
const MongoDB = require("mongoose");
const jwt = require("jsonwebtoken");

app.use(express.json());
require("dotenv").config();

// Database Schemas
const USER = new MongoDB.Schema({
  username: String,
  password: String,
  purchasedCourse: [{ type: MongoDB.Schema.Types.ObjectId, ref: "Course" }],
});

const ADMIN = new MongoDB.Schema({
  username: String,
  password: String,
});

const COURSE = new MongoDB.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

// Database Models
const User = MongoDB.model("USER", USER);
const Admin = MongoDB.model("ADMIN", ADMIN);
const Course = MongoDB.model("COURSE", COURSE);

// Auth Middleware
const secret = "h3ll0w0r1d";

const auth = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth) {
    const token = auth.split(" ")[1];
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
});

app.post("/admin/login", (req, res) => {
  // logic to log in admin
});

app.post("/admin/courses", (req, res) => {
  // logic to create a course
});

app.put("/admin/courses/:courseId", (req, res) => {
  // logic to edit a course
});

app.get("/admin/courses", (req, res) => {
  // logic to get all courses
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
});

app.post("/users/login", (req, res) => {
  // logic to log in user
});

app.get("/users/courses", (req, res) => {
  // logic to list all courses
});

app.post("/users/courses/:courseId", (req, res) => {
  // logic to purchase a course
});

app.get("/users/purchasedCourses", (req, res) => {
  // logic to view purchased courses
});

// URL Connect Link to database
const DB_USERNAME = String(process.env.DB_USERNAME);
const DB_PASSWORD = String(process.env.DB_PASSWORD);
const DB_CLUSTER_NAME = String(process.env.DB_CLUSTER_NAME);
const DB_NAME = String(process.env.DB_NAME);

MongoDB.connect(
  `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER_NAME}.hcfjutf.mongodb.net/${DB_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => console.log("Error detected in connecting Database: ", err));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
