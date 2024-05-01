document.addEventListener('DOMContentLoaded', function() {
    // Check if on a mobile device
    if (window.innerWidth <= 768) {
        var columnImg = document.querySelector('.contact-section .column-img');

        // Execute function when image is clicked
        columnImg.addEventListener('click', function() {
            // Open the specified link in a new window
            window.open('https://w2.csun.edu/engineering-computer-science/mechanical-engineering', '_blank');
        });
    }
});
