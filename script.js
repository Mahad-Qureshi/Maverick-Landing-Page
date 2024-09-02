const visibleSlides = 5;
const slideWidth = 100 / visibleSlides;
let currentIndex = 0;


function setupLooping() {
    const slider = document.querySelector('.slider');
    const slides = Array.from(slider.children);

   
    const firstSlide = slides[0].cloneNode(true);
    const lastSlide = slides[slides.length - 1].cloneNode(true);

    slider.appendChild(firstSlide); 
    slider.insertBefore(lastSlide, slides[0]); 

    
    slider.style.transform = `translateX(-${slideWidth}%)`;
    currentIndex = 1; 
}

function moveSlide(step) {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slider img').length;
    const maxIndex = totalSlides - visibleSlides - 1; 

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    if (currentIndex === 0 || currentIndex > maxIndex) {
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = `translateX(-${slideWidth}%)`;
        }, 500);

        currentIndex = step > 0 ? 1 : maxIndex;
        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease-in-out'; 
            slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        }, 10); 
    } else {
        slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }
}


setupLooping();


document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));




// Testimonial Start

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Testimonial End
