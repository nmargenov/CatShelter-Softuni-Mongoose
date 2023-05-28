const { addBreed, getAllBreeds, addCat, getCatByID, editCatByID, deleteCatByID } = require('../database');

const router = require('express').Router();

//Start of addBreed//////////////////////////////////////////////////////////////////////////////////////////////
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
//End of addBreed//////////////////////////////////////////////////////////////////////////////////////////////

//Start of addCat//////////////////////////////////////////////////////////////////////////////////////////////

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
            res.redirect('../index');
        }
        
    }
});

//End of addCat//////////////////////////////////////////////////////////////////////////////////////////////

//Start of details//////////////////////////////////////////////////////////////////////////////////////////////


router.get('/:catID/edit',async (req,res)=>{
    const catID = req.params.catID;
    
    const cat = await getCatByID(catID);
    
    if(!cat){
        res.status(404);
        res.render('404');
    }
    else{
        const breeds = await getAllBreeds();
        const {name,description,imageUrl,breed} = cat;
        res.render('editCat',{catID,name,description,imageUrl,breeds});
    }

});

router.post('/:catID/edit',async (req,res)=>{
    const name = req.body.name.trim();
    const description = req.body.description.trim();
    const imageUrl = req.body.imageUrl.trim();
    const breed = req.body.breed.trim();
    const catID = req.body.id;

    
    const breeds = await getAllBreeds();

    if(name == "" || description =="" || imageUrl == "" || breed == ""){
        res.status(400);
        res.render(`editCat`,{catID,breeds,name,description,imageUrl});
    }
    else{
        const editCat = await editCatByID(catID,name,description,imageUrl,breed);
        if(!editCat){
            res.status(400);
            res.render('editCat',{catID,breeds,name,description,imageUrl});
        }else{
            res.redirect('../../index');
        }
        
    }
});

//End of details//////////////////////////////////////////////////////////////////////////////////////////////

//Start of newHome///////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/:catID/newHome',async(req,res)=>{
    const catID = req.params.catID;

    const cat = await getCatByID(catID);
    
    if(!cat){
        res.status(404);
        res.render('404');
    }
    else{
        await deleteCatByID(catID);
        res.redirect('../../index');
    }
});

module.exports = router;