//<!-- JavaScript Para el navbar -->
window.addEventListener("scroll", 
function(){
    var header = document.querySelector("header");
    header.classList.toggle("down", window.scrollY > 0);
})


// VALIDACION DE FORM REGISTER
(() => {
    'use strict'
    
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
    
        form.classList.add('was-validated')
        }, false)
    })
})

// TOAST 
