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

module.exports = {
    addBreed
}