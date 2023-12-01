const slides = document.querySelectorAll(".slide"); 
var counter = 0 ; 
slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index*100}%`
    }
)

const goPre = () =>{
    if (counter == 0) {
        counter = slides.length - 1;
        slideImg();
    } else {
        counter--;
        slideImg();
    }
}
 
const goNext = () =>{
    if (counter == slides.length - 1) {
        counter = 0;
        slideImg();
    } else {
        counter++;
        slideImg();
    }
}

const slideImg = () =>{
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}