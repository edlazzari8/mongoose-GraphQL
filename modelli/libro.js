const mongoose = require ('mongoose');


const Schema = mongoose.Schema;
const libroSchema = new Schema({
    titolo: {
        type: String,
        required: true
    },
    descrizione: {
        type : String,
        required : false
       
    },
    scrittore : {
        type : Schema.Types.ObjectId,
        ref : 'Autore'
    }



});
module.exports = mongoose.model('Libro', libroSchema)