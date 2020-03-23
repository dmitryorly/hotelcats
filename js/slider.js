

  // Variables
  
  var activeSlideIndex = 0; // Начинаем с первого слайда
  var indicators = Array.from( document.querySelectorAll('.slider__indicator')); // Приведем к массиву для работы метода indexOf()
  var cardsLeft = 270; // Начальная позиция карточек
  var cardWidth = document.querySelector('.review__card').clientWidth + 30;

  let nextBtn = document.querySelector('.slider__button_next');
  let prevBtn = document.querySelector('.slider__button_prev');
  let cards = document.querySelector('.review__cards');

  // Functions
  
  var setCardsLeft = function(val) {
    cards.style.left = cardsLeft + 'px';
    // console.log(activeSlideIndex, cards.style.left)
  }

  const nextSlide = function() {
    // console.log('Next slide');

    indicators[activeSlideIndex].classList.remove('slider__indicator_active'); // Удаляем у активного индикатора активный класс
    activeSlideIndex += 1; // Теперь активным будет следующий элемент
    //Проверка на переполнение (зацикливание индекса)
    if (activeSlideIndex == indicators.length) {
      activeSlideIndex = 0;
    }
    cardsLeft = 270 - cardWidth * activeSlideIndex;
    setCardsLeft(cardsLeft);
    indicators[activeSlideIndex].classList.add('slider__indicator_active'); // Добавляем активный класс индикатору

    // console.log('Active index is: ', activeSlideIndex)
  }

  const prevSlide = function() {
    // console.log('Prev slide');

    indicators[activeSlideIndex].classList.remove('slider__indicator_active');
    activeSlideIndex -= 1; // Теперь активным будет предыдущий индикатор
    // Зацикливаем в другую сторону
    if (activeSlideIndex < 0) {
      activeSlideIndex = indicators.length - 1;
    }
    cardsLeft = 270 - cardWidth * activeSlideIndex;
    setCardsLeft(cardsLeft);
    indicators[activeSlideIndex].classList.add('slider__indicator_active');
    
    // console.log('Active index is: ', activeSlideIndex)
  }

  // Buttons start

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Buttons end


  // Indicators start
  
  indicators
  .forEach(indicator => indicator.addEventListener
    ('click', () => {
    indicators.forEach(indicator => 
      indicator.classList.remove('slider__indicator_active'))
    
    indicator.classList.add('slider__indicator_active');
    // Удаляем активный класс у каждого индикатора и добавляем к нажатому
    activeSlideIndex = indicators.indexOf(indicator);
    // Записываем индекс активного индикатора
    cardsLeft = 270 - 500 * activeSlideIndex;
    setCardsLeft(cardsLeft);
    } ))

  // Indicators end
