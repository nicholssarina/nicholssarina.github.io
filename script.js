const carouselImages = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prevBbutton');
const nextButton = document.querySelector('.nextButton');
let currentIndex = 0;

function showImage(index) {
  carouselImages[currentIndex].classList.remove('active');
  currentIndex = index;
  carouselImages[currentIndex].classList.add('active');
}

function showNextImage() {
  showImage((currentIndex + 1) % carouselImages.length);
}

function showPrevImage() {
  showImage((currentIndex + carouselImages.length - 1) % carouselImages.length);
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

window.addEventListener('load', () => {
  carouselImages.forEach(img => {
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    if (aspectRatio > 1) {
      img.style.width = '100%';
      img.style.height = 'auto';
    } else {
      img.style.width = 'auto';
      img.style.height = '100%';
    }
  });
  showImage(1);
})



