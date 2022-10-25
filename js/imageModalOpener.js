// triggers
let picsumOpener = document.querySelector(".photo.open-picsum");
let dummyOpener = document.querySelector(".photo.open-dummy");

// modals
let picsumModal = document.querySelector(".modal-picture-container.picsum-modal-container");
let dummyModal = document.querySelector(".modal-picture-container.dummy-modal-container");

// closers
let closePicsum = document.querySelector(".modal-closer.close-picsum");
let closeDummy = document.querySelector(".modal-closer.close-dummy");

// functions
function appear(elem) {
    elem.classList.add("flex");
    elem.classList.remove("none");
}

function disappear(elem){
    elem.classList.add("none");
    elem.classList.remove("flex");
}

// appearing and disappearing modal
picsumOpener.onclick = () => {
    appear(picsumModal);
}

closePicsum.onclick = () => {
    disappear(picsumModal);
}

dummyOpener.onclick = () => {
    appear(dummyModal);
}

closeDummy.onclick = () => {
    disappear(dummyModal);
}