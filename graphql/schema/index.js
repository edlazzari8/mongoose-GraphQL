module.exports =`
type Libro{
    _id: ID!
    titolo: String!
    descrizione: String
    scrittore: Autore!
}
type Autore {
    _id: ID!
    nome: String!
    libri_scritti: [Libro!]
}
input Libroinput{
    titolo: String!
    descrizione: String
    scrittore : String!
}
input Autoreinput{
    nome: String! 
}


type Query {
    tutti_libri: [Libro!]!
    autori: [Autore!]!
}
type Mutation{
    aggiungi_libro(libroinput: Libroinput) : Libro ### JWT
    aggiungi_autore(autoreinput:Autoreinput) : Autore
    elimina_autore(autoreinput:Autoreinput): String   
}
 schema {
     query: Query
     mutation: Mutation
 }




`;
