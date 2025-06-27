
let kartochki = document.querySelector('.kartochki');
let korzinka = document.querySelector('.korzinka');
let totalPrice = document.querySelector('.totalPrice');

let total = 0;

fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())
    .then(data => {
        kartochki.innerHTML = '';
        data.forEach(product => {
            let card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${product.image}" class="img">
                <h2 class="title">${product.title}</h2>
                <p class="price">${product.price} $</p>
                <button class="btn" onclick="addToCart('${product.title}', ${product.price})">Купить</button>
            `;
            kartochki.appendChild(card);
        });
    });

function addToCart(title, price) {
    total += price;

    const item = document.createElement('div');
    item.className = 'product';
    item.innerHTML = `
        <p>🛒 ${title}  ${price.toFixed(2)} $</p>
    `;
    korzinka.appendChild(item);

    totalPrice.textContent = `💰 Total: ${total.toFixed(2)} $`;
}
