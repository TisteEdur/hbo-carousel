const carousel = document.getElementById("carousel");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const wrapper = document.getElementById("wrapper");

leftButton.remove();

leftButton.addEventListener("click", function () {
    carousel.style.transform = 'translateX(1vw)';

    setTimeout(function () {
        leftButton.remove();
        wrapper.append(rightButton);
    }, 600);
});

rightButton.addEventListener("click", function () {
    carousel.style.transform = 'translateX(calc(100vw - 104%))';

    setTimeout(function () {
        rightButton.remove();
        wrapper.prepend(leftButton);
    }, 600);
});