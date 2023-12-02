const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

// Middlewares for ADMIN
const adminAuth = (req, res, next) => {
  const { username, password } = req.headers;
  const existingAdmin = ADMINS.find(
    (a) => a.username == username && a.password == password
  );
  if (existingAdmin) {
    next(); // send this back to the route
  } else {
    res.status(404).json({ message: "Admin not found!" });
  }
};

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const admin = req.body;
  const existingAdmin = ADMINS.find((a) => a.username === admin.username);
  if (existingAdmin) {
    res.status(401).json({ message: "Admin already exists" });
  } else {
    ADMINS.push(admin);
    res.status(200).json({ message: "Admin account created successfully!" });
  }
});

app.post("/admin/login", adminAuth, (req, res) => {
  // logic to log in admin
  res.status(200).json({ message: "Logged in successfully!" });
});

let courseID = 0
app.post("/admin/courses", adminAuth, (req, res) => {
  // logic to create a course
  const course = req.body

  course.id = ++courseID
  COURSES.push(course)
  res.json({message: "Course was added successfully!", courseID: course.id})
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
