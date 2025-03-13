// dental_website/script.js

// Example interactivity - log message when buttons are clicked
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        alert(`You clicked: ${btn.textContent.trim()}`);
      });
    });
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll(".testimonial-slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
// gazriin zurag holboh
function initMap() {
  const location = { lat: 47.912319, lng: 106.891049 }; // 10-р хорооллын координат
  const map = new google.maps.Map(document.getElementsByClassName("map"), {
    zoom: 14,
    center: location
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "10-р хороолол"
  });
}
