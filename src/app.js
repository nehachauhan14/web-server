const path = require('path');
const express = require('express');

const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

// app.get('', (req, res) => {
//     res.send('<h1>Hi Express!</h1>');
// });

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Neha',
//         Age: 27
//     });
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>About Page!</h1>');
// });

app.get('/weather', (req, res) => {
    res.send({
        forecast: 30,
        location: 'delhi, india'
    });
});


app.listen('8080', () => {
    console.log('Server listing to port 8080!');
})