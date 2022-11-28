const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

const conn = require('./db/connection');

// require models
const Functionary = require('./src/models/Functionary');

// require routes
const employeeRoutes = require('./src/routes/functionaryRoutes');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.use(express.static('public'));

// app.use('/', route);

conn.sync()
    .then(() => {
        app.listen(3000, () => console.log('Rodando na porta 3000'));
    })
    .catch(err => console.log(err));

