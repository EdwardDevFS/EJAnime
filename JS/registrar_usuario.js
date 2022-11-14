let nombre = document.getElementById('validationCustom01');
let apellidos = document.getElementById('validationCustom02');
let usuario = document.getElementById('validationCustomUsername');
let email = document.getElementById('validationCustom03');
let contraseña = document.getElementById('validationCustom05');
let pais = document.getElementById('validationCustom04');
let terminos = document.getElementById('invalidCheck');
let boton_Registrar = document.getElementById('btn-register');

let usuarios = []
let contraseñas = [];
localStorage.setItem("ID", 0)
// Users (NOMBRE, APELLIDOS, USUARIO, EMAIL, PAIS, TELEFONO, TERMINOS)

// VALIDACION DE FORM REGISTER
boton_Registrar.addEventListener('click', validar())
btn.addEventListener('click', (e) =>{
    e.preventDefault()
    Login();
})
function validar(){
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            console.log("no se valido")
            
        }
        else{
            event.preventDefault()
            console.log("se valido")
            Register();

        }
        form.classList.add('was-validated')
        }, false)
    })
}
function clear(){
    window.location.reload()
}

function Register() {


    let persona = new Users(nombre.value, apellidos.value, usuario.value, email.value, contraseña.value, pais.value);
    persona = JSON.stringify(persona);
    
    localStorage.setItem("Usuarios", persona)
    sessionStorage.setItem(email.value, contraseña.value);
    clear()
    // console.log(localStorage.getItem("i"));
    // localStorage.setItem("i", contraseñas);
    


    // let sup_c = "1"
    // let sup_co = "1"
    // if(user.indexOf(sup_c) != -1){
    //     alert("El correo corresponde")
    //     if(user.indexOf(credenciales.contraseña) === sup_co){
    //         alert("la contra tambien")
    //     }
    // }
    // console.log(credenciales);
    // let c = JSON.stringify(credenciales);
    // console.log(c)
    // let j = JSON.parse(c);
    // console.log(j)
    // usuarios.push(credenciales)
    // if(localStorage.setItem("asd", usuarios)){
    //     alert("todo bien")
    // }
    // usuarios.push(persona);
    // console.log(usuarios)
    // let asd = usuarios.forEach(function(value){  
    //     console.log(value)
    // })
    // let claves = Object.keys(persona);
    // for(let i=0; i< claves.length; i++){
    //     let clave = claves[i];
    //     console.log(persona[clave]);
    // }
}
