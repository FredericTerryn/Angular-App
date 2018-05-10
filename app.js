const express= require('express');
const path= require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const router = express.Router();
const jwt = require('jsonwebtoken');

//connect to database, de connectie zit dus in de config file
mongoose.connect(config.database);

//iets erin zetten om te zien of je connected bent
mongoose.connection.on('connected', ()=> {
    console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err)=> {
    console.log('db error' + err);
});

const app = express();


const Users = require('./routes/Users');
const Uitspraken = require('./routes/Uitspraken');
const Examens = require('./routes/Examens');

//poortnr
const port = 3000; 

//cors middleware, dit is voor requests van uit een andere domainnaam, kweet nie of het nodig is, dan moet je deleten enzo nie meer als functie ingeven? NOG EENS BEKIJKEN VOOR MONDELING!!
app.use(cors());



// set static folder HIERIN ZAL HEEL JE ANGULAR APP DAN ZITTEN, als je nu een public folder met een index zou aanmaken kom je daar terecht bij de root
app.use(express.static(path.join(__dirname, 'public')));

//Body parser Middleware, het parset inkomende requests zodat je data uit bv forms kan halen
app.use(bodyParser.json());

//alles na /users/ gaat naar de users.js voor verdere routing
app.use('/Users', Users);
app.use('/Uitspraken', Uitspraken);
app.use('/Examens', Examens);


//passport middleware
app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);

//index.route, hier start de server op, allee op de '/', dus alsje niets instelt ga je weergeven, invalid endpoint, dus dit gebruik je eigelijk niet
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

