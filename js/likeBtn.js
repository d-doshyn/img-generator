let liker = document.querySelector(".open-donations");
let like = document.querySelector(".photo-icon .fa-thumbs-up");

liker.addEventListener("click", () => {
    like.classList.toggle("liked");
})