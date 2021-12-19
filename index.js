let bgVideo = document.querySelector(".bg-video");
let bgAudio = document.querySelector(".bg-audio");

let play = document.querySelector(".play");
let replay = document.querySelector(".replay");


play.addEventListener("click", function(){
    checkPlaying(bgAudio);
});

replay.addEventListener("click", function(){
    restartPlaying(bgAudio);
});

const checkPlaying = bgAudio => {
    if(bgAudio.paused) {
        bgAudio.play();
        bgVideo.play();
        play.setAttribute("src", "svg/pause.svg");
    } else {
        bgAudio.pause();
        bgVideo.pause();
        play.setAttribute("src", "svg/play.svg");
    }
};

const restartPlaying = bgAudio => {
    let currentTime = bgAudio.currentTime;
    currentTime = 0;
};

let rain = document.querySelector(".rain");
let ocean = document.querySelector(".ocean");

rain.addEventListener("click", () => {
    bgVideo.setAttribute("src", "videos/rain.mp4");
    bgVideo.play();
    bgAudio.setAttribute("src", "sounds/rain.mp3");
    bgAudio.play()
});

ocean.addEventListener("click", () => {
    bgVideo.setAttribute("src", "videos/beach.mp4");
    bgVideo.play();
    bgAudio.setAttribute("src", "sounds/beach.mp3");
    bgAudio.play()
});

let outline = document.querySelector(".outline circle")
let outlineLength = outline.getTotalLength();
outline.style.strokeDasharray = outlineLength;
outline.style.strokeDashoffset = outlineLength;

let timer = document.querySelectorAll(".btn");
let time = document.querySelector(".time");
let fakeDuration = 10;

timer.forEach((i) => {
    i.addEventListener("click", function() {
        fakeDuration = this.getAttribute("data-time");
        time.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
    });
});

bgAudio.addEventListener("timeupdate", () => {
    let currentTime = bgAudio.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;
    time.textContent = `${minutes}:${seconds}`;
    if(currentTime >= fakeDuration) {
        bgAudio.pause();
        bgAudio.currentTime = 0;
        play.setAttribute("src", "svg/pause.svg");
        bgVideo.pause();
    }
});