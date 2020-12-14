'use strict';

const express = require('express');
const url = require('url');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  
  var q = url.parse(req.url, true).query;
  /*Return the year and month from the query object:*/
  var txt = q.year + " " + q.month;
 
  res.send('DevOPS CI/CD Handson!!\n' + txt);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
