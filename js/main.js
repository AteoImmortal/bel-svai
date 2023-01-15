const slider = document.querySelector('#sliderBox');
const btnNext = document.querySelector('#btnNext');
const btnBack = document.querySelector('#btnBack');

const sliderItems = Array.from(slider.children);

sliderItems.forEach((slide, index)=>{

    if(index !== 0) slide.classList.add('none');

    slide.dataset.index = index;
    sliderItems[0].setAttribute('data-active','');
});

btnNext.addEventListener('click', function(){
    showNextSlide('next');
});

btnBack.addEventListener('click', function(){
    showNextSlide('back')
});

function showNextSlide(direction){
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;

    currentSlide.classList.add('none');
    currentSlide.removeAttribute('data-active');

    let nextSlideIndex;

    if(direction === 'next'){
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

    nextSlide.classList.remove('none');
    nextSlide.setAttribute('data-active','');
}