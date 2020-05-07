const header = document.querySelector("#header");

$(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

$("#testimonial").slick({
  autoplay: true,
});

const scroll = new SmoothScroll('a[href*="#"]');
