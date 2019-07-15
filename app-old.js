const HTTP = require('http');

HTTP.createServer((req, res) => {

	res.writeHead(200, {'Content-Type': 'application/json'});

		let salida = {
			nombre: 'Gianfranco',
			apellido: 'D\'Onofrio',
			edad: 23,
			url: req.url
		}

		res.write(JSON.stringify(salida));
		res.end();
})
.listen(3777);

