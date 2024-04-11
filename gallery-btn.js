document.addEventListener('DOMContentLoaded', function() {
  var imageContainers = document.querySelectorAll('.image-container');
  if (imageContainers.length > 0) {
    var moveWidth = imageContainers[0].offsetWidth + (parseInt(window.getComputedStyle(imageContainers[0]).marginRight) * 2);
  
    document.getElementById('prevBtn').addEventListener('click', function() {
      document.getElementById('slide').scrollBy({ left: -moveWidth, behavior: 'smooth' });
    });
  
    document.getElementById('nextBtn').addEventListener('click', function() {
      document.getElementById('slide').scrollBy({ left: moveWidth, behavior: 'smooth' });
    });
  }
});