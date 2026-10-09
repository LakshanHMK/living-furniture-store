# Luma Living — Modern Furniture E-Commerce Website

An elegant, responsive Scandinavian furniture e-commerce website built with semantic **HTML5**, modern **CSS3**, and **Vanilla JavaScript (ES6+)**.

Developed as a clean, modular, and student-friendly pair-programming project for a university web development demonstration.

---

## 🌿 Brand & Design Overview

* **Brand Concept:** Luma Living — Scandinavian minimalism, mindful ergonomics, and sustainable timber craftsmanship.
* **Palette:**
  * **Primary Brand Color:** Deep Forest Green (`#264734`, `#1b3526`)
  * **Accent Color:** Warm Brushed Gold (`#d8a84e`, `#c59539`)
  * **Backgrounds & Neutrals:** Warm Off-White (`#f9f8f5`) and Pure White (`#ffffff`)
* **Typography:** `Plus Jakarta Sans` with editorial `Playfair Display` serif accents.
* **Layouts:** CSS Flexbox and Grid with smooth mobile/tablet responsive behavior.

---

## 🚀 Key Features

1. **Homepage (`index.html`):**
   * Responsive navigation bar with active page indicator and dynamic cart item count badge.
   * Hero section with emerald sofa visual and certified craft guarantee badge.
   * 4-column Craftsmanship Showcase with direct Add-to-Cart action buttons.
   * Why Choose Us section featuring benefit icons (Free Shipping, Easy Shopping, 24/7 Support, Returns).
   * Modern Interior spatial design promotional section.
   * Interactive Customer Testimonials slider.
   * Design Journal / Blog preview grid.
   * Newsletter subscription interface with instant client-side validation.
   * Multi-column footer with customer care and social links.

2. **Shop Catalog (`shop.html`):**
   * Dynamic product rendering from a centralized JavaScript data module (`products.js`).
   * Category pill filters (All, Chairs & Stools, Sofas & Lounges, Tables, Lighting, Storage).
   * Real-time keyword search by product name and description.
   * Sorting options (Featured, Price: Low to High, Price: High to Low, Highest Rated).
   * Empty-state feedback when no search criteria match.

3. **Shopping Cart (`cart.html`):**
   * Persistent cart storage using browser `localStorage`.
   * Increase (`+`) and decrease (`-`) quantity controls.
   * Remove item functionality with confirmation.
   * Real-time calculation of subtotal, tiered shipping (Free on orders over $150), and total.
   * Helpful empty cart state with direct link back to the catalog.

4. **Demo Checkout (`checkout.html`):**
   * Customer details form with shipping address and payment simulation options.
   * Client-side input validation.
   * Blocks checkout submissions if the cart is empty.
   * Simulated Order Confirmation modal displaying order reference ID and details.
   * Prominent demonstration disclaimer confirming zero actual payment processing.

5. **About Us (`about.html`):**
   * Studio origin story, woodworking principles, and team spotlight.

6. **Services (`services.html`):**
   * 6 customer care benefit cards and virtual consultation booking CTA.

7. **Blog (`blog.html`):**
   * Featured editorial story and article cards on furniture maintenance and small-space living.

8. **Contact Us (`contact.html`):**
   * Studio locations, telephone numbers, support emails, and an interactive contact form with instant validation.

---

## 📁 Project Folder Structure

```text
Shop/
│
├── index.html                  # Homepage
├── shop.html                   # Product catalog with search and filters
├── about.html                  # Studio brand story and values
├── services.html               # Service benefit cards and care offerings
├── blog.html                   # Design journal articles
├── contact.html                # Contact details and interactive demo form
├── cart.html                   # Shopping cart table and order summary
├── checkout.html               # Demo checkout and order confirmation modal
│
├── css/
│   ├── base.css                # CSS reset, variables, color tokens, and typography
│   ├── components.css          # Navigation, buttons, cards, toasts, and footer
│   ├── style.css               # Homepage layouts and promotional sections
│   ├── shop.css                # Catalog, cart table, and checkout form styling
│   └── responsive.css          # Media queries for desktop, tablet, and mobile
│
├── js/
│   ├── products.js             # Centralized furniture inventory data
│   ├── cart.js                 # Shared cart state manager & localStorage helper
│   ├── cart-page.js            # Cart table rendering and quantity controls
│   ├── checkout.js             # Checkout form validation and confirmation modal
│   ├── contact.js              # Contact form validation and feedback
│   ├── shop.js                 # Catalog filter, search, and sort controller
│   └── main.js                 # Header scroll, mobile drawer, and slider interactions
│
├── assets/
│   └── images/                 # Curated, local high-resolution furniture photography
│
└── README.md                   # Project documentation
```

---

## 💻 How to Run Locally

You do not need Node.js, npm, or any build tools to run this website.

### Option 1: Direct Browser Opening
* Double-click `index.html` or right-click and choose **Open with > Google Chrome** (or your preferred web browser).

### Option 2: Using Python's Built-in Server
Open your terminal in the `Shop` folder and run:
```bash
python -m http.server 8080
```
Then visit [http://localhost:8080/](http://localhost:8080/) in your web browser.

### Option 3: Using VS Code Live Server
* Install the **Live Server** extension in VS Code / Antigravity.
* Right-click `index.html` and click **Open with Live Server**.

---

## 🌐 How to Deploy on GitHub Pages

This project uses relative file paths (`css/...`, `js/...`, `assets/images/...`), making it 100% compatible with static GitHub Pages hosting.

1. **Initialize Git & Commit:**
   ```bash
   git init
   git add .
   git commit -m "Initial release of Luma Living e-commerce store"
   ```
2. **Push to GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   * Go to your repository on GitHub.
   * Click **Settings** > **Pages** (under Code and automation).
   * Under **Branch**, select `main` and `/ (root)`.
   * Click **Save**.
   * Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

---

## 📸 Photography Sources & Licensing

All images are curated from Unsplash under the [Unsplash License](https://unsplash.com/license) (free for commercial and non-commercial use, no permission needed):

| File | Subject & Description | Source |
| :--- | :--- | :--- |
| `hero-sofa.jpg` | Minimalist Scandinavian lounge sofa in natural daylight | Unsplash (`photo-1550254478-ead40cc54513`) |
| `product-1.jpg` | Nordic Lounge Chair in solid natural oak | Unsplash (`photo-1592078615290-033ee584e267`) |
| `product-2.jpg` | Kruzo Aero Armchair with architectural curves | Unsplash (`photo-1586023492125-27b2c045efd7`) |
| `product-3.jpg` | Ergonomic Studio Stool with sculpted wooden contour | Unsplash (`photo-1503602642458-232111445657`) |
| `product-4.jpg` | Minimalist Oak Round Coffee Table | Unsplash (`photo-1532372320572-cda25653a26d`) |
| `product-5.jpg` | Velvet Deep-Seated Modular Sofa | Unsplash (`photo-1555041469-a586c61ea9bc`) |
| `product-6.jpg` | Ceramic Sculptural Table Lamp | Unsplash (`photo-1507473885765-e6ed057f782c`) |
| `product-7.jpg` | Walnut Tambour Media Credenza | Unsplash (`photo-1595428774223-ef52624120d2`) |
| `product-8.jpg` | Solid Beech Scandinavian Dining Table | Unsplash (`photo-1615066390971-03e4e1c36ddf`) |
| `why-choose-us.jpg` | Bright architectural room with natural oak furniture | Unsplash (`photo-1600210492486-724fe5c67fb0`) |
| `interior-1.jpg` | Modern Scandinavian open-plan living lounge | Unsplash (`photo-1618219908412-a29a1bb7b86e`) |
| `interior-2.jpg` | Curated wooden armchair architectural detail | Unsplash (`photo-1567538096630-e0c55bd6374c`) |
| `interior-3.jpg` | Dining area with warm pendant lighting | Unsplash (`photo-1513694203232-719a280e022f`) |
| `blog-1.jpg` | First-time homeowner living room interior styling | Unsplash (`photo-1524758631624-e2822e304c36`) |
| `blog-2.jpg` | Close-up of natural solid oak grains and wax care | Unsplash (`photo-1583847268964-b28dc8f51f92`) |
| `blog-3.jpg` | Small apartment living layout and natural flow | Unsplash (`photo-1484101403633-562f891dc89a`) |
| `avatar-1.jpg` | Customer testimonial portrait (Maria Jones) | Unsplash (`photo-1534528741775-53994a69daeb`) |
| `avatar-2.jpg` | Customer testimonial portrait (David Chen) | Unsplash (`photo-1507003211169-0a1dd7228f2d`) |
| `avatar-3.jpg` | Customer testimonial portrait (Sophia Larsson) | Unsplash (`photo-1517841905240-472988babdf9`) |

---

## 🎓 University Undergraduate Academic Compliance
* 100% Vanilla Web Technologies (HTML5, CSS3, ES6+ JS).
* Zero third-party runtime frameworks (No React, Angular, Vue, or Tailwind).
* Clear, self-explanatory function names and natural code comments suitable for viva explanations and demonstrations.
