const mongoose = require ('mongoose');
const schema = require('../graphql/schema');

const Schema = mongoose.Schema;

const autoreSchema = new Schema ({
    nome : {
        type: String,
        required: true
    },
    libri_scritti: [{
        type: Schema.Types.ObjectId,
        ref : 'Libro'
    }]
});
module.exports = mongoose.model('Autore', autoreSchema)