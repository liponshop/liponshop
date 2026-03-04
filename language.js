// ==============================
// LANGUAGE TRANSLATION SYSTEM
// ==============================

const translations = {
    bn: {
        // Top Bar
        'becomeSeller': 'বিক্রেতা হোন',
        'login': 'লগইন',
        'signUp': 'সাইন আপ',
        'cart': 'কার্ট',
        'wishlist': 'উইশলিস্ট',
        
        // Header
        'searchPlaceholder': 'প্রোডাক্ট খুঁজুন...',
        'searchButton': 'খুঁজুন',
        
        // Hero Section
        'bigSale': 'বড় সেল ৭০% পর্যন্ত ছাড়',
        'bestQuality': 'বাংলাদেশের সেরা দামে সেরা মানের পণ্য',
        'shopNow': 'এখনই কিনুন',
        'viewCategories': 'ক্যাটাগরি দেখুন',
        
        // Categories
        'shopByCategory': 'ক্যাটাগরি অনুযায়ী কিনুন',
        'all': 'সব',
        'sunglass': 'চশমা',
        'watch': 'ঘড়ি',
        'spices': 'মসলা',
        'electronics': 'ইলেকট্রনিক্স',
        'home': 'হোম',
        'frame': 'ফ্রেম',
        'opticalLens': 'চশমার লেন্স',
        
        // Products
        'featuredProducts': 'ফিচার্ড প্রোডাক্ট',
        'viewAll': 'সব দেখুন',
        'loadingProducts': 'প্রোডাক্ট লোড হচ্ছে...',
        'addToCart': 'কার্টে যোগ করুন',
        'outOfStock': 'স্টক শেষ',
        'quickView': 'দ্রুত দেখুন',
        
        // Features
        'freeDelivery': 'ফ্রি ডেলিভারি',
        'freeDeliveryText': '৳০০০ এর উপরে অর্ডারে',
        'securePayment': 'নিরাপদ পেমেন্ট',
        'securePaymentText': '১০০% নিরাপদ চেকআউট',
        'easyReturn': 'সহজ রিটার্ন',
        'easyReturnText': '৭ দিনের রিটার্ন পলিসি',
        'support': '২৪/৭ সাপোর্ট',
        'supportText': 'নিবেদিত সাপোর্ট',
        
        // Footer
        'footerText': 'বাংলাদেশে আপনার বিশ্বস্ত অনলাইন শপিং পার্টনার। সাশ্রয়ী দামে মানসম্মত পণ্য।',
        'quickLinks': 'দ্রুত লিংক',
        'shoppingCart': 'শপিং কার্ট',
        'myAccount': 'আমার অ্যাকাউন্ট',
        'trackOrder': 'অর্ডার ট্র্যাক করুন',
        'contactUs': 'যোগাযোগ',
        'copyright': '© ২০২৪ LiponShop. সর্বস্বত্ব সংরক্ষিত।',
        
        // Bottom Nav
        'bottomHome': 'হোম',
        'bottomMessage': 'মেসেজ',
        'bottomAccount': 'অ্যাকাউন্ট',
        'bottomCart': 'কার্ট',
        
        // Cart Page
        'yourCart': 'আপনার কার্ট',
        'backToShop': 'দোকানে ফিরে যান',
        'orderSummary': 'অর্ডার সারাংশ',
        'subtotal': 'সাবটোটাল',
        'deliveryCharge': 'ডেলিভারি চার্জ',
        'discount': 'ছাড়',
        'total': 'মোট',
        'proceedToCheckout': 'চেকআউট করুন',
        'continueShopping': 'কেনাকাটা চালিয়ে যান',
        'cartEmpty': 'আপনার কার্ট খালি',
        
        // Checkout Page
        'checkout': 'চেকআউট',
        'backToCart': 'কার্টে ফিরে যান',
        'guestCheckout': 'গেস্ট চেকআউট (অ্যাকাউন্ট ছাড়া অর্ডার করুন)',
        'customerInfo': 'গ্রাহকের তথ্য',
        'fullName': 'পূর্ণ নাম',
        'mobileNumber': 'মোবাইল নম্বর',
        'format': 'ফরম্যাট',
        'emailAddress': 'ইমেইল ঠিকানা',
        'deliveryAddress': 'ডেলিভারি ঠিকানা',
        'houseRoad': 'বাড়ি/রোড',
        'district': 'জেলা',
        'selectDistrict': 'জেলা নির্বাচন করুন',
        'thana': 'থানা/উপজেলা',
        'firstSelectDistrict': 'প্রথমে জেলা নির্বাচন করুন',
        'union': 'ইউনিয়ন/এলাকা',
        'firstSelectThana': 'প্রথমে থানা নির্বাচন করুন',
        'postalCode': 'পোস্টাল কোড',
        'deliveryOption': 'ডেলিভারি অপশন',
        'regularDelivery': 'রেগুলার ডেলিভারি',
        'expressDelivery': 'এক্সপ্রেস ডেলিভারি',
        'workingDays': 'কর্মদিবস',
        'trackingNotification': 'ডেলিভারি ম্যান ট্র্যাকিং (SMS/WhatsApp নোটিফিকেশন)',
        'orderConfirmation': 'অর্ডার কনফার্মেশন এবং ডেলিভারি আপডেট SMS/WhatsApp এ পাবেন',
        'couponCode': 'কুপন কোড',
        'apply': 'প্রয়োগ করুন',
        'customization': 'চশমার কাস্টমাইজেশন',
        'uploadPrescription': 'চোখের প্রেসক্রিপশন আপলোড করুন',
        'frameSize': 'ফ্রেম সাইজ নির্বাচন করুন',
        'lensType': 'লেন্স টাইপ নির্বাচন করুন',
        'addons': 'অ্যাড-অন অপশন',
        'paymentMethod': 'পেমেন্ট পদ্ধতি',
        'cashOnDelivery': 'ক্যাশ অন ডেলিভারি',
        'sendTo': 'পাঠান এই নম্বরে',
        'accountType': 'অ্যাকাউন্ট টাইপ',
        'personal': 'পার্সোনাল',
        'reference': 'রেফারেন্স',
        'transactionId': 'ট্রানজেকশন আইডি',
        'orderNote': 'অর্ডার নোট',
        'optional': 'ঐচ্ছিক',
        'orderSummary': 'অর্ডার সারাংশ',
        'insideGaibandha': 'গাইবান্ধার ভেতরে ৳১০০০ এর উপরে অর্ডারে ফ্রি ডেলিভারি',
        'placeOrder': 'অর্ডার করুন',
        'orderOnWhatsApp': 'WhatsApp এ অর্ডার করুন',
        'secureCheckout': 'নিরাপদ চেকআউট',
        'daysReturn': 'দিনের রিটার্ন',
        'orderSuccess': '🎉 অর্ডার সফলভাবে সম্পন্ন হয়েছে!',
        'thankYou': 'LiponShop এ কেনাকাটা করার জন্য ধন্যবাদ',
        'orderId': 'অর্ডার আইডি',
        'weWillCall': 'আপনার অর্ডার কনফার্ম করতে আমরা শীঘ্রই কল করব।',
        'trackingSent': 'SMS/WhatsApp এ ট্র্যাকিং লিংক পাঠানো হয়েছে।',
        'continueShopping': 'কেনাকাটা চালিয়ে যান',
        'trackOrder': 'অর্ডার ট্র্যাক করুন',
        
        // Side Menu
        'guestUser': 'গেস্ট ইউজার',
        'loginToView': 'লগইন করে প্রোফাইল দেখুন',
        'home': 'হোম',
        'allCategories': 'সব ক্যাটাগরি',
        'allProducts': 'সব প্রোডাক্ট',
        'myCart': 'আমার কার্ট',
        'myWishlist': 'উইশলিস্ট',
        'myOrders': 'আমার অর্ডার',
        'pdGuide': 'চোখের মাপ গাইড (PD)',
        'logout': 'লগআউট',
        
        // Messages
        'addedToWishlist': '✅ Wishlist এ যুক্ত হয়েছে!',
        'removedFromWishlist': '❌ Wishlist থেকে সরানো হয়েছে!',
        'wishlistEmpty': 'Wishlist খালি!',
        'addToCartSuccess': '✅ কার্টে যোগ হয়েছে!',
        'confirmLogout': 'আপনি কি লগআউট করতে চান?',
        'logoutSuccess': '✅ লগআউট সফল হয়েছে!'
    },
    en: {
        // Top Bar
        'becomeSeller': 'Become a Seller',
        'login': 'Login',
        'signUp': 'Sign Up',
        'cart': 'Cart',
        'wishlist': 'Wishlist',
        
        // Header
        'searchPlaceholder': 'Search products...',
        'searchButton': 'Search',
        
        // Hero Section
        'bigSale': 'Big Sale Up to 70% OFF',
        'bestQuality': 'Best Quality Products at Best Price in Bangladesh',
        'shopNow': 'Shop Now',
        'viewCategories': 'View Categories',
        
        // Categories
        'shopByCategory': 'Shop by Category',
        'all': 'All',
        'sunglass': 'Sunglass',
        'watch': 'Watch',
        'spices': 'Spices',
        'electronics': 'Electronics',
        'home': 'Home',
        'frame': 'Frame',
        'opticalLens': 'Optical Lens',
        
        // Products
        'featuredProducts': 'Featured Products',
        'viewAll': 'View All',
        'loadingProducts': 'Loading products...',
        'addToCart': 'Add to Cart',
        'outOfStock': 'Out of Stock',
        'quickView': 'Quick View',
        
        // Features
        'freeDelivery': 'Free Delivery',
        'freeDeliveryText': 'On orders over ৳1000',
        'securePayment': 'Secure Payment',
        'securePaymentText': '100% Secure Checkout',
        'easyReturn': 'Easy Return',
        'easyReturnText': '7 Days Return Policy',
        'support': '24/7 Support',
        'supportText': 'Dedicated Support',
        
        // Footer
        'footerText': 'Your trusted online shopping partner in Bangladesh. Quality products at affordable prices.',
        'quickLinks': 'Quick Links',
        'shoppingCart': 'Shopping Cart',
        'myAccount': 'My Account',
        'trackOrder': 'Track Order',
        'contactUs': 'Contact Us',
        'copyright': '© 2024 LiponShop. All Rights Reserved.',
        
        // Bottom Nav
        'bottomHome': 'Home',
        'bottomMessage': 'Message',
        'bottomAccount': 'Account',
        'bottomCart': 'Cart',
        
        // Cart Page
        'yourCart': 'Your Shopping Cart',
        'backToShop': 'Back to Shop',
        'orderSummary': 'Order Summary',
        'subtotal': 'Subtotal',
        'deliveryCharge': 'Delivery Charge',
        'discount': 'Discount',
        'total': 'Total',
        'proceedToCheckout': 'Proceed to Checkout',
        'continueShopping': 'Continue Shopping',
        'cartEmpty': 'Your cart is empty',
        
        // Checkout Page
        'checkout': 'Checkout',
        'backToCart': 'Back to Cart',
        'guestCheckout': 'Guest Checkout (Order without account)',
        'customerInfo': 'Customer Information',
        'fullName': 'Full Name',
        'mobileNumber': 'Mobile Number',
        'format': 'Format',
        'emailAddress': 'Email Address',
        'deliveryAddress': 'Delivery Address',
        'houseRoad': 'House/Road',
        'district': 'District',
        'selectDistrict': 'Select District',
        'thana': 'Thana/Upazila',
        'firstSelectDistrict': 'First select district',
        'union': 'Union/Area',
        'firstSelectThana': 'First select thana',
        'postalCode': 'Postal Code',
        'deliveryOption': 'Delivery Option',
        'regularDelivery': 'Regular Delivery',
        'expressDelivery': 'Express Delivery',
        'workingDays': 'Working Days',
        'trackingNotification': 'Delivery Man Tracking (SMS/WhatsApp Notification)',
        'orderConfirmation': 'You will receive order confirmation and delivery updates via SMS/WhatsApp',
        'couponCode': 'Coupon Code',
        'apply': 'Apply',
        'customization': 'Glasses Customization',
        'uploadPrescription': 'Upload Eye Prescription',
        'frameSize': 'Select Frame Size',
        'lensType': 'Select Lens Type',
        'addons': 'Add-on Options',
        'paymentMethod': 'Payment Method',
        'cashOnDelivery': 'Cash on Delivery',
        'sendTo': 'Send to',
        'accountType': 'Account Type',
        'personal': 'Personal',
        'reference': 'Reference',
        'transactionId': 'Transaction ID',
        'orderNote': 'Order Note',
        'optional': 'Optional',
        'orderSummary': 'Order Summary',
        'insideGaibandha': 'Free delivery on orders over ৳1000 inside Gaibandha',
        'placeOrder': 'Place Order',
        'orderOnWhatsApp': 'Order on WhatsApp',
        'secureCheckout': 'Secure Checkout',
        'daysReturn': 'Days Return',
        'orderSuccess': '🎉 Order completed successfully!',
        'thankYou': 'Thank you for shopping with LiponShop',
        'orderId': 'Order ID',
        'weWillCall': 'We will call you shortly to confirm your order.',
        'trackingSent': 'Tracking link sent via SMS/WhatsApp.',
        'continueShopping': 'Continue Shopping',
        'trackOrder': 'Track Order',
        
        // Side Menu
        'guestUser': 'Guest User',
        'loginToView': 'Login to view profile',
        'home': 'Home',
        'allCategories': 'All Categories',
        'allProducts': 'All Products',
        'myCart': 'My Cart',
        'myWishlist': 'Wishlist',
        'myOrders': 'My Orders',
        'pdGuide': 'Eye Measurement Guide (PD)',
        'logout': 'Logout',
        
        // Messages
        'addedToWishlist': '✅ Added to Wishlist!',
        'removedFromWishlist': '❌ Removed from Wishlist!',
        'wishlistEmpty': 'Wishlist is empty!',
        'addToCartSuccess': '✅ Added to cart!',
        'confirmLogout': 'Are you sure you want to logout?',
        'logoutSuccess': '✅ Logout successful!'
    }
};

// Apply translations to page
function applyTranslations(lang) {
    const t = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' && el.type === 'text') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
    
    // Update language selector
    const langSelector = document.getElementById('languageSelector');
    if (langSelector) {
        langSelector.value = lang;
    }
    
    // Save to localStorage
    localStorage.setItem('siteLanguage', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Get saved language or default to 'bn'
    const savedLang = localStorage.getItem('siteLanguage') || 'bn';
    applyTranslations(savedLang);
    
    // Add event listener to language selector
    const langSelector = document.getElementById('languageSelector');
    if (langSelector) {
        langSelector.addEventListener('change', function(e) {
            applyTranslations(e.target.value);
        });
    }
});

// Function to change language (can be called from anywhere)
function changeLanguage(lang) {
    applyTranslations(lang);
}