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

console.log(picsumInputs);
console.log(image);

// function
function generateImg() {
  let newImage = image.style.backgroundImage = 'url(' + link + picsumInputs.picsumWidth.value + '/' + picsumInputs.picsumHeight.value;
  console.log(newImage);

  if (picsumInputs.picsumGrayscale.value == "Yes"){
    let imageGrayscale = newImage + '?grayscale)'
    newImage = imageGrayscale;
    console.log(newImage);
  }else if (picsumInputs.picsumBlur.value > 1) {
    let imageBlur = newImage + `?blur=${picsumInputs.picsumBlur.value}`;
    newImage = imageBlur;
    console.log(newImage);
  }else if (picsumInputs.picsumGrayscale.value == "yes" && picsumInputs.picsumBlur.value > 0){
    let imageAll = newImage + '?grayscale&blur=' + picsumInputs.picsumBlur.value;
    console.log(imageAll);
  }
}

for (let picsumInput in picsumInputs) {
  picsumInputs[picsumInput].oninput = () => {
      generateImg();
  }
}
