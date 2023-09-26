/*process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(5000);
module.exports = app;

console.log('Server running at http://localhost:5000/');*/

// changes below this line from freecodecamp how to deploy nodejs to render

const express = require('./config/express');
const app = express();
const PORT = process.env.PORT || 3030;

// your code
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});