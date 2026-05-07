Abayologs — Premium Social Media Tools & Accounts
===================================================

A static demo storefront (HTML + CSS + JavaScript) using LocalStorage as a
simulated database. No build step, no dependencies.

FILES
-----
  index.html      Home / hero / featured products
  products.html   Full product list with search + category filters
  checkout.html   Order form + simulated payment polling
  success.html    Delivered credentials + confetti, copy / download
  status.html     Lookup an order by ID or email
  admin.html      Admin panel (orders, products, sales, manual overrides)
  styles.css      Design system (light + dark, glassmorphism, animations)
  app.js          Shared logic, theme toggle, store, helpers

SETUP
-----
1. Unzip the folder anywhere.
2. Open index.html directly in a browser, OR serve locally:
       npx serve .
       # or
       python3 -m http.server 8080
3. Visit the site and try a purchase end-to-end.

ADMIN LOGIN
-----------
  URL:      admin.html
  Username: admin
  Password: admin123

The admin panel can:
  - View dashboard sales (today / week / total) and low-stock alerts
  - Mark orders as Paid and Resend delivery credentials
  - Add / Edit / Delete products
  - Reset orders or restore default products

NOTES
-----
- All data is stored locally in your browser via LocalStorage. Clearing the
  browser data resets the store. Two different browsers won't share data.
- Payment is simulated. The "I have paid" button (or a manual "Mark Paid"
  in the admin) instantly delivers fake credentials.
- Theme preference is remembered across pages.
- This is a frontend-only template; for a real production marketplace you
  must add a backend, real payment gateway integration (e.g. OPay/PalmPay
  virtual accounts), authentication, and inventory persistence.
