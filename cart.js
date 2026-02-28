// js/cart.js

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    const countElement = document.getElementById("cartCount");
    if (countElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countElement.innerText = totalItems;
    }
}

function addToCart(productId) {
    
    const productsDB = JSON.parse(localStorage.getItem("products")) || [];
    const product = productsDB.find(p => p.id === productId);
    
    if (!product) {
        alert("Product not found!");
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: 1
        });
    }


    saveCart();
    updateCartCount();
    alert(product.name + " added to cart!");
}


function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    loadCartPage();
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCartPage() {
    const cartGrid = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    
    if (!cartGrid) return;

    cartGrid.innerHTML = "";
    
    if (cart.length === 0) {
        cartGrid.innerHTML = "<p>Your cart is empty!</p>";
        if (cartTotal) cartTotal.innerText = "৳0";
        return;
    }

    cart.forEach(item => {
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <img src="${item.img}" width="50">
            <span>${item.name}</span>
            <span>৳${item.price} x ${item.quantity}</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartGrid.appendChild(row);
    });

    if (cartTotal) {
        cartTotal.innerText = "৳" + getCartTotal();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    loadCartPage();
});


function processOrderWithCommission(orderTotal) {
    const referrer = localStorage.getItem('currentReferrer');
    
    if (referrer) {
        const COMMISSION_RATE = 0.10;
        const commission = orderTotal * COMMISSION_RATE;
        
        const currentProfit = parseFloat(localStorage.getItem("resellerProfit")) || 0;
        const newProfit = currentProfit + commission;
        
        localStorage.setItem("resellerProfit", newProfit.toFixed(2));
        
        const logs = JSON.parse(localStorage.getItem("commissionLogs")) || [];
        logs.push({
            resellerId: referrer,
            amount: commission.toFixed(2),
            orderId: 'ORD-' + Date.now(),
            date: new Date().toISOString()
        });
        localStorage.setItem("commissionLogs", JSON.stringify(logs));
        
        console.log(`✅ Commission ৳${commission.toFixed(2)} added to ${referrer}`);
        
        localStorage.removeItem('currentReferrer');
        localStorage.removeItem('refProduct');
        
        return true;
    }
    return false;
}