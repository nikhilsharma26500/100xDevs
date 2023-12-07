const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const secretKey = "h3ll0w0r1d";

////////////////////////// Middleware for ADMIN //////////////////////////
const generateJWT = (user) => {
  const payload = { username: user.username };
  return jwt.sign(payload, secretKey, { expiresIn: "1hr" });
};

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).send("Error here 1");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).send("Error here 2");
  }
};

////////////////////////// Middleware for USER //////////////////////////

////////////////////////// Admin routes //////////////////////////
// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const admin = req.body;
  const existingAdmin = ADMINS.find((a) => a.username === admin.username);
  if (existingAdmin) {
    res.status(401).json({ message: "This admin account already exists" });
  } else {
    ADMINS.push(admin);
    const token = generateJWT(admin);
    res.status(200).json({ message: "Admin account created!", token });
  }
});

app.post("/admin/login", (req, res) => {
  // logic to log in admin
  const { username, password } = req.headers;

  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );
  if (admin) {
    const token = generateJWT(admin);
    res.status(200).json({ message: "Admin logged in successfully!", token });
  } else {
    res.status(401).json({ message: "Admin does not exist." });
  }
});

app.post("/admin/courses", authenticateJwt, (req, res) => {
  // logic to create a course
  const course = req.body;
  course.id = COURSES.length + 1;
  COURSES.push(course);
  res
    .status(200)
    .json({ message: "Course was added successfullt", CourseID: course.id });
});

app.put("/admin/courses/:courseId", authenticateJwt, (req, res) => {
  // logic to edit a course
  const courseID = parseInt(res.params.courseID);

  const courseIndex = COURSES.findIndex((c) => c.id === courseID);

  if (courseIndex > -1) {
    const update = { ...COURSES[courseIndex], ...req.body };
    COURSES[courseIndex] = update;
    res.status(200).json({ message: "Course added successfully!" });
  } else {
    res.status(401).json({ message: "Course could not be added" });
  }
});

app.get("/admin/courses", authenticateJwt, (req, res) => {
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
