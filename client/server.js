// include dependencies
var express = require('express');
var proxy = require('http-proxy-middleware');

var apiProxy = proxy('/api', {
  target: 'http://localhost:8080/',
  pathRewrite: {
    '^/api/': '/' // remove base path
  },
});

// mount `exampleProxy` in web server
var app = express();
app.use('/api', apiProxy);
app.listen(3000);
