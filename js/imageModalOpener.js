// triggers
let picsumOpener = document.querySelector(".photo.open-picsum");
let dummyOpener = document.querySelector(".photo.open-dummy");

// modals
let picsumModal = document.querySelector(".modal-picture-container.picsum-modal-container");
let dummyModal = document.querySelector(".modal-picture-container.dummy-modal-container");

// closers
let closePicsum = document.querySelector(".modal-closer.close-picsum");
let closeDummy = document.querySelector(".modal-closer.close-dummy");

picsumOpener.onclick = () => {
    picsumModal.style.display = "flex";
}

closePicsum.onclick = () => {
    picsumModal.style.display = "none";
}

dummyOpener.onclick = () => {
    dummyModal.style.display = "flex";
}

closeDummy.onclick = () => {
    dummyModal.style.display = "none";
}