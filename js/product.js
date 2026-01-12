const menuBtn = document.getElementById("menuToggle");
const menu = document.querySelector(".layout-menu");
function checkActive() {
    if (menu.classList.contains("active")) {
        document.body.classList.add("no-scroll");
    }
    else {
        document.body.classList.remove("no-scroll")
    }
}

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    checkActive()

});


const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const arrow = btn.querySelector('.arrow');

        const isOpen = content.style.display === 'flex';

        content.style.display = isOpen ? 'none' : 'flex';
        arrow.classList.toggle('open', !isOpen);
    });
});

// getdata start

const orderId = document.getElementById("orderId").value;
const input = document.getElementById("orderId");
fetch("../API/product.json")
    .then(res => res.json())
    .then(data => {
        function renderProduct() {
            const orderId = Number(input.value);
            const product = data.products.find(p => p.id === Number(orderId));
            if (!product) return;

            document.querySelector(".primary-product-img").innerHTML = `<img src="${product.image}" alt="${product.name}">`
            document.querySelector(".user-dirction").innerHTML = `<p><span>HOME</span> / <span>TRAYS</span> / <span>${product.name}</span></p>`
            const title = document.querySelector(".product-title");

            title.querySelectorAll("h4, h5").forEach(el => el.remove());

            document.querySelector(".product-title").insertAdjacentHTML("afterbegin", `<h4>${product.name}</h4>
                <h5>$${product.price}</h5>`);
            document.querySelector("#productDimensions").innerHTML = `    <h5>Material: <span>${product.material}</span></h5>
                <h5>Dimensions: <span>${product.dimensions}</span></h5>
                <h5>Finish: <span>${product.finish}</span></h5>`
            document.querySelector("#productDetails").innerHTML = `<p>${product.Details}</p>`
        }
        renderProduct()
        input.addEventListener("input", renderProduct)
    })
    .catch(error => console.error("Error json", error));

// getdata end