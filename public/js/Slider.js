function showSlides(number) {
    let i = NaN
    let slides = document.getElementsByClassName("mySlides")
    let dots = document.getElementsByClassName("dot")

    if (number > slides.length) slideIndex = 1;
    if (number < 1) slideIndex = slides.length;

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for(let i = 0; i < dots.length; i++) {}
}

var slideIndex = 1;
showSlides(slideIndex)