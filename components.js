/* ==============================
   COMMON NAVIGATION FUNCTIONS
   (Daraz-Style - Use across all pages)
   ============================== */

// Toggle Side Menu
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('menuOverlay');
    if (menu && overlay) {
        menu.classList.toggle('show');
        overlay.classList.toggle('show');
    }
}

// Update Account Info in Menu & Header
function updateAccountInfo() {
    const customerName = localStorage.getItem('customerName');
    const customerEmail = localStorage.getItem('customerEmail');
    
    // Menu User Info
    const menuUserName = document.getElementById('menuUserName');
    const menuUserEmail = document.getElementById('menuUserEmail');
    const menuLoginLink = document.getElementById('menuLoginLink');
    
    // Header Account Button
    const accountBtn = document.getElementById('accountBtn');
    const accountText = document.getElementById('accountText');
    
    // Nav Account
    const navAccount = document.getElementById('navAccount');
    
    if (customerName) {
        // User is logged in
        if (menuUserName) menuUserName.textContent = customerName;
        if (menuUserEmail) menuUserEmail.textContent = customerEmail || 'Customer';
        if (accountText) accountText.textContent = customerName.split(' ')[0];
        
        if (menuLoginLink) {
            menuLoginLink.innerHTML = '<i class="fas fa-sign-out-alt"></i><span>Logout</span>';
            menuLoginLink.href = '#';
            menuLoginLink.onclick = function(e) {
                e.preventDefault();
                if(confirm('আপনি কি লগআউট করতে চান?')) {
                    localStorage.removeItem('customerLogin');
                    localStorage.removeItem('customerName');
                    localStorage.removeItem('customerEmail');
                    alert('✅ লগআউট সফল হয়েছে!');
                    location.reload();
                }
            };
        }
        
        if (accountBtn) {
            accountBtn.href = 'customer-orders.html';
        }
        
        if (navAccount) {
            navAccount.href = 'customer-orders.html';
        }
    } else {
        // User is NOT logged in
        if (menuUserName) menuUserName.textContent = 'Guest User';
        if (menuUserEmail) menuUserEmail.textContent = 'Login to view profile';
        if (accountText) accountText.textContent = 'Account';
        
        if (menuLoginLink) {
            menuLoginLink.innerHTML = '<i class="fas fa-sign-in-alt"></i><span>Login</span>';
            menuLoginLink.href = 'customer-login.html';
            menuLoginLink.onclick = null;
        }
        
        if (accountBtn) {
            accountBtn.href = 'customer-login.html';
        }
        
        if (navAccount) {
            navAccount.href = 'customer-login.html';
        }
    }
}

// Update Cart Count (Header & Bottom Nav)
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const headerCartCount = document.getElementById('headerCartCount');
    const bottomCartCount = document.getElementById('bottomCartCount');
    
    if (headerCartCount) headerCartCount.textContent = count;
    if (bottomCartCount) bottomCartCount.textContent = count;
}

// Set Active Nav Item
function setActiveNavItem() {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPath = window.location.pathname.split('/').pop();
    
    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href === currentPath || (href === 'index.html' && (currentPath === '' || currentPath === 'index.html'))) {
            item.classList.add('active');
        }
    });
}

// Initialize Common Components
function initCommonComponents() {
    updateAccountInfo();
    updateCartCount();
    setActiveNavItem();
}

// Run on page load
document.addEventListener('DOMContentLoaded', initCommonComponents);

// Update Cart Count in Side Menu
function updateSideMenuCounts() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const sideMenuCartCount = document.getElementById('sideMenuCartCount');
    if (sideMenuCartCount) {
        sideMenuCartCount.textContent = cartCount;
    }
    
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const sideMenuWishlistCount = document.getElementById('sideMenuWishlistCount');
    if (sideMenuWishlistCount) {
        sideMenuWishlistCount.textContent = wishlist.length;
    }
}

// Call this function in initCommonComponents
function initCommonComponents() {
    updateAccountInfo();
    updateCartCount();
    updateSideMenuCounts();
    setActiveNavItem();
}

// Toggle Submenu Function
function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    const parentItem = submenu.previousElementSibling;
    
    if (submenu && parentItem) {
        // Toggle display
        if (submenu.style.display === 'none' || submenu.style.display === '') {
            submenu.style.display = 'block';
            parentItem.classList.add('active');
        } else {
            submenu.style.display = 'none';
            parentItem.classList.remove('active');
        }
    }
}