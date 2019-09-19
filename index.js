const serverless = require('serverless-http');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const bodyParser = require('body-parser-graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type RootQuery {
    hello: String
  }
  
  schema {
    query: RootQuery
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
};

var app = express();
app.use(bodyParser.graphql());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

module.exports.handler = serverless(app);
