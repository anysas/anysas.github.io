// grabbing the clothing pieces
const bodicePieces = document.querySelectorAll("#bodicebox img");
const skirtPieces = document.querySelectorAll("#skirtbox img");
// grabbing the dropareas
const bodiceDrop = document.getElementById("bodice_droparea");
const skirtDrop = document.getElementById("skirt_droparea");

// const scribble = new Audio("webassets/scribble.mp3");

// lets bodice be an empty value to be replaced later
let bodice = null;

// every bodice piece image is given an  event listener that looks out for the start of drag action, which will change the empty bodice value to turn into the image of the event trigger.
bodicePieces.forEach((img) => {
  img.addEventListener("dragstart", (event) => {
    bodice = event.target.src;
  });
});

// allows drag and drop
bodiceDrop.addEventListener("dragover", (event) => {
  event.preventDefault();
});
bodiceDrop.addEventListener("drop", (event) => {
  event.preventDefault();
  if (!bodice) return;

  //  bodice images in bodice drop are cleared, so images replace eachother
  bodiceDrop.innerHTML = "";

  // puts the bodice in
  // creates a new bodice image to keep it shown in the menu
  const bodicePlaced = document.createElement("img");
  // the new element has the image data of the dragged
  bodicePlaced.src = bodice;
  // the taken bodice becomes gets inserted into bodiceDrop as a child element
  bodiceDrop.appendChild(bodicePlaced);

  // Play sound
  // scribble.currentTime = 0; // rewind to start
  // scribble.play();
});

// used same code for skirts
let skirt = null;

skirtPieces.forEach((img) => {
  img.addEventListener("dragstart", (event) => {
    skirt = event.target.src;
  });
});

skirtDrop.addEventListener("dragover", (event) => {
  event.preventDefault();
});
skirtDrop.addEventListener("drop", (event) => {
  event.preventDefault();
  if (!skirt) return;

  skirtDrop.innerHTML = "";

  const skirtPlaced = document.createElement("img");
  skirtPlaced.src = skirt;
  skirtDrop.appendChild(skirtPlaced);
});

// applying the animations
// grabbing components
const finishBtn = document.querySelector("#finbtn");
const skirtMenu = document.querySelector("#skirtmenu");
const bodiceMenu = document.querySelector("#bodicemenu");
const dropZone = document.querySelector("#dropzone");

const bodiceBox = document.querySelector("#bodicebox");
const menuHeading = document.querySelector("h2");

// apply animation when ever
finishBtn.addEventListener("click", function () {
  skirtMenu.classList.add("moveAside");
  bodiceMenu.classList.add("moveAside");
  dropZone.classList.add("moveAside");
  finishBtn.classList.add("moveAside");

  bodiceBox.classList.add("clearOpacity");
  finishBtn.classList.add("clearOpacity");
  menuHeading.classList.add("clearOpacity");

  const extendedMenu = document.createElement("div");
  extendedMenu.id = "extendedmenu";
  document.body.appendChild(extendedMenu);
  extendedMenu.style.left = "-700px";
  extendedMenu.classList.add("menuExtension");
});

bodiceBox.addEventListener("animationend", () => {
  bodiceBox.remove();
});

menuHeading.addEventListener("animationend", () => {
  menuHeading.remove();
});
