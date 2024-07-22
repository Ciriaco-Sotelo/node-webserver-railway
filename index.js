require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estático (middleware)
app.use( express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Lou Curioso',
        titulo: 'Titulo home'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Salem Curioso',
        titulo: 'Titulo de generic'
    })
});

app.get('/elements', (req, res) => {
    res.render('generic', {
        nombre: 'Mimosa Cucurumbe',
        titulo: 'Titulo de elements'
    })
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Ejemplo de app escuchando en http://localhost:${port}`);
})