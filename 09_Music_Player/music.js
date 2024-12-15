const controlSong = document.getElementById("cntrl-song");
const progressBar = document.getElementById("inpt-p-bar");
const song = document.getElementById("song");


// play pause function
song.addEventListener("loadedmetadata",()=>{
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;

});

function playAndPouseSong(){
    if(controlSong.classList.contains("ri-pause-large-fill")){
        song.pause();
        controlSong.classList.remove("ri-pause-large-fill");
        controlSong.classList.add("ri-play-large-fill");
    }else{
        song.play();
        controlSong.classList.add("ri-pause-large-fill");
        controlSong.classList.remove("ri-play-large-fill");
    }
};

if(song.play()){
    setInterval(()=>{
        progressBar.value = song.currentTime;
    },500)
}

progressBar.addEventListener("change",()=>{
    song.play();
    song.currentTime = progressBar.value
    controlSong.classList.add("ri-pause-large-fill");
    controlSong.classList.remove("ri-play-large-fill");
})

controlSong.addEventListener("click",playAndPouseSong);


