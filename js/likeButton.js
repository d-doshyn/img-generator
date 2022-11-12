let likeButton = document.querySelector(".donations-like");

function pressLike() {
  if (likeButton.classList.contains("fa-regular")) {
    likeButton.classList.remove("fa-regular");
    likeButton.classList.add("fa-solid");
  }else{
    likeButton.classList.remove("fa-solid");
    likeButton.classList.add("fa-regular");
  }
}

likeButton.onclick = () => {
  pressLike();
};
