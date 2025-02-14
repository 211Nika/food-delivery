let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    let orderDetails = cart.map((entry) => `${entry.item} - $${entry.price}`).join("\n");
    document.getElementById('order').value = orderDetails;
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    if (name && address && cart.length > 0) {
        alert(`Thank you, ${name}! Your order will be delivered to ${address}.`);
        cart = [];  // Clear the cart after order is placed
        document.getElementById('order').value = '';
    } else {
        alert('Please fill in all fields and add items to your order.');
    }
});
