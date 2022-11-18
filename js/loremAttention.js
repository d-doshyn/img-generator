let warningBtn = document.querySelector(".warning-update");
let warningText = document.querySelector(".warning-text");

warningBtn.addEventListener("click", () => {
    warningText.classList.toggle("block");
    if (warningBtn.innerText == "Warning!") {
        warningBtn.innerText = "Close";
    } else {
        warningBtn.innerText = "Warning!";
    }
})