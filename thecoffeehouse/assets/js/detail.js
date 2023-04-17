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

  const suggestionsTemplate = product.suggestions.reduce((res, val) => {
    const suggestionItemTemplate = `<div class="product-suggestion__item">
      <a class="" href="detail.html?id=${val.id}">
        <img alt="" src="${val.image}" class="product-suggestion__image"/>
      </a>
      <div>
        <div class="product-suggestion__title">
          <a href="detail.html?id=${val.id}">
            ${val.title}
          </a>
        </div>
        <div class="product-suggestion__price">${val.price}</div>
      </div>
    </div>`;
    return res + suggestionItemTemplate;
  }, '');

  document.getElementById('productSuggestions').innerHTML = suggestionsTemplate;
});