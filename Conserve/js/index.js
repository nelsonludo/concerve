window.addEventListener("scroll", function(){
    let header = document.getElementById("headernav");

    let billboardimg = document.getElementById("billboardp");

    let windowPosistion = window.scrollY > 0;

    header.classList.toggle("scrolling-active", windowPosistion);
    billboardimg.classList.toggle("scrolling-b-active", windowPosistion);
})

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.dropdowns');
    const navLinks = document.querySelectorAll('.dlink');

    burger.addEventListener('click', () => {
            nav.classList.toggle('dropdown-active');
        });

    navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        });    
}

navSlide();

var slideIndex = [1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlides(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  

}


