function sliderInit(mainElemSelector) {
  
  const slider = document.querySelector(mainElemSelector),
      indicators = slider.querySelectorAll(".indicator"),
      slides = slider.querySelectorAll(".slide"),
      nextButton = slider.querySelector(".next-button"),
      prevButton = slider.querySelector(".prev-button");
let activeIndex = 0;

const translate = (slide, index = activeIndex) => {
  return slide.style.transform = 'translateX(' + -100 * activeIndex + '%)'
}

indicators.forEach((indicator, index) => indicator.addEventListener('click', () => {
  indicators[activeIndex].classList.remove('indicator_active');
  indicator.classList.add('indicator_active');
  activeIndex = index;
  slides.forEach(slide => translate(slide, index))
}))

prevButton.addEventListener('click', () =>{
  indicators[activeIndex].classList.remove('indicator_active');
  activeIndex >= 1 ? activeIndex -= 1 : activeIndex = slides.length - 1;
  indicators[activeIndex].classList.add('indicator_active');
  slides.forEach(slide => translate(slide, activeIndex))
} )

nextButton.addEventListener('click', () =>{
  indicators[activeIndex].classList.remove('indicator_active');
  activeIndex < slides.length - 1 ? activeIndex += 1 : activeIndex = 0;
  indicators[activeIndex].classList.add('indicator_active');
  slides.forEach(slide => translate(slide, activeIndex))
} )
  
}

(sliderInit("#review-slider"))