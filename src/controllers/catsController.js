const { addBreed, getAllBreeds } = require('../database');

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

router.get('/addCat',async (req,res)=>{
    const breeds = await getAllBreeds();

    res.render('addCat',{breeds});
});

router.post('/addCat',async (req,res)=>{
    
});

module.exports = router;