let bgAudio = document.querySelector(".bg-audio");
let bgVideo = document.querySelector(".bg-video");
let play = document.querySelector(".play");
let replay = document.querySelector(".replay");
let currentTime = Math.floor(bgAudio.currentTime);
let fakeDuration = 600;

play.addEventListener("click", () => {
    checkPlaying(bgAudio);
});
// if(currentTime === Math.floor(bgAudio.duration)) {
//     console.log("hi");
// }

replay.addEventListener("click", () => {
   currentTime = 0;
   checkPlaying(bgAudio); 
});

function checkPlaying(song) {
    if(song.paused) {
        song.play();
        bgVideo.play();
        play.setAttribute("src", "images/pause.png");
    } else {
        song.pause();
        bgVideo.pause();
        play.setAttribute("src", "images/play.png");
    }
}