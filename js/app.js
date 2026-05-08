/* ========================================
   Abayologs - Main JavaScript
   Dark/Light Mode | Products | Admin Functions
   ======================================== */

// ========== Theme Management ==========
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('theme-switch').innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    const themeBtn = document.getElementById('theme-switch');
    if (themeBtn) {
        themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// ========== Product Data (All 27 Products) ==========
const products = [
    // VoIP Accounts
    { id: 1, name: "Google Voice Account", category: "voip", price: "₦5,000", image: "https://placehold.co/400x300/10b981/white?text=Google+Voice", badge: "Hot", stock: 50, description: "Verified USA Google Voice account, ready to use." },
    { id: 2, name: "TextPlus Account", category: "voip", price: "₦3,500", image: "https://placehold.co/400x300/10b981/white?text=TextPlus", badge: "New", stock: 30, description: "TextPlus number for verification." },
    { id: 3, name: "Talkatone Account", category: "voip", price: "₦4,000", image: "https://placehold.co/400x300/10b981/white?text=Talkatone", badge: "", stock: 25, description: "Talkatone WiFi calling number." },
    
    // VPN Services
    { id: 4, name: "ExpressVPN (1 Month)", category: "vpn", price: "₦6,000", image: "https://placehold.co/400x300/10b981/white?text=ExpressVPN", badge: "Premium", stock: 100, description: "World's fastest VPN." },
    { id: 5, name: "NordVPN (1 Month)", category: "vpn", price: "₦5,500", image: "https://placehold.co/400x300/10b981/white?text=NordVPN", badge: "", stock: 100, description: "NordVPN - Security and privacy." },
    { id: 6, name: "Surfshark VPN (1 Month)", category: "vpn", price: "₦5,000", image: "https://placehold.co/400x300/10b981/white?text=Surfshark", badge: "", stock: 100, description: "Unlimited devices." },
    { id: 7, name: "PIA VPN (1 Month)", category: "vpn", price: "₦4,500", image: "https://placehold.co/400x300/10b981/white?text=PIA", badge: "", stock: 100, description: "Private Internet Access." },
    { id: 8, name: "IPVanish VPN (1 Month)", category: "vpn", price: "₦5,000", image: "https://placehold.co/400x300/10b981/white?text=IPVanish", badge: "", stock: 100, description: "IPVanish VPN." },
    { id: 9, name: "HMA VPN (1 Month)", category: "vpn", price: "₦4,500", image: "https://placehold.co/400x300/10b981/white?text=HMA", badge: "", stock: 100, description: "HideMyAss VPN." },
    
    // Social Media Accounts
    { id: 10, name: "TikTok Account (USA)", category: "social", price: "₦4,000", image: "https://placehold.co/400x300/10b981/white?text=TikTok", badge: "Trending", stock: 45, description: "USA TikTok account, aged." },
    { id: 11, name: "Twitter Account (USA)", category: "social", price: "₦3,500", image: "https://placehold.co/400x300/10b981/white?text=Twitter", badge: "", stock: 40, description: "Twitter/X account." },
    { id: 12, name: "Dating Facebook Account", category: "social", price: "₦4,500", image: "https://placehold.co/400x300/10b981/white?text=Dating+FB", badge: "Hot", stock: 25, description: "Facebook account with dating profile." },
    { id: 13, name: "USA Facebook Account", category: "social", price: "₦3,500", image: "https://placehold.co/400x300/10b981/white?text=USA+Facebook", badge: "", stock: 60, description: "Real USA Facebook account." },
    { id: 14, name: "USA Instagram Account", category: "social", price: "₦4,000", image: "https://placehold.co/400x300/10b981/white?text=USA+Instagram", badge: "", stock: 35, description: "Instagram account with followers." },
    
    // Phone Numbers
    { id: 15, name: "USA WhatsApp Number", category: "numbers", price: "₦2,500", image: "https://placehold.co/400x300/10b981/white?text=WhatsApp+USA", badge: "Popular", stock: 80, description: "USA number for WhatsApp." },
    { id: 16, name: "UK WhatsApp Number", category: "numbers", price: "₦2,500", image: "https://placehold.co/400x300/10b981/white?text=WhatsApp+UK", badge: "", stock: 70, description: "UK number for WhatsApp." },
    { id: 17, name: "Telegram Number (USA)", category: "numbers", price: "₦2,000", image: "https://placehold.co/400x300/10b981/white?text=Telegram", badge: "", stock: 90, description: "Number for Telegram verification." },
    { id: 18, name: "Signal Number (USA)", category: "numbers", price: "₦2,000", image: "https://placehold.co/400x300/10b981/white?text=Signal", badge: "", stock: 85, description: "Number for Signal." },
    { id: 19, name: "All Countries Number", category: "numbers", price: "₦3,000", image: "https://placehold.co/400x300/10b981/white?text=Global+Number", badge: "", stock: 200, description: "Number from any country." },
    { id: 20, name: "USA Number (General)", category: "numbers", price: "₦1,500", image: "https://placehold.co/400x300/10b981/white?text=USA+Number", badge: "", stock: 150, description: "General USA number." },
    
    // Streaming
    { id: 21, name: "Netflix Premium HD", category: "streaming", price: "₦7,000", image: "https://placehold.co/400x300/10b981/white?text=Netflix", badge: "Premium", stock: 30, description: "Netflix Premium HD account 1 month." },
    
    // Services
    { id: 22, name: "Video Editing Service", category: "services", price: "₦10,000+", image: "https://placehold.co/400x300/10b981/white?text=Video+Editing", badge: "Pro", stock: 999, description: "Professional video editing per project." },
    { id: 23, name: "Voice Editing Service", category: "services", price: "₦8,000+", image: "https://placehold.co/400x300/10b981/white?text=Voice+Editing", badge: "", stock: 999, description: "Voice over editing." },
    { id: 24, name: "Truck Updates", category: "services", price: "₦15,000", image: "https://placehold.co/400x300/10b981/white?text=Truck+Updates", badge: "", stock: 999, description: "Truck software updates." },
    
    // Other
    { id: 25, name: "Facebook Switch Profile", category: "other", price: "₦2,000", image: "https://placehold.co/400x300/10b981/white?text=FB+Switch", badge: "", stock: 100, description: "Facebook profile switcher tool." },
    { id: 26, name: "Working Pictures/Profiles", category: "other", price: "₦1,500", image: "https://placehold.co/400x300/10b981/white?text=Profiles", badge: "", stock: 200, description: "Ready to use profile pictures." }
];

// Categories
const categories = [
    { name: "All", icon: "fa-grid", count: products.length },
    { name: "VoIP Accounts", icon: "fa-phone", count: products.filter(p => p.category === "voip").length, key: "voip" },
    { name: "VPN Services", icon: "fa-shield", count: products.filter(p => p.category === "vpn").length, key: "vpn" },
    { name: "Social Media", icon: "fa-hashtag", count: products.filter(p => p.category === "social").length, key: "social" },
    { name: "Phone Numbers", icon: "fa-mobile-alt", count: products.filter(p => p.category === "numbers").length, key: "numbers" },
    { name: "Streaming", icon: "fa-film", count: products.filter(p => p.category === "streaming").length, key: "streaming" },
    { name: "Services", icon: "fa-cogs", count: products.filter(p => p.category === "services").length, key: "services" },
    { name: "Other", icon: "fa-ellipsis-h", count: products.filter(p => p.category === "other").length, key: "other" }
];

// Featured products (first 6)
const featuredProducts = products.slice(0, 6);

// ========== Render Products ==========
function renderProducts(productsToShow, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (productsToShow.length === 0) {
        container.innerHTML = '<div class="no-results">No products found <i class="fas fa-frown"></i></div>';
        return;
    }
    
    container.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<div class="product-badge">🔥 ${product.badge}</div>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <div class="product-price">${product.price}</div>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin: 0.5rem 0;">${product.description.substring(0, 60)}...</p>
            <button class="btn-primary" style="width: 100%; margin-top: 1rem;" onclick="contactForProduct('${product.name}')">
                <i class="fab fa-whatsapp"></i> Contact to Buy
            </button>
        </div>
    `).join('');
}

function renderCategories() {
    const container = document.getElementById('categories-grid');
    if (!container) return;
    
    container.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat.key || 'all'}')">
            <i class="fas ${cat.icon}"></i>
            <h3>${cat.name}</h3>
            <p>${cat.count} products</p>
        </div>
    `).join('');
}

// ========== Contact for Product ==========
function contactForProduct(productName) {
    const message = encodeURIComponent(`Hello! I'm interested in buying: ${productName}. Please let me know payment details.`);
    window.open(`https://wa.me/2341234567890?text=${message}`, '_blank');
    
    // Show toast
    showToast("Opening WhatsApp...");
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ========== Filter Products (for products page) ==========
let currentFilter = 'all';
let searchQuery = '';

function filterByCategory(categoryKey) {
    currentFilter = categoryKey;
    updateProductDisplay();
}

function searchProducts(query) {
    searchQuery = query.toLowerCase();
    updateProductDisplay();
}

function updateProductDisplay() {
    let filtered = [...products];
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }
    
    if (searchQuery) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery) || 
                                         p.description.toLowerCase().includes(searchQuery));
    }
    
    renderProducts(filtered, 'all-products');
}

// ========== Admin Functions ==========
function initAdmin() {
    // Check if admin is logged in
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    if (!isLoggedIn && window.location.pathname.includes('admin/')) {
        if (!window.location.pathname.includes('login.html')) {
            window.location.href = 'login.html';
        }
    }
}

function adminLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;
    
    if (username === 'admin' && password === 'Abayologs2024') {
        sessionStorage.setItem('adminLoggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid login credentials');
    }
}

function adminLogout() {
    sessionStorage.removeItem('adminLoggedIn');
    window.location.href = 'login.html';
}

// Load products into admin table
function loadAdminProducts() {
    const tbody = document.getElementById('products-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = products.map(product => `
        <tr>
            <td>${product.id}</td>
            <td><img src="${product.image}" width="40" height="40" style="border-radius: 8px;"></td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td>${product.stock}</td>
            <td>
                <button class="btn-primary" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;" onclick="editProduct(${product.id})">Edit</button>
                <button class="btn-outline" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

// Add product (with image upload)
function addProduct(event) {
    event.preventDefault();
    const name = document.getElementById('product-name')?.value;
    const price = document.getElementById('product-price')?.value;
    const category = document.getElementById('product-category')?.value;
    const description = document.getElementById('product-description')?.value;
    const imageFile = document.getElementById('product-image')?.files[0];
    
    // In a real app, you'd upload the image to a server
    // For demo, we'll use a placeholder and store in localStorage
    
    const newProduct = {
        id: products.length + 1,
        name,
        price,
        category,
        description,
        image: imageFile ? URL.createObjectURL(imageFile) : "https://placehold.co/400x300/10b981/white?text=New",
        stock: 50,
        badge: ""
    };
    
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    loadAdminProducts();
    alert('Product added successfully!');
    document.getElementById('add-product-form')?.reset();
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        // Populate edit form (simplified for demo)
        document.getElementById('edit-name').value = product.name;
        document.getElementById('edit-price').value = product.price;
        document.getElementById('edit-category').value = product.category;
        document.getElementById('edit-description').value = product.description;
        document.getElementById('edit-id').value = product.id;
    }
}

function saveProductEdit(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById('edit-id')?.value);
    const productIndex = products.findIndex(p => p.id === id);
    
    if (productIndex !== -1) {
        products[productIndex].name = document.getElementById('edit-name').value;
        products[productIndex].price = document.getElementById('edit-price').value;
        products[productIndex].category = document.getElementById('edit-category').value;
        products[productIndex].description = document.getElementById('edit-description').value;
        
        loadAdminProducts();
        alert('Product updated!');
    }
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products.splice(index, 1);
            loadAdminProducts();
            alert('Product deleted!');
        }
    }
}

// Bulk upload Facebook accounts (CSV or text area)
function uploadAccounts() {
    const accountsText = document.getElementById('accounts-list')?.value;
    if (!accountsText) return;
    
    const lines = accountsText.split('\n');
    const accounts = [];
    
    lines.forEach(line => {
        const [email, password] = line.split(',');
        if (email && password) {
            accounts.push({ email: email.trim(), password: password.trim(), sold: false });
        }
    });
    
    localStorage.setItem('facebookAccounts', JSON.stringify(accounts));
    alert(`${accounts.length} Facebook accounts uploaded successfully!`);
    document.getElementById('accounts-list').value = '';
    displayAccountCount();
}

function displayAccountCount() {
    const accounts = JSON.parse(localStorage.getItem('facebookAccounts') || '[]');
    const available = accounts.filter(a => !a.sold).length;
    const countSpan = document.getElementById('account-count');
    if (countSpan) countSpan.textContent = available;
}

// ========== Initialize Page ==========
document.addEventListener('DOMContentLoaded', () => {
    // Theme
    initTheme();
    const themeBtn = document.getElementById('theme-switch');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    
    // Mobile menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Homepage
    renderCategories();
    renderProducts(featuredProducts, 'featured-products');
    
    // Products page
    if (document.getElementById('all-products')) {
        renderProducts(products, 'all-products');
        
        // Setup search
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => searchProducts(e.target.value));
        }
    }
    
    // Admin
    if (window.location.pathname.includes('admin/')) {
        initAdmin();
        if (document.getElementById('products-table-body')) {
            loadAdminProducts();
        }
        if (document.getElementById('account-count')) {
            displayAccountCount();
        }
        
        // Form submissions
        const addForm = document.getElementById('add-product-form');
        if (addForm) addForm.addEventListener('submit', addProduct);
        
        const editForm = document.getElementById('edit-product-form');
        if (editForm) editForm.addEventListener('submit', saveProductEdit);
        
        const uploadBtn = document.getElementById('upload-accounts-btn');
        if (uploadBtn) uploadBtn.addEventListener('click', uploadAccounts);
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! We will get back to you shortly.');
            contactForm.reset();
        });
    }
});