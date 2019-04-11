const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 1408;

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

// import utills

const geocode = require('./utils/geocode');
const forecast = require ('./utils/forecast');

app.get('/', (req, res) => {
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
    
    if(!req.query.address) {
        return res.send({
            error: 'Address must be provided!'
        })
    }

    geocode.geoCode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error) {
            return res.send({
                error: error
            });
        }

        forecast.forecast(latitude, longitude, (error, {apparentTemperature}) => {
            if(error) {
                return res.send({
                    error
                });
            }
            
            res.send({
                forecast: apparentTemperature,
                address: req.query.address,
                location
            });
        })
    })
});

app.get('/help/*', (req, res) => {
    res.render('notFound', {
        title: 'Help article not found!',
        name: 'Neha Chauhan'
    })
});

app.get('*', (req, res) => {
    res.render('notFound', {
        title: '404 Not found!',
        name: 'Neha Chauhan'
    })
});

app.listen(port , () => {
    console.log(`Server listing to port ${port}!`);
});
