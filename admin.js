
document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode
    const darkSwitch = document.getElementById('darkSwitch');
    const modeText = document.getElementById('modeText');
    
    if (localStorage.getItem('darkMode') === 'on') {
        document.body.classList.add('dark');
        if (darkSwitch) darkSwitch.checked = true;
        if (modeText) modeText.innerText = '🌙 Dark';
    }

    if (darkSwitch) {
        darkSwitch.addEventListener('change', function() {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem('darkMode', isDark ? 'on' : 'off');
            if (modeText) modeText.innerText = isDark ? '🌙 Dark' : '🌞 Light';
        });
    }


    loadDashboardStats();
});

function loadDashboardStats() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const totalProductsEl = document.getElementById('totalProducts');
    if (totalProductsEl) totalProductsEl.innerText = products.length;

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const totalOrdersEl = document.getElementById('totalOrders');
    const totalRevenueEl = document.getElementById('totalRevenue');
    
    if (totalOrdersEl) totalOrdersEl.innerText = orders.length;
    
    if (totalRevenueEl) {
        const revenue = orders.reduce((sum, order) => sum + order.total, 0);
        totalRevenueEl.innerText = '৳' + revenue;
    }

    const ordersTable = document.getElementById('ordersTable');
    if (ordersTable && orders.length > 0) {
        ordersTable.innerHTML = '';
        orders.slice(-5).reverse().forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>#${order.id}</td>
                <td>${order.customer}</td>
                <td>৳${order.total}</td>
                <td><span class="status-badge status-${order.status}">${order.status}</span></td>
                <td><button onclick="viewOrder(${order.id})">View</button></td>
            `;
            ordersTable.appendChild(row);
        });
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
    
        window.location.href = 'admin-login.html';
    }
}

function viewOrder(orderId) {
    alert('Viewing order #' + orderId);
}