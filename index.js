import * as htmlToImage from 'html-to-image';
// import download from "downloadjs"
const node = document.querySelector('html');

function getImage() {
  htmlToImage
    .toJpeg(node, {quality: 0.95})
    .then((dataUrl) => {
      window.open(dataUrl, '_blank');
      // download(dataUrl, "copa-dos-guris.jpg", "image/jpg");
    })
    .catch((err) => {
      console.error('oops, something went wrong!', err);
    });
}



window.getImage = getImage

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

document.addEventListener("DOMContentLoaded", () => {
  const download = urlParams.get('download');
  if (download !== null) {
    getImage()
  }
  console.log(download)
});



