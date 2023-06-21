'use strict';

const express = require('express');

// Constants
const PORT = 8081;

// App
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log('Time:', new Date().toISOString())
  next()
})

let on = true;
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.get('/toggle', function (req, res) {
  on = !on
  res.send(true)
});

app.get('/env', function(req,res) {
  res.send(process.env)
})

app.get('/health', function (req, res) {
  if(on) 
  {
    res.send("ok");
    return;
  }
  res.status(500).send("not ok")
});
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
