var slideIndex = 1;
let dot1 = document.getElementsByClassName("dot-1");
let dot2 = document.getElementsByClassName("dot-2");
let dot3 = document.getElementsByClassName("dot-3");
let dot4 = document.getElementsByClassName("dot-4");

function currentSlide(n) {
    showSlides(slideIndex = n);
    if (n == 1) {
        for (i = 0; i < dot1.length; i++) {
            dot1[i].className += " active"
        }
    }
    if (n == 2) {
        for (i = 0; i < dot2.length; i++) {
            dot2[i].className += " active"
        }
    }
    if (n == 3) {
        for (i = 0; i < dot3.length; i++) {
            dot3[i].className += " active"
        }
    }
    if (n == 4) {
        for (i = 0; i < dot4.length; i++) {
            dot4[i].className += " active"
        }
    }
}

function showSlides(n) {

    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";

}
showSlides(slideIndex);