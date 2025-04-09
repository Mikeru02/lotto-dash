let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

document.querySelector('.next').addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
};

document.addEventListener("DOMContentLoaded", function () {
  setInterval(function () {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }, 3000); // 3 seconds interval
});
