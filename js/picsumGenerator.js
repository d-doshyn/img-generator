// inputs
let picsumInputs = {
  picsumWidth: document.querySelector('.picsum-width'),
  picsumHeight: document.querySelector('.picsum-height'),
  picsumGrayscale: document.querySelector('.picsum-grayscale'),
  picsumBlur: document.querySelector('.picsum-blur'),
  picsumFormat: document.querySelector('.picsum-format'),
}

let image = document.querySelector('.lorem-picsum');
let link = 'https://picsum.photos/';

// function
function generateImg() {
  let newImage = 'url(' + link + picsumInputs.picsumWidth.value + '/' + picsumInputs.picsumHeight.value + picsumInputs.picsumFormat.value;

  image.style.backgroundImage = newImage + ")";
  
  if (picsumInputs.picsumGrayscale.value == "Yes"){
    image.style.backgroundImage = newImage + '?grayscale' + ')'
  } else if (picsumInputs.picsumBlur.value > 0) {
    image.style.backgroundImage = newImage + '?blur=' + picsumInputs.picsumBlur.value + ')'
  }

  if (picsumInputs.picsumGrayscale.value == "Yes" && picsumInputs.picsumBlur.value > 0){
    image.style.backgroundImage = newImage + '?grayscale&blur=' + picsumInputs.picsumBlur.value + ')'
  }

  // link field
  let picsumLink = document.querySelector(".picsum-link");
  let background = image.style.backgroundImage.slice(5, -2);
  picsumLink.innerText = background;

  // validation
  let picsumRegexp = /[a-zA-Z]+/g;
  if (picsumInputs.picsumWidth.value.match(picsumRegexp) || picsumInputs.picsumHeight.value.match(picsumRegexp)) {
      picsumLink.innerText = "Width and height should be a number!";
  }
}

for (let picsumInput in picsumInputs) {
  picsumInputs[picsumInput].oninput = () => {
      generateImg();
  }
}
