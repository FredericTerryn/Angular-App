const express= require('express');
const path= require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

mongoose.connection.on('connected', ()=> {
    console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err)=> {
    console.log('db error' + err);
});

const app = express();

const Users = require('./routes/Users');

//poortnr
const port = process.env.port || 8080; 

//cors middleware
app.use(cors());



// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser Middleware
app.use(bodyParser.json());

app.use('/Users', Users);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);

//index.route
app.get('/', (req, res) => {
    res.send('invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//start server
app.listen(port, () => {
    console.log('Server started successfully on port' + port);
});