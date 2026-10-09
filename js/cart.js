/* ==========================================================================
   Luma Living — Cart Manager & LocalStorage Persistence
   ========================================================================== */

const CART_STORAGE_KEY = 'luma_living_cart';

const CartManager = {
  getCart() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error loading cart:', e);
      return [];
    }
  },

  saveCart(cart) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      this.updateBadge();
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart }));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  },

  addItem(productId, qty = 1) {
    const products = window.PRODUCTS || [];
    const product = products.find(p => p.id === Number(productId));
    if (!product) return;

    const cart = this.getCart();
    const existingIndex = cart.findIndex(item => item.id === Number(productId));

    if (existingIndex > -1) {
      cart[existingIndex].quantity += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: qty
      });
    }

    this.saveCart(cart);
    this.showToast(`Added "${product.name}" to cart!`);
  },

  removeItem(productId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== Number(productId));
    this.saveCart(cart);
  },

  updateQuantity(productId, newQty) {
    let cart = this.getCart();
    const item = cart.find(i => i.id === Number(productId));
    if (item) {
      if (newQty <= 0) {
        this.removeItem(productId);
        return;
      }
      item.quantity = newQty;
      this.saveCart(cart);
    }
  },

  clearCart() {
    this.saveCart([]);
  },

  getTotalCount() {
    const cart = this.getCart();
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  },

  getSubtotal() {
    const cart = this.getCart();
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  },

  updateBadge() {
    const count = this.getTotalCount();
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
      badge.classList.add('pop');
      setTimeout(() => badge.classList.remove('pop'), 300);
    });
  },

  showToast(message, iconSvg) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div class="toast-text">${message}</div>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  CartManager.updateBadge();

  // Global delegation for add to cart buttons
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add-to-cart]');
    if (addBtn) {
      e.preventDefault();
      const productId = addBtn.getAttribute('data-add-to-cart');
      CartManager.addItem(productId, 1);
    }
  });
});

if (typeof window !== 'undefined') {
  window.CartManager = CartManager;
}
