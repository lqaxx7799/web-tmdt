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
    const product = products.find(item => item.id === val);
    const suggestionItemTemplate = `<div class="menu-item">
      <a href="detail.html?id=${product.id}">
        <img src="${product.image}" alt="" class="menu-item__image" />
      </a>
      <div class="menu-item__info">  
        <div class="menu-item__name">
          <a href="detail.html?id=${product.id}">${product.title}</a>
        </div>
        <div class="menu-item__price">${product.price}</div>
      </div>
    </div>`;
    return res + suggestionItemTemplate;
  }, '');
  document.getElementById('productSuggestions').innerHTML = suggestionsTemplate;
});