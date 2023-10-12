var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var static = require('node-static');
const router = express.Router();
const flash = require('connect-flash');
var app = express();
var cookieParser = require('cookie-parser');
var csrf = require('csurf')
var all_route = require('./router/router');
const fs = require('fs')
const path = require('path')
const https = require('https')
const httpolyglot = require('httpolyglot')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
//.ENV Variable
require('dotenv').config();
const port = process.env.PORT;
const options = {
  key: fs.readFileSync(path.join(__dirname,'.','ssl','key.pem'), 'utf-8'),
  cert: fs.readFileSync(path.join(__dirname,'.','ssl','cert.pem'), 'utf-8')
}
const server = httpolyglot.createServer(options, app)
app.use('/',router);
all_route(router);

server.listen(port);
console.log(`Server is running on port ${port}`);