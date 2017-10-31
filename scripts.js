/* IDEAS:
  1) Replace functionality with JS
  2) Click top image cycles through array of images
*/

// Click thumbnail to CodePen demo
const project1El = document.getElementById("project1");
const project2El = document.getElementById("project2");
const project3El = document.getElementById("project3");
const project4El = document.getElementById("project4");

function project(name, url) {
  this.name = name;
  this.url = url;
}

const project1 = new project(project1El.alt, "https://codepen.io/Pagey/full/GmOYdm/");
const project2 = new project(project2El.alt, "https://codepen.io/Pagey/full/eEXRZy/");
const project3 = new project(project3El.alt, "https://codepen.io/Pagey/full/wrZRqR/");
const project4 = new project(project4El.alt, "https://codepen.io/Pagey/full/GMgrwM/");

// Open CodePen Demo
function liveDemo(id) {
    window.open(id.url);
}

project1El.addEventListener("click", function() {
  liveDemo(project1)
});

project2El.addEventListener("click", function() {
  liveDemo(project2)
});

project3El.addEventListener("click", function() {
  liveDemo(project3)
});

project4El.addEventListener("click", function() {
  liveDemo(project4)
});
