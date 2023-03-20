const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
//top const will find all slides with the track.children, array group them

// console.log(slides); //use console to make sure you can see all the children

const nextButton = document.querySelector('.carousel_button--right');
//when i click right, move slides to the right
//console.log(nextButton);


const prevButton = document.querySelector('.carousel_button--left');
// when i click left, move left

const dotsNav = document.querySelector('.carousel_nav');

const dots = Array.from(dotsNav.children);
//when i click the nav indicator  move to that slide
// console.log(dots);

const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideSize);

// const slideWidth = slideSize.width;
// console.log(slideWidth);


 //slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
 //slides[2].style.left = slideWidth * 2 + 'px';
//arrange slide next to another

//another way to write the same code but with out having to do it for each slide in found below.
// slides.forEach((slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// })
//another way again for the same thing as below but for other people to understand what you are trying to do


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');    
}

const updateDots =(currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slide, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
        
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
        //used to make the side button reaper and disaper when reaching the end of slides
}
    
}

//move slides to the left

prevButton.addEventListener('click', e => {
const currentSlide = track.querySelector('.current-slide');
const prevSlide = currentSlide.previousElementSibling;
const currentDot = dotsNav.querySelector('.current-slide');
const prevDot = currentDot.previousElementSibling;
const prevIndex = slides.findIndex(slide => slide === prevSlide);

moveToSlide(track, currentSlide, prevSlide);
updateDots(currentDot, prevDot);
hideShowArrows(slides, prevButton, nextButton, prevIndex);
});


//when I click right, move slides to the right
nextButton.addEventListener('click', e => {
const currentSlide = track.querySelector('.current-slide');
    //console.log(currentSlide);
const nextSlide = currentSlide.nextElementSibling;

    //move to the next slide
// const amountToMove = nextSlide.style.left;
//     track.style.transform = 'translateX(-' + amountToMove +')';
//     currentSlide.classList.remove('current-slide');
//     nextSlide.classList.add('current-slide');})
//this is used in the above const to move from prev slide to next slide.
const currentDot = dotsNav.querySelector('.current-slide');
const nextDot = currentDot.nextElementSibling;
const nextIndex = slides.findIndex(slide => slide === nextSlide);

moveToSlide(track, currentSlide, nextSlide);
updateDots(currentDot, nextDot);
hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

//when I click the dot indicator , move to slide

dotsNav.addEventListener('click', e => {
//what indicator was clicked on?
const targetDot = e.target.closest('button');

//console.log(e.target);
//console.log(targetNav);

//console.log('test1');

if (!targetDot) return;

//return is done to cancel any function from working if the button is not click. only then can the 
//function cont. if the button is clicked.
//console.log('test2');

const currentSlide = track.querySelector('.current-slide');
const currentDot = dotsNav.querySelector('.current-slide');
const targetIndex = dots.findIndex(dot => dot === targetDot)
const targetSlide = slides[targetIndex];

moveToSlide(track, currentSlide, targetSlide);
updateDots(currentDot, targetDot);
//move dots highlight
//currentDot.classList.remove('current-slide');
//targetDot.classList.add('current-slide');
//able to make this code better above with same function


hideShowArrows(slides, prevButton, nextButton, targetIndex);


})