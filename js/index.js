

// getdata start
fetch("../API/product.json")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("latestProduct");
        const productDiv = data.products.map(p => {
            return `
                <div class="product-card">
            <img src="${p.image}">
            <div class="product-info">     
            <h2>${p.name}</h2>
            <p>${p.subtitle}</p>
            <p class="price">${p.price}$</p>
            </div>
        </div>
        `;
        });
        console.log(productDiv);

        container.innerHTML = productDiv.join("");
    })
    .catch(error => console.error("Error json", error));

// getdata end


//carousel start

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-icon');
const prevBtn = document.querySelector('.previous-icon');
let currentIndex = 0;

function showSlide(newIndex) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[newIndex].classList.add('active');
    currentIndex = newIndex;
}

nextBtn.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
});

prevBtn.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
});

showSlide(currentIndex);

//carousel end

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        padding: '100px',
        pagination: false,
    });
    splide.mount();
});
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.logo-splide', {
        type: 'loop',
        perPage: 2,
        gap: '20px',
        arrows: false,
        padding: { left: '20px', right: '20px' },
    });
    splide.mount();
});


const menuBtn = document.getElementById("menuToggle");
const menu = document.querySelector(".link ul");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});
