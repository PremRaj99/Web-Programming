console.log("hello js");

// initialisation of varriables

let songIndex = 0;
let masterPlay = document.getElementById("play-pause");
let myProgressBar = document.getElementById("myProgressBar");
let progressTime = document.getElementById("progressTime");
let timeDuration = document.getElementById("timeDuration");
let index = 0;
let Element = document.getElementsByClassName("item")[index];

let list_item = Array.from(document.getElementsByClassName("list-item"));

songs.forEach( (element, i) => {
    list_item[0].innerHTML += '<div class="item"><div class="left"><div class="pointer" id="SNo">7</div><div class="hidden play" id="play"></div><div><h2 class="song-name pointer">JASHAN-E-HIP-HOP</h2><div><span>E</span><a class="song-artist" href="#"></a></div></div></div><div class="right"><span class="material-symbols-outlined heart hover-link">    favorite    </span><span class="song-time">2:52</span><span class="material-symbols-outlined tripple-dot hover-link">more_horiz</span></div></div>';
})

let audioElement = new Audio(songs[0].filePath);

// handle play pause click-----------------------------------------
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play();
        masterPlay.innerHTML = 'pause_circle';
        playAudio(Element, index);
        console.log(Element, index);
    }
    else {
        audioElement.pause();
        masterPlay.innerHTML = 'play_circle';
        pauseAudio(Element, index);
    }
})

let play_button = document.getElementsByClassName("play-button");

play_button[0].addEventListener('click', ()=> {
    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play();
        masterPlay.innerHTML = 'pause_circle';
        playAudio(Element, index);
        console.log(Element, index);
    }
    else {
        audioElement.pause();
        masterPlay.innerHTML = 'play_circle';
        pauseAudio(Element, index);
    }
})

// listen an events--------------------------------------------------
audioElement.addEventListener('timeupdate', () => {

    // update progress time
    progressTime.innerHTML = convertMin(audioElement.currentTime);
    timeDuration.innerHTML = convertMin(audioElement.duration);
    // update progress bar (seek)
    progress = (audioElement.currentTime / audioElement.duration * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100
})

// animation on over--------------------------------------------------

const item = Array.from(document.getElementsByClassName("item"));


item.forEach((element, i) => {

    element.addEventListener('mouseover', () => {

        element.getElementsByClassName("pointer")[0].style.display = "none";
        element.getElementsByClassName("play")[0].style.display = "block";

    })
    element.addEventListener('mouseout', () => {

        element.getElementsByClassName("pointer")[0].style.display = "block";
        element.getElementsByClassName("play")[0].style.display = "none";

    })
    element.addEventListener('click', () => {

        audioElement.src = songs[i].filePath;
        pauseAudio(document.getElementsByClassName("item")[index], index);
        audioElement.play();
        masterPlay.innerHTML = 'pause_circle';
        index = i;
        Element = element;
        playAudio(Element, index);
    })

});


// gif function--------------------------------------------
function gif(element, i) {

    if (audioElement.paused || audioElement.currentTime != 0) {
        element.getElementsByClassName("pointer")[0].innerHTML = (i + 1);
    }
    else {
        element.getElementsByClassName("pointer")[0].innerHTML = '<img class="gif" src="assets/asset 3.gif" alt="">';
    }
}

// pause gif-----------------------------------------------
pauseAudio = (e, i) => {
    gif(e, i);
    e.getElementsByClassName("pointer")[0].style.color = "inherit";
    e.getElementsByClassName("pointer")[1].style.color = "inherit";
}
// play gif-------------------------------------------------
playAudio = (e, i) => {
    gif(e, i);
    e.getElementsByClassName("pointer")[0].style.color = "#1ECC5C";
    e.getElementsByClassName("pointer")[1].style.color = "#1ECC5C";
}


// update song name in list 

let addIndex;

item.forEach((element, i) => {
    element.getElementsByClassName("pointer")[0].innerHTML = i + 1;
    element.getElementsByClassName("song-name")[0].innerHTML = songs[i].songName;
    element.getElementsByClassName("song-time")[0].innerHTML = songs[i].time;
    element.getElementsByClassName("song-artist")[0].innerHTML = songs[i].artist;
    addIndex = i+1;
})

// add previous and next control------------------------------

let previous = document.getElementsByClassName("previous-control")[0];
let next = document.getElementsByClassName("next-control")[0];

previous.addEventListener('click', () => {
    pauseAudio(document.getElementsByClassName("item")[index], index);
    if (index != 0) {
        index--;
        audioElement.src = songs[index].filePath;
    }
    else {
        audioElement.src = songs[index = addIndex-1].filePath;
    }
    audioElement.play();
    masterPlay.innerHTML = 'pause_circle';
    playAudio(document.getElementsByClassName("item")[index], index);
})

next.addEventListener('click', () => {
    pauseAudio(document.getElementsByClassName("item")[index], index);
    if (index != addIndex-1) {
        index++;
        audioElement.src = songs[index].filePath;
    }
    else {
        audioElement.src = songs[index = 0].filePath;
    }
    audioElement.play();
    masterPlay.innerHTML = 'pause_circle';
    playAudio(document.getElementsByClassName("item")[index], index);
})

// convert time into min:sec--------------------------------------------
function convertMin(seconds) {
    let minutes = Math.floor(seconds / 60);
    let extraSeconds = seconds % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    extraSeconds = parseInt(extraSeconds);
    extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
    min = minutes.toString() + ":" + extraSeconds.toString();
    return min;
}

// sufftle of songs

// songs.forEach((element, i) => {
//     if (audioElement.currentTime == audioElement.duration) {
//         pauseAudio(document.getElementsByClassName("item")[index], index);
//         index = i + 1;
//         audioElement.src = songs[index].filePath;
//         console.log(index);
//         audioElement.play();
//         masterPlay.innerHTML = 'pause_circle';
//         playAudio(document.getElementsByClassName("item")[index], index);
//     }
// })