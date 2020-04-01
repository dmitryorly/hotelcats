function sliderInit(mainElem) {
  
  const slider = document.querySelector(".slider"),
      dots = slider.querySelectorAll(".dot"),
      slides = slider.querySelectorAll(".slide"),
      nextButton = slider.querySelector(".next-button"),
      prevButton = slider.querySelector(".prev-button");
let activeIndex = 0;

const translate = (slide, index = activeIndex) => {
  return slide.style.transform = 'translateX(' + -100 * activeIndex + '%)'
}

dots.forEach((dot, index) => dot.addEventListener('click', () => {
  dots[activeIndex].classList.remove('dot_active');
  dot.classList.add('dot_active');
  activeIndex = index;
  slides.forEach(slide => translate(slide, index))
}))

prevButton.addEventListener('click', () =>{
  dots[activeIndex].classList.remove('dot_active');
  activeIndex >= 1 ? activeIndex -= 1 : activeIndex = slides.length - 1;
  dots[activeIndex].classList.add('dot_active');
  slides.forEach(slide => translate(slide, activeIndex))
} )

nextButton.addEventListener('click', () =>{
  dots[activeIndex].classList.remove('dot_active');
  activeIndex < slides.length - 1 ? activeIndex += 1 : activeIndex = 0;
  dots[activeIndex].classList.add('dot_active');
  slides.forEach(slide => translate(slide, activeIndex))
} )
  
}

sliderInit(document.querySelector("#review-slider"))
sliderInit(document.querySelector("#rooms-slider"))

