// Click slideshow for mainImg
const images = [
  "img/dive.jpg",
  "img/africa.jpg",
  "img/topcats.jpg",
  "img/castle.jpg",
  "img/paintball.jpg"
];
let myIndex = 4;
const headlineImg = document.getElementById("mainImg");
headlineImg.src = images[myIndex];

headlineImg.addEventListener("click", function() {
  myIndex = (myIndex+1)%(images.length);
  headlineImg.src = images[myIndex];
})
