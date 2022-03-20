const plusbtn1 = document.querySelector(".btn-img1");
const plusbtn2 = document.querySelector(".btn-img2");
const plusbtn3 = document.querySelector(".btn-img3");
const plusbtn4 = document.querySelector(".btn-img4");
const plusbtn5 = document.querySelector(".btn-img5");
const plusbtn6 = document.querySelector(".btn-img6");
const drop = document.getElementsByClassName("boxes1")

plusbtn1.addEventListener('click', () => {
    drop[0].classList.toggle("box-drop");
})
plusbtn2.addEventListener('click', () => {
    drop[1].classList.toggle("box-drop");
})
plusbtn3.addEventListener('click', () => {
    drop[2].classList.toggle("box-drop");
})
plusbtn4.addEventListener('click', () => {
    drop[3].classList.toggle("box-drop");
})
plusbtn5.addEventListener('click', () => {
    drop[4].classList.toggle("box-drop");
})
plusbtn6.addEventListener('click', () => {
    drop[5].classList.toggle("box-drop");
})
