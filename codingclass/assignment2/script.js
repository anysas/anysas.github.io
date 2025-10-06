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

// timer section: used https://www.youtube.com/watch?v=x7WJEmxNlEs&ab_channel=FlorinPop along with https://www.youtube.com/watch?v=IEk_5y-PIvo&t=141s&ab_channel=WebStylePress

// grabbing timer items
const studyTimer = document.querySelector("#study-timer-span");
const startTimer = document.querySelector("#start-timer");
const stopTimer = document.querySelector("#stop-timer");
const resetTimer = document.querySelector("#reset-timer");

// format and update time as 00:00
const startingMinutes = 25;
let time = startingMinutes * 60;
let timerInterval = null;

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  studyTimer.innerHTML = `${minutes}: ${seconds}`;
}

// listening for clicking on timer buttons
startTimer.addEventListener("click", startTiming);
stopTimer.addEventListener("click", stopTiming);
resetTimer.addEventListener("click", resetTiming);

function startTiming() {
  // makes sure that start doesn't make time go faster with additional intervals
  if (timerInterval) return;
  // time keeps udating aslong as it's above 0, otherwise interval gets cleared to stop timing.
  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateCountdown();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      // change text to 'break time' once reaching 0 + stop the audio playing to break immersion when studying, therefore alerting users that their study time is finished for now.
      studyTimer.innerHTML = "Break Time!";
      ambientWave.pause();
    }
  }, 1000);
}

// interval is stopped, then set back to 25 mins.
function resetTiming() {
  stopTiming();
  time = 1500;
  updateCountdown();
}

updateCountdown();
setInterval(updateTime, 1000);

// clears interval to not update the timer; stop or pause timer when triggered
function stopTiming() {
  clearInterval(timerInterval);
  timerInterval = null;
}
