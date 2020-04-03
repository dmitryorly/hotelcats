function sliderInit(mainElemSelector) {
  
  const slider = document.querySelector(mainElemSelector), 
      slideContainer = slider.querySelector('.slider__slide-container'),
      indicators = slider.querySelectorAll(".indicator"),
      slides = slider.querySelectorAll(".slide"),
      nextButton = slider.querySelector(".next-button"),
      prevButton = slider.querySelector(".prev-button");
let activeIndex = 0;

const nextSlide = function () {
  indicators[activeIndex].classList.remove('indicator_active');
  activeIndex < slides.length - 1 ? activeIndex += 1 : activeIndex = 0;
  indicators[activeIndex].classList.add('indicator_active');
  slides.forEach(slide => translate(slide, activeIndex))
}

const prevSlide = function () {
  indicators[activeIndex].classList.remove('indicator_active');
  activeIndex >= 1 ? activeIndex -= 1 : activeIndex = slides.length - 1;
  indicators[activeIndex].classList.add('indicator_active');
  slides.forEach(slide => translate(slide, activeIndex))
}

//mobile start

slideContainer.addEventListener('touchstart', lock)
slideContainer.addEventListener('touchend', move)

let posX = null;

function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };

function lock (ev) {
  posX = unify(ev).clientX;
  console.log( posX );
}

function move (ev) {
  if ( posX - unify(ev).clientX > 35 ) {
    nextSlide();
  } else if ( posX - unify(ev).clientX < - 35 ) {
    prevSlide();
  } else return
}

//mobile end

const translate = (slide, index = activeIndex) => {
  return slide.style.transform = 'translateX(' + -100 * activeIndex + '%)'
}

indicators.forEach((indicator, index) => indicator.addEventListener('click', () => {
  indicators[activeIndex].classList.remove('indicator_active');
  indicator.classList.add('indicator_active');
  activeIndex = index;
  slides.forEach(slide => translate(slide, index))
}))

prevButton.addEventListener('click', prevSlide )

nextButton.addEventListener( 'click', nextSlide )
  
}

sliderInit("#review-slider")
sliderInit("#rooms-slider")