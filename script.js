// document.getElementById("playButton").addEventListener("click", function () {
//   var audio = document.getElementById("myAudio");
//   audio.play();
// });

document.querySelectorAll(".playButton").forEach((button) => {
  button.addEventListener("click", function () {
    var audioPlayer = document.getElementById("audioPlayer");
    var audioSrc = this.getAttribute("data-audio");
    if (audioPlayer.src.includes(audioSrc)) {
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    } else {
      audioPlayer.src = audioSrc;
      audioPlayer.play();
    }
  });
});
