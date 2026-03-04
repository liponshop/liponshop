// js/products.js - FINAL FIXED VERSION
// LiponShop - Product Database

// ==============================
// ১. প্রোডাক্ট ডেটাবেস (localStorage থেকে লোড)
// ==============================

// ডিফল্ট প্রোডাক্টস
const defaultProducts = [
    {
        id: 1,
        name: "Premium Sunglass",
        price: 500,
        discount: 20,
        category: "Sunglass",
        img: "images/sunglass.jpg",
        isNew: false,
        isHot: true,
        stock: 15,
        rating: 4.5,
        reviews: 23
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        price: 1500,
        discount: 15,
        category: "Watch",
        img: "images/watch.jpg",
        isNew: true,
        isHot: true,
        stock: 8,
        rating: 4.8,
        reviews: 45
    },
    {
        id: 3,
        name: "Turmeric Powder 100g",
        price: 80,
        discount: 0,
        category: "Spices",
        img: "images/turmeric.jpg",
        isNew: false,
        isHot: false,
        stock: 5,
        rating: 4.2,
        reviews: 12
    },
    {
        id: 4,
        name: "Chili Powder 200g",
        price: 150,
        discount: 10,
        category: "Spices",
        img: "images/chili.jpg",
        isNew: false,
        isHot: true,
        stock: 30,
        rating: 4.6,
        reviews: 18
    },
    {
        id: 5,
        name: "Wireless Earbuds",
        price: 899,
        discount: 25,
        category: "Electronics",
        // ✅ স্পেস রিমুভ করা হয়েছে
        img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200",
        isNew: true,
        isHot: true,
        stock: 12,
        rating: 4.7,
        reviews: 56
    },
    {
        id: 6,
        name: "Classic Wall Clock",
        price: 450,
        discount: 0,
        category: "Home",
        // ✅ স্পেস রিমুভ করা হয়েছে
        img: "https://images.unsplash.com/photo-1563861826100-9cb868c72815?w=200",
        isNew: false,
        isHot: false,
        stock: 0,
        rating: 4.3,
        reviews: 8
    }
];

// ✅ localStorage থেকে লোড অথবা ডিফল্ট ব্যবহার (একবারই ডিক্লেয়ার)
let productsDB = JSON.parse(localStorage.getItem('products'));
if (!productsDB || productsDB.length === 0) {
    productsDB = defaultProducts;
    localStorage.setItem('products', JSON.stringify(productsDB));
}

// ==============================
// ২. প্রোডাক্ট লোড ফাংশন
// ==============================
function loadProducts(productList) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    productList = productList || productsDB;
    productGrid.innerHTML = "";
    
    if (productList.length === 0) {
        productGrid.innerHTML = "<p>No products found!</p>";
        return;
    }
    
    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Badges তৈরি
        let badgesHTML = '';
        if (product.discount && product.discount > 0) {
            badgesHTML += `<span class="badge discount">-${product.discount}%</span>`;
        }
        if (product.isNew) {
            badgesHTML += `<span class="badge new">NEW</span>`;
        }
        if (product.isHot) {
            badgesHTML += `<span class="badge hot">🔥 HOT</span>`;
        }
        if (product.stock < 10 && product.stock > 0) {
            badgesHTML += `<span class="badge limited">Limited Stock</span>`;
        }
        if (product.stock === 0) {
            badgesHTML += `<span class="badge out">Out of Stock</span>`;
        }

        // পুরো কার্ড HTML
       card.innerHTML = `
    <div class="product-image-wrapper">
        <img src="${product.img}" alt="${product.name}" class="product-img" 
             onerror="this.src='https://via.placeholder.com/220?text=No+Image  '">
        
        <!-- ✅ Wishlist Heart Button (নতুন যুক্ত করা হয়েছে) -->
        <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
            <i class="fas fa-heart"></i>
        </button>
        
        <!-- Badges -->
        <div class="product-badges">
            ${badgesHTML}
        </div>
                
                <!-- Share Buttons -->
                <div class="share-buttons">
                    <button class="share-btn facebook" onclick="shareProduct('facebook', ${product.id})">
                        <i class="fab fa-facebook-f"></i>
                    </button>
                    <button class="share-btn whatsapp" onclick="shareProduct('whatsapp', ${product.id})">
                        <i class="fab fa-whatsapp"></i>
                    </button>
                    <button class="share-btn copy" onclick="copyProductLink(${product.id})">
                        <i class="fas fa-link"></i>
                    </button>
                </div>
            </div>
            
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price-wrapper">
                    ${product.discount ? `<span class="old-price">৳${product.price}</span>` : ''}
                    <span class="product-price">৳${product.discount ? Math.round(product.price * (1 - product.discount/100)) : product.price}</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                    <i class="fas fa-cart-plus"></i> 
                    ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// ==============================
// ৩. কার্টে অ্যাড ফাংশন
// ==============================
function addToCart(productId) {
    const product = productsDB.find(p => p.id == productId);
    
    if (!product) {
        alert('Product not found!');
        return;
    }
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id == productId);
    
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
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    if (window.updateCartCount) {
        updateCartCount();
    }
    
    alert(product.name + ' added to cart!');
}

// ==============================
// ৪. সার্চ ফাংশন
// ==============================
function searchProduct() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        loadProducts(productsDB);
        return;
    }
    
    const filtered = productsDB.filter(p => 
        p.name.toLowerCase().includes(query)
    );
    
    loadProducts(filtered);
}

// ==============================
// ৫. ক্যাটাগরি ফিল্টার (✅ ফিক্সড)
// ==============================
function filterCategory(category) {
    // সব প্রোডাক্ট রিলোড (যাতে লেটেস্ট ডেটা আসে)
    productsDB = JSON.parse(localStorage.getItem('products')) || defaultProducts;
    
    let filtered = [];
    
    if (category === 'All' || category === 'all' || category === '') {
        // সব প্রোডাক্ট দেখাও
        filtered = productsDB;
    } else {
        // ক্যাটাগরি ফিল্টার (Case-insensitive matching)
        filtered = productsDB.filter(p => {
            const productCat = p.category ? p.category.trim() : '';
            const filterCat = category ? category.trim() : '';
            return productCat.toLowerCase() === filterCat.toLowerCase();
        });
    }
    
    // প্রোডাক্ট গ্রিড আপডেট
    loadProducts(filtered);
    
    // স্ক্রল করে প্রোডাক্ট সেকশনে নিয়ে যাবে
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Active category highlight (Optional)
    document.querySelectorAll('.cat-card').forEach(btn => {
        btn.classList.remove('active');
    });
    event?.target?.closest('.cat-card')?.classList.add('active');
}

// ==============================
// ৬. পেজ লোড হলে প্রোডাক্ট দেখাও
// ==============================
function initializeProducts() {
    const productGrid = document.getElementById('productGrid');
    if (productGrid && !window.productsInitialized) {
        window.productsInitialized = true;
        loadProducts();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProducts);
} else {
    initializeProducts();
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProduct();
            }
        });
    }
});

// ==============================
// SOCIAL SHARE FUNCTIONS (✅ ফিক্সড)
// ==============================

function shareProduct(platform, productId) {
    const product = productsDB.find(p => p.id === productId);
    const url = encodeURIComponent(window.location.href + '?product=' + productId);
    const text = encodeURIComponent(`Check out ${product.name} - Only ৳${product.price} at LiponShop!`);
    
    let shareUrl = '';
    
    // ✅ স্পেস রিমুভ করা হয়েছে সব URL থেকে
    if (platform === 'facebook') {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === 'whatsapp') {
        shareUrl = `https://wa.me/?text=${text}%20${url}`;
    } else if (platform === 'messenger') {
        shareUrl = `https://www.facebook.com/dialog/send?link=${url}&app_id=YOUR_APP_ID&redirect_uri=${encodeURIComponent(window.location.href)}`;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

function copyProductLink(productId) {
    const link = window.location.href + '?product=' + productId;
    navigator.clipboard.writeText(link).then(() => {
        alert('✅ Link copied to clipboard!');
    }).catch(() => {
        alert('❌ Failed to copy link');
    });
}

// ==============================
// WISHLIST FUNCTIONS (নতুন যুক্ত করা হলো)
// ==============================
function toggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const index = wishlist.indexOf(productId);
    
    if (index === -1) {
        // Add to wishlist
        wishlist.push(productId);
        alert('✅ প্রোডাক্ট উইশলিস্টে যুক্ত হয়েছে!');
    } else {
        // Remove from wishlist
        wishlist.splice(index, 1);
        alert('❌ উইশলিস্ট থেকে সরানো হয়েছে!');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    // Update UI if needed
    renderWishlistCount();
}

function renderWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const countElements = document.querySelectorAll('.wishlist-count');
    countElements.forEach(el => {
        el.innerText = wishlist.length;
    });
}

// ==============================
// SEARCH FUNCTIONALITY
// ==============================
function handleSearch() {
    const input = document.getElementById('searchInput');
    const btn = document.getElementById('searchBtn');
    
    if(input && btn) {
        btn.addEventListener('click', searchProduct);
        input.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') searchProduct();
        });
    }
}
// Initialize Search on Load
document.addEventListener('DOMContentLoaded', handleSearch);

// Smooth Scroll for Hero Buttons
document.addEventListener('DOMContentLoaded', function() {
    // View Categories Button
    document.querySelectorAll('a[href="#categories"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.getElementById('categories');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Shop Now Button
    document.querySelectorAll('a[href="#products"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.getElementById('products');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Language Change Function
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    
    if (lang === 'en') {
        // English
        document.documentElement.lang = 'en';
        // এখানে আপনার টেক্সট পরিবর্তন লজিক যুক্ত করুন
        alert('Language changed to English (Feature coming soon!)');
    } else {
        // বাংলা
        document.documentElement.lang = 'bn';
        alert('ভাষা পরিবর্তন করে বাংলা করা হয়েছে (Feature coming soon!)');
    }
    
    // LocalStorage এ সেভ করুন
    localStorage.setItem('selectedLanguage', lang);
}

// Page load এ ভাষা লোড করুন
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'bn';
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.value = savedLang;
    }
});