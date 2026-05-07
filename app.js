/*const API = 'https://fakestoreapi.com/products/';
const grid = document.getElementById('product-grid');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const sortSelect = document.getElementById('sort');
const cartCount = document.getElementById('cart-count');
const modal = document.getElementById('modal');
const modalDetails = document.getElementById('modal-details');
const modalClose = document.querySelector('.modal-close');

let productsData = [];
let cart;
try{
    cart = JSON.parse(localStorage.getItem('fakeStoreCart')) || [];
} catch (e) {
    cart = [];
}

updateCartBadge();

// 1. API Integration with fetch
fetch(API)
    .then(res => {
        if (!res.ok) throw new Error('API request failed');
        return res.json();
    })
    .then(data => {
        productsData = data;
        setCategories(data);
        displayProducts(data);
    })
    .catch(err => {
        console.error(err);
        grid.innerHTML = '<div id="error">Failed to load data</div>';
    });

// 2. Separate function for rendering - avoids logic in .then()
function displayProducts(data) {
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = '<div id="error">No products found</div>';
        return;
    }

    data.forEach(product => {
        // Truncate title to 50 chars
        const title = product.title.length > 50 
            ? product.title.slice(0, 50) + '...' 
            : product.title;
        
        // Truncate description to 60 chars
        const description = product.description.length > 60 
            ? product.description.slice(0, 60) + '...' 
            : product.description;

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="card-body">
                <div class="card-category">${product.category}</div>
                <h3 class="card-title">${title}</h3>
                <p class="card-price">$${product.price.toFixed(2)}</p>
                <p class="card-desc">${description}</p>
                <div class="card-actions">
                    <button class="btn btn-details">View Details</button>
                    <button class="btn btn-cart">Add to Cart</button>
                </div>
            </div>
        `;
        grid.appendChild(card);

        const detailsBtn = card.querySelector('.btn-details');
        detailsBtn.addEventListener('click', () => viewDetails(product.id));
        const cartBtn = card.querySelector('.btn-cart');
        cartBtn.addEventListener('click', () => addToCart(product.id));
    });
}

// Bonus: Category Filter setup
function setCategories(products) {
    const categories = [...new Set(products.map(p => p.category))];
    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        categorySelect.appendChild(opt);
    });
}

// View More Button - shows modal with full details
function viewDetails(id) {
    const product = productsData.find(p => p.id === id);
    const ratingText = product.rating
        ? `${product.rating.rate} ★ (${product.rating.count} reviews)`
        : 'No ratings';
    modalDetails.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="modal-img">
        <h2>${product.title}</h2>
        <p class="card-category">${product.category}</p>
        <p class="card-price">$${product.price.toFixed(2)}</p>
        <p><strong>Rating:</strong> ${ratingText}</p>
        <p style="margin-top: 12px; line-height: 1.5;">${product.description}</p>
        <button class="btn btn-cart" style="width: 100%; margin-top: 16px;" onclick="addToCart(${product.id}); closeModal();">
            Add to Cart
        </button>
    `;
    modal.style.display = 'flex';
}

// Bonus: Add to Cart using localStorage
function addToCart(id) {
    const product = productsData.find(p => p.id === id);
    const itemInCart = cart.find(item => item.id === id);
    
    if (itemInCart) {
        itemInCart.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    localStorage.setItem('fakeStoreCart', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalQty;
}

// Intermediate: Search Functionality - real-time filter
// Bonus: Category + Sort
function applyFilters() {
    let filtered = [...productsData];

    // Search
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(query));
    }

    // Category
    const cat = categorySelect.value;
    if (cat) {
        filtered = filtered.filter(p => p.category === cat);
    }

    // Sort
    const sort = sortSelect.value;
    if (sort === 'asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

// Event Listeners
searchInput.addEventListener('input', applyFilters);
categorySelect.addEventListener('change', applyFilters);
sortSelect.addEventListener('change', applyFilters);
if(modalClose){
    modalClose.addEventListener('click', closeModal);
}
modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
});

function closeModal() {
    modal.style.display = 'none';
}*/





const API = 'https://fakestoreapi.com/products/';
const grid = document.getElementById('product-grid');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const sortSelect = document.getElementById('sort');
const cartCount = document.getElementById('cart-count');
const modal = document.getElementById('modal');
const modalDetails = document.getElementById('modal-details');
const modalClose = document.querySelector('.modal-close');

let productsData = [];
let cart = JSON.parse(localStorage.getItem('fakeStoreCart')) || [];

updateCartBadge();

// 1. API Integration with fetch
fetch(API)
    .then(res => {
        if (!res.ok) throw new Error('API request failed');
        return res.json();
    })
    .then(data => {
        productsData = data;
        setCategories(data);
        displayProducts(data);
    })
    .catch(err => {
        console.error(err);
        grid.innerHTML = '<div id="error">Failed to load data</div>';
    });

// 2. Separate function for rendering - avoids logic in .then()
function displayProducts(data) {
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = '<div id="error">No products found</div>';
        return;
    }

    data.forEach(product => {
        // Truncate title to 50 chars
        const title = product.title.length > 50 
            ? product.title.slice(0, 50) + '...' 
            : product.title;
        
        // Truncate description to 60 chars
        const description = product.description.length > 60 
            ? product.description.slice(0, 60) + '...' 
            : product.description;

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="card-body">
                <div class="card-category">${product.category}</div>
                <h3 class="card-title">${title}</h3>
                <p class="card-price">$${product.price.toFixed(2)}</p>
                <p class="card-desc">${description}</p>
                <div class="card-actions">
                    <button class="btn btn-details" onclick="viewDetails(${product.id})">View More</button>
                    <button class="btn btn-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Bonus: Category Filter setup
function setCategories(products) {
    const categories = [...new Set(products.map(p => p.category))];
    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        categorySelect.appendChild(opt);
    });
}

// View More Button - shows modal with full details
function viewDetails(id) {
    const product = productsData.find(p => p.id === id);
    modalDetails.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="modal-img">
        <h2>${product.title}</h2>
        <p class="card-category">${product.category}</p>
        <p class="card-price">$${product.price.toFixed(2)}</p>
        <p><strong>Rating:</strong> ${product.rating.rate} ★ (${product.rating.count} reviews)</p>
        <p style="margin-top: 12px; line-height: 1.5;">${product.description}</p>
        <button class="btn btn-cart" style="width: 100%; margin-top: 16px;" onclick="addToCart(${product.id}); closeModal();">
            Add to Cart
        </button>
    `;
    modal.style.display = 'flex';
}

// Bonus: Add to Cart using localStorage
function addToCart(id) {
    const product = productsData.find(p => p.id === id);
    const itemInCart = cart.find(item => item.id === id);
    
    if (itemInCart) {
        itemInCart.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    localStorage.setItem('fakeStoreCart', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalQty;
}

// Intermediate: Search Functionality - real-time filter
// Bonus: Category + Sort
function applyFilters() {
    let filtered = [...productsData];

    // Search
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(query));
    }

    // Category
    const cat = categorySelect.value;
    if (cat) {
        filtered = filtered.filter(p => p.category === cat);
    }

    // Sort
    const sort = sortSelect.value;
    if (sort === 'asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

// Event Listeners
searchInput.addEventListener('input', applyFilters);
categorySelect.addEventListener('change', applyFilters);
sortSelect.addEventListener('change', applyFilters);

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
});

function closeModal() {
    modal.style.display = 'none';
}