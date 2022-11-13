// //TODO CONEXION CON API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '72ead2b4c7mshc59325b3d5216d8p12a096jsndf532bc6b5a3',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&sortBy=ranking&sortOrder=asc', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

