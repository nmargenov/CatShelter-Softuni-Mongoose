const { addBreed, getAllBreeds, addCat } = require('../database');

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
    const name = req.body.name.trim();
    const description = req.body.description.trim();
    const imageUrl = req.body.imageUrl.trim();
    const breed = req.body.breed.trim();
    
    const breeds = await getAllBreeds();

    if(name == "" || description =="" || imageUrl == "" || breed == ""){
        res.status(400);
        res.render('addCat',{breeds,name,description,imageUrl,breed});
    }else{
        const newCat = await addCat(name,description,imageUrl,breed);
        if(!newCat){
            res.status(400);
            res.render('addCat',{breeds,name,description,imageUrl,breed});
        }else{
            res.status(201);
            res.render('index');
        }
        
    }
});

module.exports = router;