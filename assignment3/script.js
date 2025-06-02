// grabbing the clothing pieces
const bodicePieces = document.querySelectorAll("#bodicebox img");
const skirtPieces = document.querySelectorAll("#skirtbox img");
// grabbing the dropareas
const bodiceDrop = document.getElementById("bodice_droparea");
const skirtDrop = document.getElementById("skirt_droparea");
// grabbing audio from webassets
// https://pixabay.com/sound-effects/shine-7-268909/
const shine = new Audio("webassets/shine.mp3");
// https://pixabay.com/sound-effects/shining-anime-sound-effect-240582/
// Was originally gonna use a fabric or sketching noise when dropping the pieces in but it contrasted alot against the aesthetic I was going for, being that it sounded dull in comparison to the light background. So instead I used this sound effect which sounds like a far away or a less bright glitter. This creates the feeling of the player is on the verge of making a dress idea, then finalising the dress idea/mockup is alot brighter as the creative process is done.
const dullshine = new Audio("webassets/dullshine.mp3");

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

  dullshine.currentTime = 0;
  dullshine.play();
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

  dullshine.currentTime = 0;
  dullshine.play();
});

// applying the animations
// grabbing components
const finishBtn = document.querySelector("#finbtn");
const skirtMenu = document.querySelector("#skirtmenu");
const bodiceMenu = document.querySelector("#bodicemenu");
const dropZone = document.querySelector("#dropzone");

const bodiceBox = document.querySelector("#bodicebox");
const menuHeading = document.querySelector("h2");

// When finish button is clicked the website screen transforms into the end screen through items moving to the left side, having them disappear, and creating new text and button.
finishBtn.addEventListener("click", function () {
  // when button is pressed, a sparkly noise is played; this creates relief and the feeling of fulfillment as it has a bright sound.
  shine.currentTime = 0;
  shine.play();
  // Both menus and dropzone moved to the side
  skirtMenu.classList.add("moveAside");
  bodiceMenu.classList.add("moveAside");
  dropZone.classList.add("moveAside");
  // Removes finish button
  finishBtn.remove();
  // Fades out the bodice menu as it moves to the side.
  bodiceBox.classList.add("clearOpacity");
  menuHeading.classList.add("clearOpacity");

  // creates a pink box to make it look like the bodice menu is being pulled over to the right. Creates background for the following text and button.
  const extendedMenu = document.createElement("div");
  extendedMenu.id = "extendedmenu";
  document.body.appendChild(extendedMenu);
  extendedMenu.style.left = "-700px";
  extendedMenu.classList.add("menuExtension");

  // Create a button that takes users back to the starting screen.
  const makeAnother = document.createElement("button");
  makeAnother.id = "makeanother";
  document.body.appendChild(makeAnother);
  makeAnother.innerHTML = "Design another";
  // Opacity starts at zero, and is applied showOpacity so it can fade in smoothly.
  makeAnother.classList.add("showOpacity");
  makeAnother.style.opacity = "0%";
  // when the button is clicked it actually takes it back to the start.
  makeAnother.addEventListener("click", () => {
    window.location.href = "index.html";
  });
  // Create text that signifies game ending; adds onto the unfinished/designer perspective as the clothes are in the making of a new Spring line.
  const comingSoon = document.createElement("h1");
  comingSoon.id = "comingsoon";
  document.body.appendChild(comingSoon);
  comingSoon.innerHTML = "Coming this Spring season!";
  comingSoon.classList.add("showOpacity");
  comingSoon.style.opacity = "0%";
});

// removes the bodice items completely once opacity to zero animation is finished so users don't accidentally change the bodice since it's only invisible and not completely gone.
bodiceBox.addEventListener("animationend", () => {
  bodiceBox.remove();
});

menuHeading.addEventListener("animationend", () => {
  menuHeading.remove();
});
