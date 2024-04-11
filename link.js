window.addEventListener('load', function() {
    var rightContainer = document.querySelector('.professor-section-right');
    if (rightContainer) {
        rightContainer.style.cursor = 'pointer'; // 显示为可点击的光标
        rightContainer.addEventListener('click', function() {
            window.open("https://academics.csun.edu/faculty/abhijit.mukherjee", "_blank");
        }, false);
    }
});