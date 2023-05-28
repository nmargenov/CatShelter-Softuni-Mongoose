const { addBreed } = require('../database');

const router = require('express').Router();

router.get('/addBreed',(req,res)=>{
    res.render('addBreed');
});

router.post('/addBreed',async (req,res)=>{
    const breed = req.body.breed.trim();
    if(breed == ""){
        res.status(400)
        res.render('addBreed');
    }else{
        await addBreed(breed);
        res.status(201)
        return res.render('index');
    }
});

router.get('/addCat',(req,res)=>{
    res.render('addCat');
});

module.exports = router;