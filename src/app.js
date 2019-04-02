const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define path for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index', {
        name: 'Neha',
        title: 'Weather app'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Neha',
        title: 'About'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Neha Chauhan',
        message: 'Do you need any help ? call us on 911 !'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 30,
        location: 'delhi, india'
    });
});


app.listen('1408', () => {
    console.log('Server listing to port 1408!');
})
