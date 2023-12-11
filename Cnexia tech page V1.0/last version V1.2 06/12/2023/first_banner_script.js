document.addEventListener("DOMContentLoaded", function () {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("slide_picto");
        var dots = document.getElementsByClassName("dot_picto");
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].classList.add("active");

        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
});