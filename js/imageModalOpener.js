// triggers
let picsumOpener = document.querySelector(".photo.open-picsum");
let dummyOpener = document.querySelector(".photo.open-dummy");
let donationsOpener = document.querySelector(".photo.open-donations");

// modals
let picsumModal = document.querySelector(".modal-picture-container.picsum-modal-container");
let dummyModal = document.querySelector(".modal-picture-container.dummy-modal-container");
let donationsModal = document.querySelector(".modal-donations");

// closers
let closePicsum = document.querySelector(".modal-closer.close-picsum");
let closeDummy = document.querySelector(".modal-closer.close-dummy");
let closeDonations = document.querySelector(".modal-closer.close-donations");

// functions
function appear(elem, class1, class2) {
    elem.classList.add(class1);
    elem.classList.remove(class2);
}

// appearing and disappearing modal
// lorem picsum
picsumOpener.onclick = () => {
    appear(picsumModal, "flex", "none");
}

closePicsum.onclick = () => {
    appear(picsumModal, "none", "flex");
}

// dummy
dummyOpener.onclick = () => {
    appear(dummyModal, "flex", "none");
}

closeDummy.onclick = () => {
    appear(dummyModal, "none", "flex");
}