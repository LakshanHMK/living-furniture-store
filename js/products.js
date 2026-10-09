/* ==========================================================================
   Luma Living — Product Catalog Data
   ========================================================================== */

const PRODUCTS = [
  {
    id: 1,
    name: "Nordic Lounge Chair",
    category: "chairs",
    price: 180.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewsCount: 128,
    image: "assets/images/product-1.jpg",
    badge: "Bestseller",
    description: "Crafted from solid oak with ergonomically sculpted backrest and organic linen cushions.",
    inStock: true
  },
  {
    id: 2,
    name: "Kruzo Aero Armchair",
    category: "chairs",
    price: 240.00,
    originalPrice: 285.00,
    rating: 4.8,
    reviewsCount: 94,
    image: "assets/images/product-2.jpg",
    badge: "Popular",
    description: "Architectural silhouette with soft high-density cushioning and brushed brass feet.",
    inStock: true
  },
  {
    id: 3,
    name: "Ergonomic Studio Stool",
    category: "chairs",
    price: 145.00,
    originalPrice: 165.00,
    rating: 4.7,
    reviewsCount: 76,
    image: "assets/images/product-3.jpg",
    badge: "Eco-Craft",
    description: "Sculptural wooden contour providing natural lumbar alignment for work and living.",
    inStock: true
  },
  {
    id: 4,
    name: "Minimalist Oak Coffee Table",
    category: "tables",
    price: 320.00,
    originalPrice: 380.00,
    rating: 5.0,
    reviewsCount: 112,
    image: "assets/images/product-4.jpg",
    badge: "New",
    description: "Low-profile Scandinavian coffee table with rounded edges and soft natural oil finish.",
    inStock: true
  },
  {
    id: 5,
    name: "Velvet Modular Sofa",
    category: "sofas",
    price: 890.00,
    originalPrice: 980.00,
    rating: 4.9,
    reviewsCount: 205,
    image: "assets/images/product-5.jpg",
    badge: "Featured",
    description: "Deep-seated lounge modular couch wrapped in premium stain-resistant forest velvet.",
    inStock: true
  },
  {
    id: 6,
    name: "Ceramic Sculptural Lamp",
    category: "lighting",
    price: 110.00,
    originalPrice: 135.00,
    rating: 4.6,
    reviewsCount: 58,
    image: "assets/images/product-6.jpg",
    badge: "Handmade",
    description: "Artisan-turned stoneware base paired with a warm woven linen drum diffuser.",
    inStock: true
  },
  {
    id: 7,
    name: "Walnut Media Credenza",
    category: "storage",
    price: 540.00,
    originalPrice: 620.00,
    rating: 4.9,
    reviewsCount: 84,
    image: "assets/images/product-7.jpg",
    badge: "Premium",
    description: "Slatted tambour door sideboard with cable management and soft-close brass hinges.",
    inStock: true
  },
  {
    id: 8,
    name: "Scandinavian Dining Table",
    category: "tables",
    price: 680.00,
    originalPrice: 750.00,
    rating: 4.8,
    reviewsCount: 91,
    image: "assets/images/product-8.jpg",
    badge: "Family Pick",
    description: "Seats 6-8 comfortably, engineered from durable European beech and solid joinery.",
    inStock: true
  }
];

if (typeof window !== 'undefined') {
  window.PRODUCTS = PRODUCTS;
}
if (typeof global !== 'undefined') {
  global.PRODUCTS = PRODUCTS;
}
