const slides = document.querySelectorAll('.slide');
var currentSlide = 0;
slides.forEach((slide,index) => {
    slide.style.left =`${index*100}%`
})

const gonext = () => {
    if(currentSlide === slides.length-1) return;
    currentSlide++
    slideImage()
}
const goprev = () => {
    if(currentSlide ===0) return;
    currentSlide--
    slideImage()
}
const slideImage = () => {
    slides.forEach(
        (slide)=>{
        slide.style.transform = `translateX(-${currentSlide*100}%)`
    })
}