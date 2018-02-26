document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('#btnExample')
    button.addEventListener('click', function() {
        let dialog = document.querySelector('#dialog')
        dialog.classList.toggle('hide')
    })
})
