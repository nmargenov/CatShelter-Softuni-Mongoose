const router = require('express').Router();

router.get('/addBreed',(req,res)=>{
    res.render('addBreed');
});

router.get('/addCat',(req,res)=>{
    res.render('addCat');
});

module.exports = router;