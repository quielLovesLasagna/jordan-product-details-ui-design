"use strict";

// ELEMENT/S
const slidesEl = document.querySelectorAll(".slide");
const arrowPreviousBtn = document.querySelector(".arr-btn-prev");
const arrowNextBtn = document.querySelector(".arr-btn-next");

let currentSlide = 0;
const maxSlide = slidesEl.length;

// FUNCTION/S
function goToSlide(slide) {
	/*
  Let's give this an example:
  If user is on the first slide, then currentSlide = 0

  If you invoke this function set slide = 0:

  - i is the current index of the loop
  - slide is the slide user wants to go

  100 * (i - slide):

  First slide element: translateX(0%)
  Second slide element: translateX(100%)
  Third slide element: translateX(200%)

  That is the initial position of the slide, if user wants to go to the next slide, then currentSlide = 1 (based on nextSlide function)

  First slide element: translateX(-100%)
  Second slide element: translateX(0%)
  Third slide element: translateX(100%)

  Why?

  For each element:
  translateX(100 * (0 - 1)%) = translateX(-100%)
  translateX(100 * (1 - 1)%) = translateX(0%)
  translateX(100 * (2 - 1)%) = translateX(100%)
  */

	slidesEl.forEach((slideEl, i) => {
		slideEl.style.transform = `translateX(${100 * (i - slide)}%)`;
	});
}

function nextSlide() {
	// -- If current slide is the last slide, set current slide to first slide
	if (currentSlide === maxSlide - 1) {
		currentSlide = 0;
	} else {
		// -- Set current slide to next slide
		currentSlide++;
	}

	// -- Invoke goToSlide function
	goToSlide(currentSlide);
}

function previousSlide() {
	// -- If current slide is the first, set current slide to last slide
	if (currentSlide === 0) {
		currentSlide = maxSlide - 1;
	} else {
		// -- Set current slide to previous slide
		currentSlide--;
	}

	goToSlide(currentSlide);
}

function initializeSlides() {
	// -- Initialize the slides where first slide is the currentSlide
	goToSlide(0);
}
initializeSlides();

// EVENT-LISTENER/S
arrowPreviousBtn.addEventListener("click", previousSlide);
arrowNextBtn.addEventListener("click", nextSlide);
