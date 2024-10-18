// Slider functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 5000);

// Cart functionality
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let itemsInCart = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        itemsInCart++;
        cartCount.textContent = itemsInCart;
        button.textContent = 'Added to Cart';
        button.disabled = true;
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.disabled = false;
        }, 2000);
    });
});

// Search functionality (basic)
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
    alert(`Searching for: ${searchInput.value}`);
    searchInput.value = '';
});

// You can add more JavaScript for additional interactivity