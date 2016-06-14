var express = require('express');

// create our application
var app = express();

app.use(express.static("public"));

app.listen(3000, function(){
  console.log("Nate told me to listen on 3000..	");
});
