const serverless = require('serverless-http');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const bodyParser = require('body-parser-graphql');
const aws = require('aws-sdk');

const lambda = new aws.Lambda({
    region: 'us-west-2',
});

const invoke = lambda.invoke({
    FunctionName: 'my-express-application-users-dev-users',
    Payload: JSON.stringify({test: 'This is some data'}),
});

const test = invoke.promise();

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
    hello: async () => {
        const what = await test;
        const data = JSON.parse(what.Payload.toString());
        console.log('the waited for function', what, data);
        console.log('something else', data['result']);
        console.log('some poop', data[0].poop);
        return what.Payload.toString();
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
