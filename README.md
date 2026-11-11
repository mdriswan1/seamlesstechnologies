# Seamless Technologies — Website

A React + Vite site for Seamless Technologies (commercial induction cooking equipment),
with a Home, Products, About and Contact page, Bootstrap-based responsive layout, and
click-to-WhatsApp inquiry buttons on every product.

## 1. Install dependencies

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## 3. Before you deploy — edit your real details

Open `src/data/products.js` and update:

```js
export const WHATSAPP_NUMBER = "911234567890"; // your WhatsApp number, country code + number, no + or spaces
export const COMPANY = {
  ...
  email: "info@seamlesstech.example.com", // your real email
  phone: "+91 12345 67890",               // your real phone
};
```

## 4. Build for production

```bash
npm run build
```

This creates a `dist/` folder — upload that folder's contents to any static host
(Netlify, Vercel, Hostinger, GitHub Pages, cPanel, etc).

## Project structure

```
src/
  components/     Navbar, Footer, WhatsApp floating button, icons, scroll-reveal, scroll-to-top
  pages/           Home.jsx, Products.jsx, About.jsx, Contact.jsx
  data/products.js Company info, WhatsApp helper, and the full product catalog
  App.jsx          Route definitions
  main.jsx         App entry point
  index.css        Design system / global styles
```

## Editing the product catalog

All products live in `src/data/products.js` as a list of categories, each with a
`models` array. Add, remove, or edit a model and it updates the Products page and
its WhatsApp message automatically — no other file needs to change.
