const mongoose = require('mongoose')

var employeeSchema = new mongoose.Schema({
   
    fullName :{
        type : String
        // required : "Required!!"
    },
    email :{
        type : String
    },
    contactNo:{
        type : String
    },
    empId :{
        type : String
    }
});

// this employee is pural version of collection employees
// dont give space while intialization
mongoose.model('Employee',employeeSchema);