const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

////////////////////////// Middleware for ADMIN //////////////////////////
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

////////////////////////// Middleware for USER //////////////////////////
const userAuth = (req, res, next) => {
  const { username, password } = req.headers;
  const existingUser = USERS.find(
    (u) => u.username === username && u.password === password
  );
  if (existingUser) {
    next();
  } else {
    res.status(404).json({ message: "User not found!" });
  }
};

////////////////////////// Admin routes //////////////////////////
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

let courseID = 0;
app.post("/admin/courses", adminAuth, (req, res) => {
  // logic to create a course
  const course = req.body;

  course.id = ++courseID;
  COURSES.push(course);
  res.json({ message: "Course was added successfully!", courseID: course.id });
});

app.put("/admin/courses/:courseId", adminAuth, (req, res) => {
  // logic to edit a course
  const courseID = parseInt(req.params.courseId);

  const course = COURSES.find((crs) => crs.id === courseID);
  if (course) {
    Object.assign(course, req.body);
    res.status(200).json({ message: "Courses updated!", Details: course });
  } else {
    res.status(404).json({ message: "Course not found!" });
  }
});

app.get("/admin/courses", adminAuth, (req, res) => {
  // logic to get all courses
  res.status(200).json({ courses: COURSES });
});

////////////////////////// User routes //////////////////////////

app.post("/users/signup", (req, res) => {
  // logic to sign up user
  const user = {
    username: req.body.username,
    password: req.body.password,
    PuchasedCourse: []
  }
  const existingUser = USERS.find(u => u.username === user.username)
  if (existingUser){
    res.status(401).json({message: "User already exists!"})
  }else{
    USERS.push(user)
    res.status(200).json({message: "User Account Created!"})
  }
});

app.post("/users/login", userAuth, (req, res) => {
  // logic to log in user
  res.status(200).json({message: "User logged in successfully!"})
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
