'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

app.use((req, res, next) => {
  console.log('Time:', Date.now().toISOString())
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
