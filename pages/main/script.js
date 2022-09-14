let offset = 0; // смещение от левого края
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
    offset += 270;
    if (offset > 540) {
        offset = 0;
    }
    sliderLine.style.left = -offset + "px"
});

document.querySelector(".slider-prev").addEventListener("click", function () {
    offset -= 270;
    if (offset < 0) {
        offset = 540;
    }
    sliderLine.style.left = -offset + "px"
});