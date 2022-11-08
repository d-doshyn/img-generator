let dummyInputs = {
    dummyWidth: document.querySelector(".width-dummy"),
    dummyHeight: document.querySelector(".height-dummy"),
    dummyBgColor: document.querySelector(".bgclr-dummy"),
    dummyTextColor: document.querySelector(".textclr-dummy"),
    dummyText: document.querySelector(".text-dummy"),
    dummyFormat: document.querySelector(".format-dummy"),
}

let dummyImage = document.querySelector(".dummy-image");

// src generating
function generateSrc() {
    let myDummyImage = "url" + "(" + "https://dummyimage.com/" + dummyInputs.dummyWidth.value + "x" + dummyInputs.dummyHeight.value + "/" + dummyInputs.dummyBgColor.value.replace(/#/, '') + "/" + dummyInputs.dummyTextColor.value.replace(/#/, '') + dummyInputs.dummyFormat.value;

    dummyImage.style.backgroundImage = myDummyImage + ")";
    
    if (!dummyInputs.dummyText.value == "") {
        dummyImage.style.backgroundImage = myDummyImage + "?text=" + dummyInputs.dummyText.value.replace(/ /g, '+') + ")";
    }
    
    // text field
    let dummyTextField = document.querySelector(".dummy-text-block p");
    let bg = dummyImage.style.backgroundImage.slice(5, -2);
    dummyTextField.innerText = bg;

    // validation
    let dummyRegexp = /[a-zA-Z]+/g;
    if (dummyInputs.dummyWidth.value.match(dummyRegexp) || dummyInputs.dummyHeight.value.match(dummyRegexp)) {
        dummyTextField.innerText = "Width and height should be a number!";
    }
}

// animated image
for (let input in dummyInputs) {
    dummyInputs[input].oninput = () => {
        generateSrc();
    }
}