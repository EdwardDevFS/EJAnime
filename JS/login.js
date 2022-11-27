
let correo_login = document.getElementById('validationCustom03');
let password = document.getElementById('validationCustom05');
let boton = document.getElementById('btn-login');


boton.addEventListener('click', () => {
        Login();
    })
    

function Login(){
    const forms = document.querySelectorAll('.needs-validation')
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            alert()
        }
        else{
            event.preventDefault()
            let val = localStorage.getItem('Usuarios')
            let valores = JSON.parse(val);
            
            try{
                if(correo_login.value == valores.email && password.value == valores.contraseña){
                    try{
                        let timerInterval
                        Swal.fire({
                            icon: 'success',
                            title: 'Credenciales correctas',
                            timer: 1500,
                            timerProgressBar: true,
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
                                sessionStorage.setItem('logeado', true)
                                window.location.href = "https://ejanime.netlify.app/index.html"
                            }
                        })
                    }
                    catch(e){
                        sessionStorage.setItem('logeado', true)
                        window.location.href = "https://ejanime.netlify.app/index.html"
                    }
                    
                    // 
                    
                    // 
                }
                else{
                    try{
                        Swal.fire({
                            title: 'Credenciales Invalidas',
                            text: 'Correo electronico o contraseña errónea',
                            icon: 'error',
                            confirmButtonText: 'Ir a Registrarse',
                            showDenyButton: true,
                            denyButtonText: `Intentar de nuevo`,
        
                        }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                                window.location.href = "https://ejanime.netlify.app/secciones/registro.html"
                            }
                        })

                    }
                    catch{
                        confirm("¿Deseas Registrarte?")
                        console.log("Al parecer me arroja error con el sweet alert")
                    }

                    }
            }catch(e){
                console.log("error a nivel del if")
                // if(correo_login.value == valores.email && password.value == valores.contraseña){
                //     alert("Parece que sweet alert no me funciona, redireccionando...")
                //     sessionStorage.setItem('logeado', true)
                //     window.location.href = "https://ejanime.netlify.app/index.html"
                // }
                // else{
                //     confirm("Parece que las credenciales son erróneas")
                // }
            }
                

        }
        form.classList.add('was-validated')
        }, false)
    })
}