document.addEventListener('DOMContentLoaded', () => {
  const searchParams = new URLSearchParams(location.search);
  const idString = searchParams.get('id');
  if (!idString) {
    return;
  }
  const id = Number(idString);
  const product = products.find(item => item.id === id);
  if (!product) {
    return;
  }

  document.getElementById('breadcrumbCurrent').innerHTML = product.title;
  document.getElementById('productTitle').innerHTML = product.title;
  if (product.oldPrice) {
    document.getElementById('productOldPrice').innerHTML = product.oldPrice;
  }
  document.getElementById('productPrice').innerHTML = product.price;
  document.getElementById('productDescription').innerHTML = product.description;
  document.getElementById('productImage').src = product.image;

  const suggestionsTemplate = product.suggestions.reduce((res, val) => {
    const product = products.find(item => item.id === val);
    const suggestionItemTemplate = `<div class="product-item">
      <div class="product-item__sale">SALE</div>
      <div>
        <a href="detail.html?id=${product.id}">
          <img src="${product.image}" alt="" />
        </a>
      </div>
      <div class="product-item__info">
        <div class="product-item__title">
          <a href="detail.html?id=${product.id}">
            ${product.title}
          </a>
        </div>
        <div class="product-item__price-wrapper">
          ${product.oldPrice ? '<div class="product-item__old-price">' + product.oldPrice + '</div>' : ''}
          <div class="product-item__price">${product.price}</div>
        </div>
      </div>
    </div>`;
    return res + suggestionItemTemplate;
  }, '');
  document.getElementById('productSuggestions').innerHTML = suggestionsTemplate;
});