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
function appear(elem, class1, class2) {
    elem.classList.add(class1);
    elem.classList.remove(class2);
}

// appearing and disappearing modal
picsumOpener.onclick = () => {
    appear(picsumModal, "flex", "none");
}

closePicsum.onclick = () => {
    appear(picsumModal, "none", "flex");
}

dummyOpener.onclick = () => {
    appear(dummyModal, "flex", "none");
}

closeDummy.onclick = () => {
    appear(dummyModal, "none", "flex");
}