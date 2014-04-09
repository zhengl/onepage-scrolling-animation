var http = require('http');
var connect = require('connect');

var app = connect()
  .use(connect.static('public'));

http.createServer(app).listen(process.env.PORT || 3000);