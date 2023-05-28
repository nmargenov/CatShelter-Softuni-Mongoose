const { getAllCats } = require('../database');

const router = require('express').Router();

router.get(['/','/index'],async (req,res)=>{
    const cats = await getAllCats();
    res.render('index',{cats});
});

module.exports = router;
