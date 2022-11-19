let button = document.querySelector('.theme-button')
let body = document.querySelector('body')
let darkText = document.querySelectorAll('.theme-label, .title, .card-title, .footer__header, .icon-text, .footer-additionalText, .DummyImage-link, .LoremPicsum-link, .card-subtitle')
let pictureIcon = document.querySelectorAll('i.fa-solid, i.fa-brands, i.fa-image, i.fa-square-h, i.fa-circle-dollar-to-slot, i.fa-instagram, i.fa-telegram, i.fa-comments')
let likeBtn = document.querySelector('i.fa-thumbs-up')
let likeContainer = document.querySelector('.open-donations')

button.addEventListener("click", function () {
    body.classList.toggle('dark-background')

    darkText.forEach(elem => {
        elem.classList.toggle('dark-text')
    })

    pictureIcon.forEach(elem => {
        elem.classList.toggle('dark-icon')
    })

    likeBtn.classList.toggle('dark-like-btn')

    if(likeBtn.classList.contains('liked')) {
        likeBtn.classList.toggle('liked-dark')
    }
    
    likeContainer.addEventListener("click", function() {
        likeBtn.classList.toggle('liked-dark')
    })
});