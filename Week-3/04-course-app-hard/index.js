const express = require("express");
const app = express();
const MongoDB = require("mongoose");
const jwt = require("jsonwebtoken");

app.use(express.json());
require("dotenv").config()

// URL Connect Link to database
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_CLUSTER_NAME = process.env.DB_CLUSTER_NAME
const DB_NAME = process.env.DB_NAME

MongoDB.connect(
  `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER_NAME}.hcfjutf.mongodb.net/${DB_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB Connected Successfully'))
  .catch(err => console.log("Error detected in connecting Database: ", err));

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

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
