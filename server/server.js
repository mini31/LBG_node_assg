const express = require('express')
    , app = express()
    //importing fs moudle
    , fs = require('fs')
    //importing routes
    , task2 = require('./routes/task2.route.js')
    //importing firstNonRepeatedCharacter
    , firstNonRepeatedCharacter = require('./firstNonRepeatedCharacter.js');

app.use(express.static('./../'));

app.get('/task1',function(req,res){
  fs.readFile('./demo.txt', 'utf8', function(err, contents) {
    res.status(200).send(contents.toString());
  });
})

app.get('/task2',function(req,res){
  var value = req.query.value1 * req.query.value2;
  console.log(value);
  res.status(200).send(value.toString());
})

app.get('/task3',function(req,res){
  console.log(req.query.value);
  res.status(200).send(firstNonRepeatedCharacter(req.query.value).toString());
})

app.listen(8000, function() {
    console.log('server started on  8000');
});
