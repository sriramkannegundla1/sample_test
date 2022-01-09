const express = require("express")
const router = express.Router()
const db = require('../models')


router.get('/all', (req, res)=>{
    //db.datatable
    db.viewcount.findAll()
    .then(data =>{
        console.log(data)
         res.send(data)
        })
    .catch(err=>console.log(err))    
})

router.post('/create',(req, res)=>{
    db.viewcount.create({
        views:1
    })
    .then(data => res.send(data))
    .catch(err=>console.log(err))
})

router.put('/update',(req, res)=>{
    console.log(req.body)
    db.viewcount.update({
        views:req.body.views
    },{
        where:{
            id:req.body.id
        }
    }
    )
    .then(data => res.send("Likes updated"))
    .catch(err=>console.log(err))
})

module.exports = router;