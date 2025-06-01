// grabbing the clothing pieces
const bodicePieces = document.querySelectorAll("#bodicebox img");
const skirtPieces = document.querySelectorAll("#skirtbox img");
// grabbing the dropareas
const bodiceDrop = document.getElementById("bodice_droparea");
const skirtDrop = document.getElementById("skirt_droparea");

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
