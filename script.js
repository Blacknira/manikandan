function fetchProducts() {
  const productsDiv = document.getElementById('products');
  productsDiv.innerHTML = '<div id="loading">Loading...</div>';
  
  fetch('https://fakestoreapi.com/products/')
    .then(res => res.json()) 
    .then(data => {
      displayProducts(data); 
    })
    .catch(err => {
      console.error(err);
      productsDiv.innerHTML = '<div id="error">Failed to load data</div>';
    });
}

function displayProducts(data) {
  const productsDiv = document.getElementById('products');
  
  productsDiv.innerHTML = data.map(product => `
    <div class="card">
      <img src="${product.image}" alt="${product.title}">
      <div class="card-body">
        <h3 class="card-title">${truncate(product.title, 50)}</h3>
        <p class="card-price">$${product.price}</p>
        <p class="card-desc">${truncate(product.description, 60)}</p>
        <button class="btn" onclick="viewMore(${product.id})">View More</button>
      </div>
    </div>
  `).join('');
}

function truncate(text, max) {
  return text.length > max ? text.substring(0, max) + '...' : text;
}

function viewMore(id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(p => {
      alert(`Title: ${p.title}\n\nPrice: $${p.price}\n\nCategory: ${p.category}\n\nDescription: ${p.description}`);
    });
}

document.addEventListener('DOMContentLoaded', fetchProducts);