// Lightbox for project/experience photo galleries.
// Works automatically for any .gallery-item added later — no extra JS needed.
document.addEventListener('click', function (e) {
  var item = e.target.closest('.gallery-item');
  if (item) {
    var img = item.querySelector('img');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var caption = document.getElementById('lightbox-caption');
    if (img && lightbox && lightboxImg) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || '';
      caption.textContent = item.getAttribute('data-caption') || '';
      lightbox.hidden = false;
    }
    return;
  }
  if (e.target.closest('.lightbox-close') || e.target.id === 'lightbox') {
    var lb = document.getElementById('lightbox');
    if (lb) lb.hidden = true;
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    var lb = document.getElementById('lightbox');
    if (lb) lb.hidden = true;
  }
});
