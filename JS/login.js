
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
            
            
        }
        else{
            event.preventDefault()
            let val = localStorage.getItem('Usuarios')
            let valores = JSON.parse(val);

            if(correo_login.value == valores.email && password.value == valores.contraseña){
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
                // 
                
                // 
            }
            else{
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
                        window.location.href = "https://ejanime.netlify.app/secciones/contacto.html"
                    }
                  })
            }
                

        }
        form.classList.add('was-validated')
        }, false)
    })
}