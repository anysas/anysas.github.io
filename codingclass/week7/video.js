const playPauseButton = document.querySelector("#play-pause-button");
const myVideo = document.querySelector("#my-video");
const playPauseImg = document.querySelector("#play-pause-button");

playPauseButton.addEventListener("click", toggleVideo);

function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src =
      "https://img.icons8.com/?size=100&id=TlSnjmNzYgKT&format=png&color=000000";
  } else {
    myVideo.pause();
    playPauseImg.src =
      "https://img.icons8.com/?size=100&id=86022&format=png&color=000000";
  }
}
