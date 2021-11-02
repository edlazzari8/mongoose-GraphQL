const {  ApolloServer } = require ('apollo-server');
const typeDefs= require ('./graphql/schema/index');
const resolvers = require('./graphql/resolvers/index')
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/libreriaboh589', {
    useNewUrlParser: true
});
const server = new ApolloServer({
    typeDefs,
    resolvers
});
server.listen(4000).then(({url})=>{
    console.log(`GraphQL server ready at ${url}`)
});