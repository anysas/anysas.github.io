const airportAudio = document.querySelector("#airport-audio");

// fetching buttons
const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");

playButton.addEventListener("click", playAudio);

function playAudio() {
  airportAudio.play();
}

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  airportAudio.pause();
}

const popSound = document.querySelector("#pop-audio");
const popButton = document.querySelector("#pop-button");

popButton.addEventListener("click", playPop);

function playPop() {
  popSound.play();
}
