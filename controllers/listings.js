const express=require('express');
const router=express.Router();

const Listing=require('../models/listing.js');

router.get('/',async(req,res)=>{
    res.render('listings/index.ejs');
});

router.get('/new',async(req,res)=>{
    res.render('listings/new.ejs');
});

router.post('/',async (req,res)=>{
    req.body.owner=req.session.user._id;
    await Listing.create(req.body);
    console.log(req.body);
    res.redirect('/listings');
});

module.exports=router;