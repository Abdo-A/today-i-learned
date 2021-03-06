const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const passport = require('passport');

const app = express();

// Models
require('./models/loadModels');

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS Middleware
app.use(cors());

// DB Connect
require('./config/dbconnect');

// Passport Config
app.use(passport.initialize());
require('./config/passport')(passport);

// Cross Origin Problem
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Routes
app.use('/api/user', require('./routes/user'));
app.use('/api/daily', require('./routes/daily'));

const port = process.env.PORT || 3750;

app.listen(port, () => console.log(`Server started on port ${port}`));

// To push to heroku, we just do 'git push heroku master' from the backend
