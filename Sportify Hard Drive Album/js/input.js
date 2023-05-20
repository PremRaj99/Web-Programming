
// User Name --------------------------------------

let user_name = document.getElementsByClassName("user-name")[0];

document.body.style.filter = "blur(6px)";

setTimeout( () => {
    user_name.innerHTML = prompt("User Name");
    return new Promise(() => {
        setTimeout ( () => {
            call();
        }, 200);
    })
}, 200);

function call() {
    document.body.style.filter = "none";
}


// add song ----------------------------------------------

let open = document.getElementsByClassName("login-button")[0];

let close = document.getElementsByClassName("close")[0];

open.addEventListener('click', () =>{
    document.getElementsByClassName("login-container")[0].style.display = "grid";
    document.getElementsByClassName("card")[0].classList.add("active");
    if(document.getElementsByClassName("card")[0].classList.contains("active")){
    }
})
close.addEventListener('click', () =>{
    document.getElementsByClassName("login-container")[0].style.display = "none";
    document.getElementsByClassName("card")[0].classList.remove("active");
})

// add to song list-----------------------------------------

let add_song = document.querySelector('input[type="submit"]');
add_song.addEventListener('click', () => {
    songs.push({
        songName: document.getElementById("SongName").value,
        filePath: document.getElementById("SongFile").value,
        time: document.getElementById("SongDuration").value,
        artist: document.getElementById("SongArtist").value,
    });
    
    console.log(document.getElementById("SongFile").value);
    document.getElementsByClassName("login-container")[0].style.display = "none";
    document.getElementsByClassName("card")[0].classList.remove("active");
    
    list_item[0].innerHTML += '<div class="item"><div class="left"><div class="pointer" id="SNo">7</div><div class="hidden play" id="play"></div><div><h2 class="song-name pointer">JASHAN-E-HIP-HOP</h2><div><span>E</span><a class="song-artist" href="#"></a></div></div></div><div class="right"><span class="material-symbols-outlined heart hover-link">    favorite    </span><span class="song-time">2:52</span><span class="material-symbols-outlined tripple-dot hover-link">more_horiz</span></div></div>';
    Array.from(document.getElementsByClassName("item"))[addIndex].getElementsByClassName("pointer")[0].innerHTML = addIndex + 1;
    Array.from(document.getElementsByClassName("item"))[addIndex].getElementsByClassName("song-name")[0].innerHTML = songs[addIndex].songName;
    Array.from(document.getElementsByClassName("item"))[addIndex].getElementsByClassName("song-time")[0].innerHTML = songs[addIndex].time;
    Array.from(document.getElementsByClassName("item"))[addIndex].getElementsByClassName("song-artist")[0].innerHTML = songs[addIndex].artist;
    addIndex++;
})