document.addEventListener("DOMContentLoaded", function() {
    //select all images
    let slides = document.querySelectorAll('.slide');
    //start at the first image
    let index = 0;
    //fucntion to move to the next image
    function nextSlide() {
        //increment the index and slide back to the first image
        index = (index + 1) % slides.length;
        updateSlidePosition();
    }
    //update the position of the image
    function updateSlidePosition() {
        //get the width of the image
        let slideWidth = slides[0].clientWidth;
        //move the image horizontally
        document.querySelector('.slides').style.transform = `translateX(${-index * slideWidth}px)`;
    }
    //move every 5 seconds
    setInterval(nextSlide, 5000);
});
//start as soon as someone opens the homepage
window.onload = nextSlide;
