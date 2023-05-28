const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name:String,
    description:String,
    imageUrl:String,
    breed:String
});