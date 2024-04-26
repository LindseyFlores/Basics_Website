document.addEventListener('DOMContentLoaded', function () {
    const fetchButton = document.getElementById('fetch-product');
    const productIdField = document.getElementById('productId');

    fetchButton.addEventListener('click', function () {
        const productId = document.getElementById('search').value;
        fetch(`/edit/products/${productId}`)
            .then(response => response.json())
            .then(product => {
                //form fields with the product data
                productIdField.value = product.id;
                document.getElementById('category').value = product.category;
                document.getElementById('name').value = product.name;
                document.getElementById('price').value = product.price;
                document.getElementById('description').value = product.description;
                document.getElementById('imagePath').value = product.imagePath || product.image; // depending on what key your backend uses
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Product not found.');
            });
    });

    document.getElementById('editProductForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const productData = {
            category: document.getElementById('category').value,
            name: document.getElementById('name').value,
            price: parseFloat(document.getElementById('price').value),
            description: document.getElementById('description').value,
            imagePath: document.getElementById('imagePath').value
        };

        fetch(`/edit/products/${productIdField.value}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData)
        })
            .then(response => response.json())
            .then(() => {
                alert('Product updated successfully!');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to update product.');
            });
    });
});

//THIS IS THE PRODUCT.HTML FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('category');
    const productsContainer = document.getElementById('products-container'); // Corrected ID

    categorySelect.addEventListener('change', function () {
        const category = this.value;
        fetch(`/products/category/${category}`)
            .then(response => response.json())
            .then(products => {
                updateProductsDisplay(products);
            })
            .catch(error => console.error('Error fetching products:', error));
    });

    function updateProductsDisplay(products) {
        // Clear previous products
        productsContainer.innerHTML = '';

        // Loop through each product and append to the container
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-box');
            productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p class="name">${product.name}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
        `;
            productsContainer.appendChild(productDiv);
        });
    }
});
//detail.html
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.addToCart');
    const sizeSelector = document.getElementById('sizes');
    const quantityInput = document.getElementById('quantity-button');
    const decreaseButton = document.querySelector('.decrease');
    const increaseButton = document.querySelector('.increase');

    //CartId and ProductId are hard coded for the ONE details page example
    const cartId = 1;
    const productId = 20;

    //functionality for increase/decrease amount of items in cart
    decreaseButton.addEventListener('quantity-button', () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    increaseButton.addEventListener('quantity-button', () => {
        if (parseInt(quantityInput.value) < 100) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        }
    });

    addToCartButton.addEventListener('button', function () {
        const selectedSize = sizeSelector.value;
        const quantity = parseInt(quantityInput.value);

        const data = {
            cartId: cartId,
            productId: productId,
            quantity: quantity,
            size: selectedSize
        };

        fetch('/cart/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Product added to cart!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to add product to cart.');
            });
    });
});
//cart.html 