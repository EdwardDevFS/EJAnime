let log = sessionStorage.getItem('logeado');
const sin = document.querySelectorAll('#logged');
const user = document.querySelectorAll('#no_log');
let user_data = document.getElementById('user');
let val = localStorage.getItem('Usuarios')
let valores = JSON.parse(val);
let logout = document.getElementById('logout');


const toastTrigger = document.getElementById('liveToastBtn')
        const toastLiveExample = document.getElementById('liveToast')
        if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            const toast = new bootstrap.Toast(toastLiveExample)
            console.log("no se puede")
            toast.show()
                }
            )
        }

//<!-- JavaScript Para el navbar -->
window.addEventListener("scroll", 
function(){
    var header = document.querySelector("header");
    header.classList.toggle("down", window.scrollY > 0);
})

//TODO RESOLVIENDO PROBLEMAS CON EL LOGIN

logout.addEventListener('click', () =>{
sessionStorage.setItem('logeado', false);
window.location.reload();
})

if(log == 'true'){
    sin.forEach(e =>{
        e.classList.add('unlogged')
    })
    let data_usuario =  localStorage.getItem("Usuarios");
    data_usuario = JSON.parse(data_usuario);
    user_data.innerHTML = data_usuario.usuario;
    //user_data.innerHTML(data_usuario.usuario)
}else{
    user.forEach(e =>{
        e.classList.add('unlogged')
})
}