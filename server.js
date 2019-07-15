// require('bootstrap')
const EXPRESS = require('express');
const APP = EXPRESS();

const HBS = require('hbs');
require('./hbs/helpers');

const PORT = process.env.PORT || 3777;

APP.use( EXPRESS.static( __dirname + '/public'));

// Express HBS engine
HBS.registerPartials(__dirname + '/views/partials');
APP.set('view engine', 'hbs');


APP.get('/', (req, res) => {

	res.render('home');
});

APP.get('/about', (req, res) => {

	res.render('about');
});

// APP.get('/data', (req, res) => {

//   res.send(salida);
// });

APP.listen(PORT, () => {
  console.log(`Escuchando peticiones en el puerto ${ PORT }`);
});
