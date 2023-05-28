const mongoose = require('mongoose');

const Cat = require('./models/Cat');
const Breed = require('./models/Breed');

async function connectDb(){
    await mongoose.connect('mongodb://127.0.0.1:27017/CatSchelter');
}

async function addBreed(breed){
    connectDb();

    const existingBreed = await Breed.findOne({breed});
    
    if(existingBreed){
        return;
    }

    await Breed.create({
       breed 
    });
}

async function getAllBreeds(){
    connectDb();
    
    return await Breed.find();
}

async function addCat(name,description,imageUrl,breed){
    connectDb();

    const existingBreed = await Breed.find({breed});

    if(existingBreed.length == 0){
        return false;
    }

    
    const createdCat = await Cat.create({
        name,
        description,
        imageUrl,
        breed,
    });

  return createdCat;
}

async function getAllCats(){
    connectDb();

    return await Cat.find();
}

async function getCatByID(id){
    connectDb();

    if(!mongoose.Types.ObjectId.isValid(id)){
        return false;
    }
    return await Cat.findById(id);
}

async function editCatByID(id,name,description,imageUrl,breed){
    connectDb();

    if(!mongoose.Types.ObjectId.isValid(id)){
        return false;
    }
    return await Cat.findByIdAndUpdate(id,{
        $set:{
            name,
            description,
            imageUrl,
            breed
        }
    });
}

async function deleteCatByID(id){
    connectDb();

    if(!mongoose.Types.ObjectId.isValid(id)){
        return false;
    }

    return await Cat.findByIdAndDelete(id);
}

module.exports = {
    addCat,
    getAllCats,
    getCatByID,
    editCatByID,
    deleteCatByID,
    addBreed,
    getAllBreeds
}