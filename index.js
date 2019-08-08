const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World! asdfasdf asdf asdf');
});

app.get('/what', (req, res) => {
    res.send('What the fudge hhahh asdf alksdjf lkajsdf lkjadsf');
});

module.exports.handler = serverless(app);