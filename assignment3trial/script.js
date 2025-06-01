// script.js

// Select all draggable pieces and drop areas
const bodicePieces = document.querySelectorAll("#bodicebox img");
const skirtPieces = document.querySelectorAll("#skirtbox img");
const bodiceDrop = document.getElementById("bodice_droparea");
const skirtDrop = document.getElementById("skirt_droparea");

// Currently dragged image source
let draggedImageSrc = "";
let draggedType = "";

// Set up drag start
function setupDrag(pieces, type) {
  pieces.forEach((piece) => {
    piece.addEventListener("dragstart", (e) => {
      draggedImageSrc = e.target.src;
      draggedType = type;
    });
  });
}

// Allow drop
function allowDrop(e) {
  e.preventDefault();
}

// Handle drop
function handleDrop(e, dropArea, type) {
  e.preventDefault();
  if (draggedType !== type) return; // Prevent wrong type drops

  // Clear previous image
  dropArea.innerHTML = "";

  // Add new image
  const img = document.createElement("img");
  img.src = draggedImageSrc;
  dropArea.appendChild(img);
}

// Initialize drag and drop
setupDrag(bodicePieces, "bodice");
setupDrag(skirtPieces, "skirt");

// Setup dropzones
bodiceDrop.addEventListener("dragover", allowDrop);
bodiceDrop.addEventListener("drop", (e) => handleDrop(e, bodiceDrop, "bodice"));

skirtDrop.addEventListener("dragover", allowDrop);
skirtDrop.addEventListener("drop", (e) => handleDrop(e, skirtDrop, "skirt"));
