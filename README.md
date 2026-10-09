# Luma Living

Luma Living is a responsive furniture e-commerce demo built with HTML5, CSS3, and Vanilla JavaScript. It presents a Scandinavian-inspired catalog and demonstrates common storefront interactions entirely in the browser.

## Technologies Used

- HTML5
- CSS3, including Flexbox, Grid, and responsive media queries
- Vanilla JavaScript
- Browser `localStorage` for cart persistence

## Features

- Responsive homepage with featured products, testimonials, and editorial content
- Product catalog with category filters, search, and sorting
- Shopping cart with quantity controls, item removal, and calculated totals
- Cart persistence using `localStorage`
- Demo checkout with client-side validation and order confirmation
- About, services, blog, and contact pages
- Mobile navigation and layouts for desktop, tablet, and mobile screens

The checkout and contact experiences are demonstrations. No payments are processed and no form data is sent to a server.

## Project Folder Structure

```text
Shop/
|-- index.html
|-- shop.html
|-- about.html
|-- services.html
|-- blog.html
|-- contact.html
|-- cart.html
|-- checkout.html
|-- css/
|   |-- base.css
|   |-- components.css
|   |-- responsive.css
|   |-- shop.css
|   `-- style.css
|-- js/
|   |-- cart-page.js
|   |-- cart.js
|   |-- checkout.js
|   |-- contact.js
|   |-- main.js
|   |-- products.js
|   `-- shop.js
|-- assets/
|   `-- images/
|-- .gitignore
`-- README.md
```

## How to Run Locally

No package installation or build step is required.

Open `index.html` directly in a web browser, or serve the project folder with a simple local server:

```bash
python -m http.server 8080
```

Then open [http://localhost:8080/](http://localhost:8080/).

## Demo Functionality

Product, cart, checkout, and form interactions run entirely in the browser. Cart data remains available between pages and browser sessions through `localStorage`. Clearing the site's browser storage resets the cart.

## GitHub Pages Deployment

Repository: [github.com/LakshanHMK/living-furniture-store](https://github.com/LakshanHMK/living-furniture-store)

The project is designed to be published from the `main` branch and repository root. Once GitHub Pages deployment is enabled and verified, the site will be available at:

[https://lakshanhmk.github.io/living-furniture-store/](https://lakshanhmk.github.io/living-furniture-store/)

## Image Notice

The demonstration photography was sourced from Unsplash. Rights remain with the respective photographers and content owners.
