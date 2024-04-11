document.addEventListener('DOMContentLoaded', function() {
    var scrollButton = document.querySelector('.scroll-to-top');
    if (scrollButton) {
        scrollButton.addEventListener('click', function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    };
});