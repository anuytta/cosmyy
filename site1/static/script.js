const images = document.querySelectorAll('.zoom-image');

images.forEach(image => {
    // Додаємо подію при наведенні миші
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.03)'; // Зменшити приближення до 5%
    });

    // Додаємо подію при відведенні миші
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)'; // Відновлення до початкового розміру
    });

});
document.addEventListener('DOMContentLoaded', () => {
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

// Функція для зміщення зображень
function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= images.length - 3) { // Зменшено на 3, щоб показувати 4 фото
        currentIndex = 0; // Повернення до початку
    }
    const offset = currentIndex * -25; // Розрахунок зміщення
    track.style.transform = `translateX(${offset}%)`;
}

// Зміна зображення кожні 3 секунди
setInterval(moveToNextSlide, 3000); })


// Отримуємо всі кнопки "Додати в кошик"
const buttons = document.querySelectorAll('.add-to-cart-button');
