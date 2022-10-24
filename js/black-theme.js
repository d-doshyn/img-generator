let button = document.querySelector('.theme-button')
let body = document.querySelector('body')
let darkText = document.querySelectorAll('.theme-label, .title, .card-title, .footer__header, .icon-text, .footer-additionalText')
let pictureIcon = document.querySelectorAll('i.fa-solid, i.fa-brands, i.fa-image, i.fa-square-h, i.fa-circle-dollar-to-slot, i.fa-instagram, i.fa-telegram, i.fa-comments')


button.addEventListener("click", function () {
    body.classList.toggle('dark-background')
    darkText.forEach(elem => {
        elem.classList.toggle('dark-text')
    })
    pictureIcon.forEach(elem => {
        elem.classList.toggle('dark-icon')
    })
});