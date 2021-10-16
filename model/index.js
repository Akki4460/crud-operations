const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/crudOperations',{ useNewUrlParser: true },(err)=>{
    
    (!err)?console.log("connection succesful"):console.error(`error! - ${err}`);
    
})
 require("./employee.Model");
// mongoose.model('Employee', employeeSchema);