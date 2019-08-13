const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World! asdfasdf asdf asdf last onewf sadf asdfasdf');
});

app.get('/what', (req, res) => {
    res.send('What the fudge hhahh asdf alksdjf lkajsdf lkjadsf this is an additional route');
});

module.exports.handler = serverless(app);