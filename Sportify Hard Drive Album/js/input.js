
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