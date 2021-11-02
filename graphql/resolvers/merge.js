const Libro = require ('../../modelli/libro')
const Autore = require ('../../modelli/autore')




const libri = async libriIds => {
    try {
        const libri = await Libro.find({_id:{$in : libriIds}});
        return libri.map(libro=>{
            return trasformalibro(libro);
        })
    } catch (err) {
        throw err;
    }

};

const librosingolo = async libroId => {
    try{
        const libro = await libro.findById(libroId);
        return trasformalibro(libro);
    } catch(err) {
        throw err;
    }
}



const autore = async autoreId => {
    try {
        const autore = await Autore.findById(autoreId);
        return {
            ...autore._doc,
            _id: autore._doc._id.toString(),
            libri_scritti: libri.bind(this, autore._doc.libri_scritti)
        };
    } catch (err) {
        throw err;
    }
};

const trasformalibro = libro => {
    return{
        ...libro._doc,
        _id: libro._doc._id.toString(),
        scrittore : autore.bind(this, libro._doc.scrittore)
    };
};


exports.trasformalibro = trasformalibro;
exports.autore = autore;
exports.libri = libri;
exports.librosingolo = librosingolo;
