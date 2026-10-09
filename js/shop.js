/* ==========================================================================
   Luma Living — Shop Page Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.querySelector('#shopProductsGrid');
  if (!gridContainer) return;

  let currentCategory = 'all';
  let searchQuery = '';
  let currentSort = 'featured';

  const filterPills = document.querySelectorAll('.filter-pill');
  const searchInput = document.querySelector('#shopSearchInput');
  const sortSelect = document.querySelector('#shopSortSelect');
  const countDisplay = document.querySelector('#productCountText');

  function renderProducts() {
    const products = window.PRODUCTS || [];
    
    // 1. Filter by category
    let filtered = products.filter(item => {
      const matchesCat = currentCategory === 'all' || item.category === currentCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });

    // 2. Sort
    if (currentSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    // 3. Render count
    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${products.length} products`;
    }

    // 4. Render cards
    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="shop-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>No matching furniture found</h3>
          <p>Try searching for a different keyword or resetting your filter category.</p>
          <button class="btn btn-outline-dark" id="resetFiltersBtn">Reset Filters</button>
        </div>
      `;
      document.querySelector('#resetFiltersBtn')?.addEventListener('click', () => {
        currentCategory = 'all';
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        filterPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
        renderProducts();
      });
      return;
    }

    gridContainer.innerHTML = filtered.map(item => `
      <div class="product-card" data-id="${item.id}">
        <div class="product-img-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <span class="product-category-tag">${item.category}</span>
        <h3 class="product-title">${item.name}</h3>
        <div class="product-price">
          $${item.price.toFixed(2)}
          ${item.originalPrice ? `<span class="original">$${item.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <button class="product-add-btn" data-add-to-cart="${item.id}" aria-label="Add ${item.name} to cart" title="Add to cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
    `).join('');
  }

  // Filter Pill clicks
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category || 'all';
      renderProducts();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Sort dropdown
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Initial render
  renderProducts();
});
