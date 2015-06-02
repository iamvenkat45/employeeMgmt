var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/Employee', function(err) {
  if (err) {
    console.err(err);
  } else {
    console.log('Connected');
  }
});
var Employee=require('../models/employee.js');

/* GET users listing. */
router.get('/list', function(req, res, next) {
  Employee.find(function(err,empData){
    if (err)
      console.error(err);
    else{
      console.log(empData);
      res.send(empData);
    }
  })
});

router.post('/add',function(req,res){
  var emp= new Employee({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    employeeId:req.body.employeeId,
    email:req.body.email,
    gender:req.body.gender,
    maritalStatus:req.body.maritalStatus
  });
  emp.save(function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log(emp);
      res.send(emp);
    }
  });
});

router.get("/:id",function(req, res){
  Employee.findById(req.params.id,function(err,emp){
    if(err){
      console.log(err);
    }
    else{
      console.log(emp);
      res.send(emp);
    }
  })
});

router.put("/:id",function(req,res){
  Employee.findById(req.params.id,function(err,emp){
    if(err){
      console.log(err);
    }
    else{
      console.log(emp);
      emp.firstName=req.body.firstName;
      emp.lastName=req.body.lastName;
      emp.employeeId=req.body.employeeId;
      emp.email=req.body.email;
      emp.gender=req.body.gender;
      emp.maritalStatus=req.body.maritalStatus;

      emp.save(function(saveErr){
        if(saveErr){
          console.log(saveErr);
        }
        else{
          console.log("emp updated");
          res.send(emp);
        }
      })
    }
  })
});

router.delete("/:id",function(req,res){
  Employee.remove({_id:req.params.id},function(err,data){
    if(err){
      console.log(err);
    }
    else{
      console.log(req.params.id);
      res.send(req.params.id);
    }
  })
});

module.exports = router;
