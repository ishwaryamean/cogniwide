var express = require('express');
var cors=require('cors')
const fs = require('fs');
const path = require('path');
require('dotenv').config()
var indexRouter = require('./routes/index');

var app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Middleware to log API requests
app.use((req, res, next) => {
  const logFilePath = path.join(__dirname, 'logs.txt');
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${req.method} ${req.url}\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
      if (err) {
          console.error('Error writing to log file:', err);
      } else {
          console.log('Log entry written successfully:', logEntry);
      }
  });

  next();
});





//router file
app.use('/', indexRouter);











const port = process.env.PORT || 8080

app.listen(port,()=>{
  console.log(`server is listening on port ${port}`);
})

module.exports = app;
