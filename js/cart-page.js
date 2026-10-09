/* ==========================================================================
   Luma Living — Cart Page Controller
   Simple student-friendly script for rendering and managing the cart table
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});

function renderCart() {
  const container = document.getElementById('cartContent');
  if (!container) return;

  const cart = CartManager.getCart();

  // If cart is empty, show empty state message
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="shop-empty-state" style="padding: 60px 20px;">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h3 style="margin-top: 16px;">Your cart is currently empty</h3>
        <p style="color: var(--color-text-muted); margin: 8px 0 24px;">
          Looks like you haven't added any furniture yet. Explore our handcrafted collection.
        </p>
        <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
      </div>
    `;
    return;
  }

  // Calculate pricing
  const subtotal = CartManager.getSubtotal();
  const shipping = subtotal > 150 ? 0 : 25; // Free shipping over $150
  const total = subtotal + shipping;

  // Build cart table rows HTML
  const rowsHtml = cart.map(item => `
    <tr>
      <td>
        <div class="cart-item-info">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-category">${item.category}</div>
          </div>
        </div>
      </td>
      <td>$${item.price.toFixed(2)}</td>
      <td>
        <div class="qty-control">
          <button type="button" class="qty-btn" onclick="changeItemQty(${item.id}, ${item.quantity - 1})">-</button>
          <span class="qty-value">${item.quantity}</span>
          <button type="button" class="qty-btn" onclick="changeItemQty(${item.id}, ${item.quantity + 1})">+</button>
        </div>
      </td>
      <td><strong>$${(item.price * item.quantity).toFixed(2)}</strong></td>
      <td>
        <button type="button" class="cart-remove-btn" onclick="deleteCartItem(${item.id})" aria-label="Remove item" title="Remove item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </td>
    </tr>
  `).join('');

  // Assemble full cart layout with table and summary
  container.innerHTML = `
    <div class="cart-layout">
      <!-- Items Table -->
      <div class="cart-table-card">
        <table class="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>

      <!-- Order Summary Card -->
      <div class="cart-summary-card">
        <h3>Order Summary</h3>
        <div class="summary-row">
          <span>Subtotal</span>
          <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
          <span>Estimated Shipping</span>
          <span>${shipping === 0 ? '<strong style="color: #264734;">FREE</strong>' : '$' + shipping.toFixed(2)}</span>
        </div>
        <div class="summary-row total">
          <span>Total</span>
          <span>$${total.toFixed(2)}</span>
        </div>

        <div class="summary-actions">
          <a href="checkout.html" class="btn btn-primary">Proceed to Checkout</a>
          <a href="shop.html" class="btn btn-outline-dark">Continue Shopping</a>
        </div>
      </div>
    </div>
  `;
}

// Function to update item quantity
function changeItemQty(productId, newQty) {
  if (newQty <= 0) {
    if (confirm('Remove this item from your cart?')) {
      CartManager.removeItem(productId);
      renderCart();
    }
  } else {
    CartManager.updateQuantity(productId, newQty);
    renderCart();
  }
}

// Function to delete item completely
function deleteCartItem(productId) {
  CartManager.removeItem(productId);
  renderCart();
}
