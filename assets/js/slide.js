const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let currIndex = 0;

const dotList = $$(".testi__dot-item");
const reviewList = $(".test__list");
const lineActive = $(".header__active-line");
const listNav = $$(".header__nav-item");

dotList.forEach((dot, index) => {
    dot.onclick = function () {
        dotList[currIndex].classList.remove("active");
        currIndex = index;
        slideReview(currIndex);
    };
});

setInterval(function () {
    dotList[currIndex].classList.remove("active");
    if (currIndex < dotList.length - 1) {
        currIndex++;
    } else {
        currIndex = 0;
    }
    slideReview(currIndex);
}, 6000);

function slideReview(currIndex) {
    reviewList.style.left = -(currIndex * reviewList.offsetWidth) + "px";
    dotList[currIndex].classList.add("active");
}

/* Navigation */
navIndex = 0;
const leftOff = Array.from(listNav).map((item) => {
    return item.offsetWidth + 37;
});

leftOff.forEach(function (item, index, Array) {
    if (index !== 0) {
        Array[index] = Array[index] + Array[index - 1];
    }
});
console.log(leftOff);
listNav.forEach((item, index, Array) => {
    item.onclick = function (e) {
        Array[navIndex].classList.remove("active");
        navIndex = index;
        Array[navIndex].classList.add("active");
        if (navIndex === 0) {
            lineActive.style.left = 0 + "px";
            lineActive.style.width = item.offsetWidth - 10 + "px";
        } else {
            lineActive.style.left = leftOff[navIndex - 1] + "px";
            lineActive.style.width = item.offsetWidth - 10 + "px";
        }
    };
});
