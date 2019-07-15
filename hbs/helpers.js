const HBS = require('hbs');

// Helpers 
HBS.registerHelper('nombre', () => {

	return nombre = 'Santa Maria Pharmacy'
});

HBS.registerHelper('getAnio', () => {

	return new Date().getFullYear();
});

HBS.registerHelper('capitalizar', (texto) => {
	let palabras = texto.split(' ');
	palabras.forEach((letra, idx) => {
		
		palabras[idx] = letra.charAt(0).toUpperCase() + letra.slice(1).toLowerCase();
	});
	return palabras.join(' ');
});
