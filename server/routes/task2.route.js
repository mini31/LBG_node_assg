const task2 =  require('express').Router();

task2.get('http://localhost:8181/task2', (req,res)=>{

  console.log(req.query);
});

module.exports = task2;
