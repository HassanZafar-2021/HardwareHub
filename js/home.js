let slideIndex = 1;

document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
});

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  const oldGlass = document.querySelector(".img-magnifier-glass");
  if (oldGlass) oldGlass.remove();

  const currentImg = slides[slideIndex - 1].querySelector("img");
  if (currentImg && currentImg.id) magnify(currentImg.id, 2);
}
