const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/angular_authors')
const QuoteSchema = new mongoose.Schema({
    quote:{
        type:String,
        required:[true, "please enter a quote for this author!"],
        minlength: [3, "A quote must be at least 3 characters long!"]
    },
    votes:{type:Number, default: 0}
})
const AuthorsSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:[true, "Please enter a name"], 
        minlength: [3, "Author's name must be at least 3 characters long!"]
    },
    quotes:[QuoteSchema]
},{timestamps:true})
module.exports = {
    Authors: mongoose.model('Authors', AuthorsSchema),
    Quotes: mongoose.model('Quotes', QuoteSchema)
}