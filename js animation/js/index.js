const answer = document.getElementsByClassName('answer');
const question = document.getElementsByClassName('question');
const down = document.getElementsByClassName('down');
const moon = document.getElementById('moon');


question[0].addEventListener('click', () => {
    down[0].classList.toggle("active");
    answer[0].classList.toggle("active");
    scrollheight(0);
})
question[1].addEventListener('click', () => {
    down[1].classList.toggle("active");
    answer[1].classList.toggle("active");
    scrollheight(1);
})
question[2].addEventListener('click', () => {
    down[2].classList.toggle("active");
    answer[2].classList.toggle("active");
    scrollheight(2);
})
question[3].addEventListener('click', () => {
    down[3].classList.toggle("active");
    answer[3].classList.toggle("active");
    scrollheight(3);
})

function scrollheight (i) {
    if(answer[i].classList.contains('active')) {
    answer[i].style.height = answer[i].scrollHeight + 'px';
    }
    else
    answer[i].style.height = null;

}

moon.addEventListener('click', () => {
    moon.classList.toggle("fa-sharp");
    moon.classList.toggle("fa-solid");
    moon.classList.toggle("fa-sun");
    moon.classList.toggle("fa-moon");
    moon.classList.toggle("fa-solid");
    document.body.classList.toggle("dark");
})
