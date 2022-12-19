const container = document.querySelector(".container");
const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");
const slidesLength = rightSide.querySelectorAll("div").length;

let numberActiveSlide = 0;

leftSide.style.top = `-${(slidesLength -1) * 100}vh`;

arrowUp.addEventListener("click", function () {
    changeSlide("up");
})

arrowDown.addEventListener("click", function () {
    changeSlide("down");
})

function changeSlide(direction) {
    const sliderHeight = container.clientHeight;
    
    if (direction === "up") {
        numberActiveSlide++;
        if (numberActiveSlide >= slidesLength) {
            numberActiveSlide = 0;
        }
    } else {
        numberActiveSlide--;
        if (numberActiveSlide < 0) {
            numberActiveSlide = slidesLength - 1;
        }
    }

    rightSide.style.transform = `translateY(-${numberActiveSlide * sliderHeight}px)`;
    leftSide.style.transform = `translateY(${numberActiveSlide * sliderHeight}px)`;
}




