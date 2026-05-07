// ===== Abayologs Shared App Logic =====

const DEFAULT_PRODUCTS = [
  {id:'p1',name:'Facebook Aged Account',category:'Facebook',price:3500,stock:25,icon:'📘',desc:'Verified, aged 1+ year. Email access included.'},
  {id:'p2',name:'TikTok Creator Account',category:'TikTok',price:5000,stock:12,icon:'🎵',desc:'1K+ followers, ready to monetize.'},
  {id:'p3',name:'Instagram Aged Account',category:'Instagram',price:4500,stock:18,icon:'📸',desc:'Aged Instagram account with email.'},
  {id:'p4',name:'WhatsApp Number (NG)',category:'WhatsApp Numbers',price:2000,stock:50,icon:'💬',desc:'Fresh Nigerian WA-ready number.'},
  {id:'p5',name:'Netflix Premium 1 Month',category:'Other',price:3000,stock:30,icon:'🎬',desc:'Premium 4K shared profile.'},
  {id:'p6',name:'Premium VPN 1 Year',category:'VPN',price:6500,stock:40,icon:'🔒',desc:'Unlimited bandwidth, all locations.'},
  {id:'p7',name:'WhatsApp Number (US)',category:'WhatsApp Numbers',price:3500,stock:22,icon:'💬',desc:'US-based number for WhatsApp.'},
  {id:'p8',name:'Instagram 5K Followers',category:'Instagram',price:7000,stock:8,icon:'📸',desc:'Aged with 5K real-looking followers.'},
  {id:'p9',name:'TikTok Bot Views Pack',category:'TikTok',price:1500,stock:100,icon:'🎵',desc:'10K views to any TikTok video.'},
];

const Store = {
  get products(){
    let p = JSON.parse(localStorage.getItem('ab_products')||'null');
    if(!p){p = DEFAULT_PRODUCTS;localStorage.setItem('ab_products',JSON.stringify(p));}
    return p;
  },
  set products(v){localStorage.setItem('ab_products',JSON.stringify(v));},
  get orders(){return JSON.parse(localStorage.getItem('ab_orders')||'[]');},
  set orders(v){localStorage.setItem('ab_orders',JSON.stringify(v));},
  saveOrder(o){const all=this.orders;all.push(o);this.orders=all;},
  updateOrder(id,patch){this.orders=this.orders.map(o=>o.id===id?{...o,...patch}:o);},
};

// Theme
function initTheme(){
  const saved = localStorage.getItem('ab_theme')||'light';
  document.documentElement.setAttribute('data-theme',saved);
  updateThemeIcon();
}
function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',next);
  localStorage.setItem('ab_theme',next);
  updateThemeIcon();
}
function updateThemeIcon(){
  const btn=document.getElementById('themeToggle');
  if(!btn) return;
  const dark=document.documentElement.getAttribute('data-theme')==='dark';
  btn.innerHTML = dark?'☀️':'🌙';
}

// Toast
function toast(msg){
  let t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t);}
  t.textContent=msg;t.classList.add('show');
  clearTimeout(window._tt);window._tt=setTimeout(()=>t.classList.remove('show'),2200);
}

// Mobile nav
function toggleMenu(){document.getElementById('navLinks')?.classList.toggle('open');}

// Render shared navbar
function renderNav(active){
  return `
  <nav class="nav">
    <div class="nav-inner">
      <a href="index.html" class="logo"><span class="logo-dot"></span> Abayologs</a>
      <div class="nav-links" id="navLinks">
        <a href="index.html" class="${active==='home'?'active':''}">Home</a>
        <a href="products.html" class="${active==='products'?'active':''}">Products</a>
        <a href="status.html" class="${active==='status'?'active':''}">Order Status</a>
        <a href="admin.html" class="${active==='admin'?'active':''}">Admin</a>
      </div>
      <div class="nav-actions">
        <button class="icon-btn" id="themeToggle" onclick="toggleTheme()" aria-label="Toggle theme">🌙</button>
        <button class="icon-btn hamburger" onclick="toggleMenu()" aria-label="Menu">☰</button>
      </div>
    </div>
  </nav>`;
}
function renderFooter(){
  return `<footer>
    <div>© ${new Date().getFullYear()} Abayologs · Premium Social Media Tools & Accounts</div>
    <div style="margin-top:6px;font-size:.85rem">Contact: support@abayologs.com · WhatsApp: +234 800 000 0000</div>
  </footer>`;
}
function mountChrome(active){
  document.getElementById('nav-mount').innerHTML = renderNav(active);
  document.getElementById('footer-mount').innerHTML = renderFooter();
  initTheme();
}

// Helpers
const ngn = n => '₦'+Number(n).toLocaleString('en-NG');
function genRef(){
  const all = Store.orders;
  const n = String(all.length+1).padStart(3,'0');
  return `AB-${new Date().getFullYear()}-${n}`;
}
function genCreds(productName){
  const u = 'user'+Math.floor(1000+Math.random()*9000)+'@mail.com';
  const p = Math.random().toString(36).slice(2,10)+'!A';
  return `Product: ${productName}\nLogin: ${u}\nPassword: ${p}\nNote: Use mobile data for first login.`;
}

window.Abayologs = {Store,toast,mountChrome,toggleTheme,toggleMenu,ngn,genRef,genCreds};
