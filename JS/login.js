let correo_login = document.getElementById('floatingInput');
let password = document.getElementById('floatingPassword');
let btn = document.getElementById('btnSave');


btn.addEventListener('click', (e)=>{
    e.preventDefault();
    Login();
})

function Login(){
    // let asd = sessionStorage.key()
    try{

        let asd1 = sessionStorage.getItem(correo_login.value)
        
        if(asd1 == password.value){
            window.location.href = "http://127.0.0.1:5500/index.html"
        }
        else{
            alert("Credenciales invalidas")
        }
    }
    catch(e){
        alert("algo anda mal")
    }
    // console.log(asd)
    
}