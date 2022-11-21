


// TODO: CONEXION CON API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '72ead2b4c7mshc59325b3d5216d8p12a096jsndf532bc6b5a3',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=20&sortBy=ranking&sortOrder=asc', options)
	.then(response => response.json())
	.then(response => mostrartop(response))
	.catch(err => console.error(err));

function traductor(datos){
    // TODO: CONEXION CON API DE TRADUCCION
//No se pudo :(
//     const encodedParams = new URLSearchParams();
//     encodedParams.append("text",`${datos}`);
//     encodedParams.append("protected", "world;World");
//     encodedParams.append("from", "en");
//     encodedParams.append("to", "es");
//     encodedParams.append("translate_capital", "true");

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': '72ead2b4c7mshc59325b3d5216d8p12a096jsndf532bc6b5a3',
// 		'X-RapidAPI-Host': 'rimedia-translation.p.rapidapi.com'
// 	},
// 	body: encodedParams
// };

// fetch('https://rimedia-translation.p.rapidapi.com/api_translate_limited.php', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
}

function mostrartop(datos){
    Swal.fire({
        title: 'Esperando a la API',
        html: 'Espere un momento por favor...',
        timer: 2000,
        timerProgressBar: true,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
            rgba(0,0,123,0.4)

            
        `,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
        })
    setTimeout(() => {
        let todo = datos.data
        let body = '';  
        for (let i = 0; i < todo.length; i++) {
            const element = todo[i];
            traductor(element.status);
            body += 
            `<div class="anime-top-card">
                <div class="top-card">
                    <div class="anime">
                        <div id="todo1" class="anime-position">
                            <div class="">${element.ranking}</div>
                        </div>
                        <img src=${element.image} alt="">
                    </div>
                    <div class="right-anime">
                        <div class="status-anime float-end mt-2 me-2">
                            <div class="status">${element.status}</div>
                        </div>
                        <div class="encabezado mt-1">
                            <div class="title-anime">
                                <h2>${element.title}</h2>
                            </div>
                        </div>
                        <div class="card-anime-body">
                            <h3>${element.alternativeTitles}</h3>
                            <h4>GENERO: ${element.genres}</h4>
                            <p>${element.synopsis}</p>
                        </div>
                    </div>
                </div>
            </div>`
            document.getElementById('deaca').innerHTML = body
        }
    },2000)

    
}