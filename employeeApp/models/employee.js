/**
 * Created by bandlamx on 5/31/2015.
 */
var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var employeeSchema = Schema({
    firstName:String,
    lastName:String,
    employeeId:Number,
    email:String,
    gender:String,
    maritalStatus:String
});
var emp=mongoose.model("Employee",employeeSchema);
module.exports =emp;