// Grabbing media player items
const ambientWave = document.querySelector("#ambientwave");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseBtnImg = document.querySelector("#play-pause-btn-img");
const progressBarFill = document.querySelector("#progress-bar-fill");
const progressBar = document.querySelector(".progressbar");
const audioSpan = document.querySelector("#audio-time-span");

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

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function updateProgressBar() {
  const value = (ambientWave.currentTime / ambientWave.duration) * 100;
  progressBarFill.style.width = value + "%";
  audioSpan.textContent = formatTime(ambientWave.currentTime);
  // audioSpan.textContent = ambientWave.currentTime.toFixed(2);
}
