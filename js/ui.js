// js/ui.js - Customer Only Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cart Count Update
    updateCartCount();
    
    // 2. Check Customer Login Status
    checkCustomerLogin();
});

// Update Cart Count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countElement = document.getElementById('cartCount');
    
    if (countElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countElement.innerText = totalItems;
    }
}

// Check if Customer is Logged In
function checkCustomerLogin() {
    const customerName = localStorage.getItem('customerName');
    const userLink = document.getElementById('userLink');
    const userName = document.getElementById('userName');
    
    // If elements don't exist, exit
    if (!userName) return;
    
    if (customerName) {
        // User is logged in - Show Name & Logout Option
        userName.innerText = customerName.split(' ')[0]; // Show first name only
        userName.style.color = 'var(--primary)';
        userName.style.fontWeight = '600';
        
        if (userLink) {
            userLink.href = 'customer-orders.html'; // Click name to see orders
            userLink.onclick = function(e) {
                e.preventDefault();
                if(confirm('আপনি কি লগআউট করতে চান?')) {
                    logoutCustomer();
                }
            };
        }
    } else {
        // User is NOT logged in - Show Login Link
        userName.innerText = 'Login';
        userName.style.color = 'inherit';
        
        if (userLink) {
            userLink.href = 'customer-login.html';
            userLink.onclick = null;
        }
    }
}

// Customer Logout Function
function logoutCustomer() {
    localStorage.removeItem('customerLogin');
    localStorage.removeItem('customerName');
    localStorage.removeItem('customerEmail');
    localStorage.removeItem('customerPhone');
    localStorage.removeItem('customerAddress');
    
    alert('✅ আপনি সফলভাবে লগআউট করেছেন!');
    window.location.reload();
}