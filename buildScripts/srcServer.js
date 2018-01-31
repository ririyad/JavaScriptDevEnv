// this file will configure a web server that will serve up the files in the source directory

import express from 'express';
import path from 'path';
import open from 'open';

var port = 3030;
var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
