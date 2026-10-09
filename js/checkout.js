/* ==========================================================================
   Luma Living — Checkout Page Controller
   Simple student-friendly validation and demo order submission script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderCheckoutSummary();
  setupCheckoutForm();
});

// Render the order items and totals on the checkout page
function renderCheckoutSummary() {
  const summaryContainer = document.getElementById('checkoutSummaryItems');
  const subtotalEl = document.getElementById('checkoutSubtotal');
  const shippingEl = document.getElementById('checkoutShipping');
  const totalEl = document.getElementById('checkoutTotal');

  if (!summaryContainer) return;

  const cart = CartManager.getCart();

  // If cart is empty, redirect user back to shop
  if (cart.length === 0) {
    summaryContainer.innerHTML = `
      <p style="color: var(--color-text-muted); font-size: 0.9rem;">
        Your cart is empty. <a href="shop.html" style="color: var(--color-primary); font-weight: 700;">Go to shop</a> to add items.
      </p>
    `;
    const submitBtn = document.getElementById('placeOrderBtn');
    if (submitBtn) submitBtn.disabled = true;
    return;
  }

  // List each item with price and quantity
  summaryContainer.innerHTML = cart.map(item => `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-size: 0.9rem;">
      <div>
        <strong>${item.name}</strong> × ${item.quantity}
      </div>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  `).join('');

  // Calculate totals
  const subtotal = CartManager.getSubtotal();
  const shipping = subtotal > 150 ? 0 : 25;
  const total = subtotal + shipping;

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

// Handle form validation and submission
function setupCheckoutForm() {
  const form = document.getElementById('checkoutForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const cart = CartManager.getCart();
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before placing an order.');
      window.location.href = 'shop.html';
      return;
    }

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !address || !city) {
      alert('Please fill in all required shipping fields.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address.');
      return;
    }

    // Generate simulated order ID
    const randomOrderId = 'LUMA-' + Math.floor(100000 + Math.random() * 900000);
    const subtotal = CartManager.getSubtotal();
    const shipping = subtotal > 150 ? 0 : 25;
    const finalTotal = (subtotal + shipping).toFixed(2);

    // Show order confirmation modal
    showOrderConfirmationModal({
      orderId: randomOrderId,
      name: `${firstName} ${lastName}`,
      email: email,
      address: `${address}, ${city}`,
      total: `$${finalTotal}`
    });

    // Clear cart in localStorage
    CartManager.clearCart();
  });
}

// Show the demo order confirmation popup
function showOrderConfirmationModal(details) {
  const modal = document.getElementById('orderModal');
  const modalDetails = document.getElementById('modalOrderDetails');

  if (modalDetails) {
    modalDetails.innerHTML = `
      <p style="font-size: 0.95rem; margin-bottom: 8px;">Order Reference: <strong>${details.orderId}</strong></p>
      <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 6px;">Customer: ${details.name} (${details.email})</p>
      <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 6px;">Ship to: ${details.address}</p>
      <p style="font-size: 1.1rem; font-weight: 800; color: var(--color-primary); margin-top: 12px;">Total Paid (Demo): ${details.total}</p>
    `;
  }

  if (modal) {
    modal.classList.add('open');
  }
}
