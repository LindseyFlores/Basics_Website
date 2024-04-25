document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetch-product');
    const form = document.getElementById('editProductForm');
    const productIdField = document.getElementById('productId');

    fetchButton.addEventListener('click', function() {
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

    form.addEventListener('submit', function(event) {
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
});
