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

  // дужку додавай окремо, вона закінчує посилання, а після цього код не робить
  image.style.backgroundImage = newImage + ")";
  
  if (picsumInputs.picsumGrayscale.value == "Yes"){
    image.style.backgroundImage = newImage + '?grayscale' + ')'
    // let imageGrayscale = newImage + '?grayscale)'
    // newImage = imageGrayscale;
    // console.log(imageGrayscale);
  } else if (picsumInputs.picsumBlur.value > 0) {
    image.style.backgroundImage = newImage + '?blur=' + picsumInputs.picsumBlur.value + ')'
    // let imageBlur = newImage + `?blur=${picsumInputs.picsumBlur.value}`;
    // newImage = imageBlur;
    // console.log(imageBlur);
  }

  // окремий іф, з елсом не працювало
  if (picsumInputs.picsumGrayscale.value == "Yes" && picsumInputs.picsumBlur.value > 0){
    image.style.backgroundImage = newImage + '?grayscale&blur=' + picsumInputs.picsumBlur.value + ')'
    // let imageAll = newImage + '?grayscale&blur=' + picsumInputs.picsumBlur.value;
    // console.log(imageAll);
  }

  // не знаю, нахєра тобі стільки змінних

  console.log(image.style.backgroundImage);
}

for (let picsumInput in picsumInputs) {
  picsumInputs[picsumInput].oninput = () => {
      generateImg();
  }
}
