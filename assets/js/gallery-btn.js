document.getElementById('prevBtn').addEventListener('click', function() {
  let gallerySlide = document.getElementById('gallerySlide');
  gallerySlide.insertBefore(gallerySlide.lastElementChild, gallerySlide.firstElementChild);
});

document.getElementById('nextBtn').addEventListener('click', function() {
  let gallerySlide = document.getElementById('gallerySlide');
  gallerySlide.appendChild(gallerySlide.firstElementChild);
});

