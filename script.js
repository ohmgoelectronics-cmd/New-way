// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --------------------
// PRODUCTS ARRAY
// --------------------
const products = [
    {
        name: "Arduino UNO",
        price: "₹750",
        img: "images/arduino.jpg"
    },
    {
        name: "DHT11 Temperature Sensor",
        price: "₹120",
        img: "images/dht11.jpg"
    },
    {
        name: "LED (Red/Green/Blue)",
        price: "₹10 each",
        img: "images/led.jpg"
    }
    // Add more products here
];

// --------------------
// DISPLAY PRODUCTS
// --------------------
const productGrid = document.getElementById('product-grid');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <a href="https://wa.me/919347532390?text=Hello%20OhmGo%20I%20want%20to%20order%20${encodeURIComponent(product.name)}" class="btn-order">Order on WhatsApp</a>
    `;
    productGrid.appendChild(card);
});
