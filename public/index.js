document.addEventListener('DOMContentLoaded', function () {
    const fetchButton = document.getElementById('fetch-product');
    const form = document.getElementById('editProductForm');
    const productIdField = document.getElementById('productId');

    fetchButton.addEventListener('click', function () {
        const productId = document.getElementById('search').value;
        fetch(`/edit/products/${productId}`)
            .then(response => response.json())
            .then(product => {
                // Set the form fields with the product data
                productIdField.value = product.id;
                form.category.value = product.category;
                form.name.value = product.name;
                form.price.value = product.price;
                form.description.value = product.description;
                form.imagePath.value = product.image;
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Product not found.');
            });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const productData = {
            category: form.category.value,
            name: form.name.value,
            price: form.price.value,
            description: form.description.value,
            image: form.imagePath.value
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
                alert('Product updated successfully!');
            });
    });
    //product
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
    //detail.html
    const addToCartButton = document.querySelector('.addToCart');
    const sizeSelector = document.getElementById('sizes');
    const quantityInput = document.getElementById('quantity-input');
    const decreaseButton = document.querySelector('.decrease');
    const increaseButton = document.querySelector('.increase');

    //CartId and ProductId are hard coded for the ONE details page example
    const cartId = 1;
    const productId = 2;

    decreaseButton.addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    increaseButton.addEventListener('click', () => {
        if (parseInt(quantityInput.value) < 100) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        }
    });

    addToCartButton.addEventListener('click', function () {
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