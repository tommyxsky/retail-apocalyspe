const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');
const flash = require('connect-flash');
const expressValidator = require('express-validator');
const routes = require('./routes/index');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers');

// create our Express app
const express = require('express');
// start express
const app = express();

// HERE IS WHERE WE REQUIRE THE DATABASE
require( './db/db' ); // ADD THIS LINE


// set up port
// if on production we'll use an environment variable
// otherwise we'll use our developer port of 3000
const port = process.env.PORT || 3000;

// I'll have a front end
// And I'll need code for the browser
// So I'll set up my public assets folder
app.use('/assets', express.static(__dirname + '/public'));

// I need a view engine for templating
// I'm using pug
// This is server side templating
// I'll use Angular for client site templating
app.set('view engine', 'pug');

// Time to listen to the port
app.listen(port);
