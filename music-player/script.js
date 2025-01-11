const progress = document.getElementById("progress")
const song = document.getElementById("song")
const play = document.getElementById("play")
const backward = document.getElementById("backward")
const forward = document.getElementById("forward")
const playIcon = document.getElementById("play-icon")
let id = null;

song.onloadedmetadata = function () {
    progress.max = song.duration
    progress.value = song.currentTime
}

function playPause() {
    if (playIcon.classList.contains("fa-pause")) {
        song.pause()
        if (id) {
            clearInterval(id);
            id = null
        }
        playIcon.classList.remove("fa-pause")
        playIcon.classList.add("fa-play")
    }
    else {
        song.play()
        if (!id) {
            id = setInterval(() => {
                console.log(song.currentTime)
                progress.value = song.currentTime
            }, 500)
        }
        playIcon.classList.remove("fa-play")
        playIcon.classList.add("fa-pause")
    }
}

progress.addEventListener("change", () => {
    song.currentTime = progress.value
})

backward.addEventListener("click", () => {
    console.log("backward")
    song.currentTime -= 10;
    progress.value = song.currentTime
})

forward.addEventListener("click", () => {
    console.log("forward")
    song.currentTime += 10;
    progress.value = song.currentTime
})

play.addEventListener("click", playPause)

// vansh4117v