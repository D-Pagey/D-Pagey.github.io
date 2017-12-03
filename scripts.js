// Click slideshow for mainImg
const images = [
  "img/dive.jpg",
  "img/topcats.jpg",
  "img/castle.jpg",
  "img/paintball.jpg"
];

let myIndex = 3;

const mainImg = document.getElementById("main-image");
mainImg.src = images[myIndex];

mainImg.addEventListener("click", function() {
  myIndex = (myIndex+1)%(images.length);
  mainImg.src = images[myIndex];
})
