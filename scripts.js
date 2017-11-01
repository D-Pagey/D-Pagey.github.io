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

// Constants
const project1El = document.getElementById("project1");
const project2El = document.getElementById("project2");
const project3El = document.getElementById("project3");
const project4El = document.getElementById("project4");

// Link object constructor
function link(name, url) {
  this.name = name;
  this.url = url;
}

const project1 = new link(project1El.alt, "https://codepen.io/Pagey/full/GmOYdm/");
const project2 = new link(project2El.alt, "https://codepen.io/Pagey/full/eEXRZy/");
const project3 = new link(project3El.alt, "https://codepen.io/Pagey/full/wrZRqR/");
const project4 = new link(project4El.alt, "https://codepen.io/Pagey/full/GMgrwM/");
const github = new link("GitHub Page", "https://github.com/D-Pagey");
const twitter = new link("Twitter Page", "https://twitter.com/Pagey64")

// Open link
function openLink(id) {
    window.open(id.url);
}

project1El.addEventListener("click", function() {
  openLink(project1)
});

project2El.addEventListener("click", function() {
  openLink(project2)
});

project3El.addEventListener("click", function() {
  openLink(project3)
});

project4El.addEventListener("click", function() {
  openLink(project4)
});

document.getElementById("github").addEventListener("click", function() {
  openLink(github)
});

document.getElementById("twitter").addEventListener("click", function() {
  openLink(twitter)
});
