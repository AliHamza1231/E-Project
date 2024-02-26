const nextBtn = document.querySelector('.next-btn');
const pervBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;


nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber =0;
    }
    slides[slideNumber].classList.add('active');
}


pervBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber--;

    if (slideNumber < 0 ) {
        slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add('active');
}

const toggleBtn = document.querySelector('.toggle-btn')
        const toggleBtnIcon = document.querySelector('.toggle-btn i')
        const dropDownMenu = document.querySelector('.dropdown-menu')

        toggleBtn.onclick = function() {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars' 
            
        }