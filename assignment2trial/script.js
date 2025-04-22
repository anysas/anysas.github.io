// Grabbing media player items
const ambientWave = document.querySelector("#ambientwave");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseBtnImg = document.querySelector("#play-pause-btn-img");
const progressBarFill = document.querySelector("#progress-bar-fill");
const progressBar = document.querySelector(".progressbar");
const audioSpan = document.querySelector("#audio-time-span");
const volumeUp = document.querySelector("#vol-up");
const volumeDown = document.querySelector("#vol-down");
const loopBtn = document.querySelector("#loop-btn");

// when play/pause button clicked, triggers playPause function
playPauseBtn.addEventListener("click", playPause);

// defining playPause function;
function playPause() {
  if (ambientWave.paused || ambientWave.ended) {
    ambientWave.play();
    playPauseBtnImg.src = "pause.png";
  } else {
    ambientWave.pause();
    playPauseBtnImg.src = "play.png";
  }
}

// Event listener checking time of audio in order to update time bar according to audio position.
ambientWave.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
  const value = (ambientWave.currentTime / ambientWave.duration) * 100;
  progressBarFill.style.width = value + "%";
  audioSpan.textContent = ambientWave.currentTime.toFixed(2);
}

// volume buttons
volumeUp.addEventListener("click", increaseVolume);

function increaseVolume() {
  if (ambientWave.volume < 0.9) {
    ambientWave.volume += 0.1;
  }
}

volumeDown.addEventListener("click", decreaseVolume);

function decreaseVolume() {
  if (ambientWave.volume > 0.11) {
    ambientWave.volume -= 0.1;
  }
}

// loop not initially on; define loop boolean
let loop = false;

// loop button clicked toggles boolean as on or off
loopBtn.addEventListener("click", loopAudio);

// when audio ended, replay triggered if loop is set to true
ambientWave.addEventListener("ended", replay);

// loop true or false toggle; scales down when loop is clicked to imitate button being pressed down on
function loopAudio() {
  if (loop) {
    loop = false;
    loopBtn.style.scale = "100%";
  } else {
    loop = true;
    loopBtn.style.scale = "90%";
  }
}

// replay function if loop is toggled
function replay() {
  if (loop) {
    ambientWave.currentTime = 0;
    ambientWave.play();
  }
}
