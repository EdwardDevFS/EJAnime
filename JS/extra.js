// let cantidad = document.getElementById('valid-number');

// cantidad.addEventListener('change',(e)=>{
//     let cant = cantidad.value;
//     if(cant == 0 || cant < 0){
//         cantidad.value = 1;
//         alert("Elija una cantidad válida")
//     }
// })


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


// VALIDACION DE FORM REGISTER


// TOAST 
