function toggleTextAndRedirect() {
    // 原有的 toggleText() 功能，用于切换文本内容和样式
    toggleText();

    // 新功能，跳转到 #about
    window.location.href = "#about";
}

function toggleText() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("show-more-btn");
    var leftContainer = document.querySelector('.left-container');
    var rightContainer = document.querySelector('.right-container');

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.innerHTML = "Show Less";
        leftContainer.style.flex = '1';
        rightContainer.style.flex = '2';
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Show More";
        leftContainer.style.flex = '2';
        rightContainer.style.flex = '1';
    }
}
