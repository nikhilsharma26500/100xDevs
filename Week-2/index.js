const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");

app.use(bodyParser.json());

function sum(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}


function handleFirstRequest(req, res) {
  var counter = req.query.counter;

  var calculatedSum = sum(counter);

  var answerObject = {
    sum: calculatedSum,
  };

  res.status(200).send(answerObject);
}

app.get('/handleSum', handleFirstRequest);
// app.post("/handleSum", handleFirstRequest);

function started() {
  console.log("Server started on port 3000");
}

app.listen(port, started);

var calculatedSum = sum(1000);
console.log(calculatedSum);
