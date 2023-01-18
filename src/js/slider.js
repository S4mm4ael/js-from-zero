function sliderFunction() {
  const prev = document.querySelector(".b-slideshow-container__prev");
  const next = document.querySelector(".b-slideshow-container__next");
  const slides = document.querySelectorAll(".b-img-container__item");
  const dots = document.querySelectorAll(".b-dot-container__item");
  let slideIndex = 1;

  prev.addEventListener("click", () => moveSlides(-1));
  next.addEventListener("click", () => moveSlides(1));

  function moveSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    let i;

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(
        " b-dot-container__item_active",
        ""
      );
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " b-dot-container__item_active";
  }
  showSlides(slideIndex);
}

export default sliderFunction;
