const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const secretKey = "h3ll0w0r1d"

////////////////////////// Middleware for ADMIN //////////////////////////
const generateJWT = (value) => {
  return jwt.sign(value, secretKey, {noTimestamp: true, expiresIn: '1hr'})
}

////////////////////////// Middleware for USER //////////////////////////

////////////////////////// Admin routes //////////////////////////
// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const admin = req.body
  const existingAdmin = ADMINS.find(a => a.username === admin.username)
  if(existingAdmin){
    res.status(401).json({message: "This admin account already exists"})
  }else{
    ADMINS.push(admin)
    const token = generateJWT(admin)
    res.status(200).json({message: "Admin account created!", token})
  }
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

////////////////////////// User routes //////////////////////////
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
