import { sendValues } from "./firebase.js"

(() => {
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                form.classList.add('was-validated')
            } else{
                sendValues()
                form.classList.remove('was-validated')
                form.reset()
            }
        }, false)
    })
})()