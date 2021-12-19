let bgAudio = document.querySelector(".bg-audio");
let bgVideo = document.querySelector(".bg-video");
let play = document.querySelector(".play");
let timer = document.querySelectorAll(".btn");
let time = document.querySelector(".time");
let fakeDuration = 10;

play.addEventListener("click", () => {
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

timer.forEach(i => {
    i.addEventListener("click", function() {
        fakeDuration = this.getAttribute("data-time");
        time.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
    });
});

bgAudio.addEventListener("timeupdate", () => {
    let currentTime = Math.floor(bgAudio.currentTime);
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    time.textContent = `${minutes}:${seconds}`;
    if(currentTime >= fakeDuration) {
        bgAudio.currentTime = 0;
        bgAudio.pause();
        bgVideo.pause();
        play.setAttribute("src", "images/play.png");
    }
});