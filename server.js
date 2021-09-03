const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');

const config = require('./config/config');

//GraphQL schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

//Root resolver
const root = {
  message: ()=> 'Hello World!'
};

//Create an express server and a GraphQL endpoint
const app= express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(config.port,()=>console.log(`Express GraphQL Server Now Running On localhost:${config.port}/graphql`));