const express = require('express');
const mongoose = require('mongoose')

const router = express.Router();
var Employee = mongoose.model('Employee')

router.get("/",(req,res)=>{
    res.render('employee/empForm')
})

router.post("/",(req,res)=>{
    (req.body._id=='')?insertOne(req,res):updateOne(req,res);
})

function insertOne(req,res){
    var employee = new Employee();
       
    employee.empId = req.body.empId;
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.contactNo = req.body.contactNo;
       
    employee.save((err,doc)=>{   
       (!err)?res.redirect("employee/empList"):res.send(`error occured ${err}`)       
    })
}

function updateOne(req,res){
// in this below function first para is filter,second one is updated data,third is to store updated data into doc,4th is callback
    Employee.findOneAndUpdate({_id:req.body._id},req.body,{new:true},(err,doc)=>{
        (!err)?res.redirect('employee/empList'):console.error(`error - ${err} `)
    })
}

router.get("/empList",(req,res)=>{
    Employee.find((err,docs)=>{
        (!err)?res.render('employee/empList',{data:docs}):console.log(`err ${err}`)
    }).lean()    
})
    
router.get(`/:id`,(req,res)=>{
    Employee.findById(req.params.id,(err,doc)=>{
        (!err)?res.render('employee/empForm',{ employee:doc }) :console.log(`error - ${err}`)
    }).lean()        
});
    router.get(`/delete/:id`,(req,res)=>{
        Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
            (!err)?res.redirect('/employee/empList') :console.log(`error - ${err}`)
            // res.render('./employee/empForm',{ employee:doc })
        })        
});




module.exports = router;