// Получение текущей даты
const currentDate = new Date();

// Получение текущего года
const currentYear = currentDate.getFullYear();

// Поиск элемента с классом ".date"
const dateElement = document.querySelector(".date");

// Установка значения текущего года в содержимое элемента
dateElement.textContent = currentYear;


// Добавляем обработчик событий для гамбургер меню
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
    const animationText = document.querySelector('.animated-text');
    const text = animationText.textContent.trim();
    let index = 0;

    animationText.textContent = '';


    function typeText() {
        animationText.textContent += text[index]
        index++

        index < text.length ? setTimeout(typeText, 30) : animationText.style.animation = 'pulseText 5s infinity'
    }
    typeText();
})


window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('body').classList.add('loaded');
    }, 100);
});

// callback modal

window.addEventListener('load', () => {
    setTimeout(() => {
        const modal = document.querySelector('#modal');
        modal.classList.add('modal-show');
    }, 20000);

    const closeButton = document.querySelector('#close');
    const modal = document.querySelector('#modal');

    closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        modal.classList.remove('modal-show');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('modal-show');
        }
    });
});




