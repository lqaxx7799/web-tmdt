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
  document.getElementById('productPrice').innerHTML = product.price;
  document.getElementById('productDescription').innerHTML = product.description;
  document.getElementById('productImage').src = product.image;

  const sizesTemplate = product.sizes.reduce((res, val) => {
    const sizeItemTemplate = `<div class="option__item">${val}</div>`;
    return res + sizeItemTemplate;
  }, '');
  document.getElementById('sizeOptions').innerHTML = sizesTemplate;

  const toppingsTemplate = product.toppings.reduce((res, val) => {
    const toppingItemTemplate = `<div class="option__item">${val}</div>`;
    return res + toppingItemTemplate;
  }, '');
  document.getElementById('toppingOptions').innerHTML = toppingsTemplate;

  const suggestionsTemplate = product.suggestions.reduce((res, val) => {
    const product = products.find(item => item.id === val);
    const suggestionItemTemplate = `<div class="product-suggestion__item">
      <a class="" href="detail.html?id=${product?.id}">
        <img alt="" src="${product?.image}" class="product-suggestion__image"/>
      </a>
      <div>
        <div class="product-suggestion__title">
          <a href="detail.html?id=${product?.id}">
            ${product?.title}
          </a>
        </div>
        <div class="product-suggestion__price">${product?.price}</div>
      </div>
    </div>`;
    return res + suggestionItemTemplate;
  }, '');
  document.getElementById('productSuggestions').innerHTML = suggestionsTemplate;
});