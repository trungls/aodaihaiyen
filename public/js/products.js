// Lấy dữ liệu từ file data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Tạo card cho mỗi sản phẩm
    const container = document.createElement('div');
    container.className = 'container';

    const row = document.createElement('div');
    row.className = 'row';

    data.product.forEach(product => {
      const col = createProductCard(product);
      row.appendChild(col);
    });

    container.appendChild(row);
    document.getElementById('product-card').appendChild(container);
  })
  .catch(error => {
    console.error('Lỗi khi tải dữ liệu:', error);
  });

// Hàm tạo card cho một sản phẩm
function createProductCard(product) {
  const { id, name, description, image, price, salePrice } = product;

  // Tạo các phần tử HTML cho card sản phẩm
  const col = document.createElement('div');
  col.className = 'col-lg-4 col-md-6 col-xl-3 mt-2';

  const card = document.createElement('div');
  card.className = 'card';

  const imageElement = document.createElement('img');
  imageElement.src = image;
  imageElement.className = 'card-img-top';
  imageElement.alt = name;

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const productName = document.createElement('h5');
  productName.className = 'card-title';
  productName.textContent = name;

  const productDescription = document.createElement('p');
  productDescription.className = 'card-text';
  productDescription.textContent = description;

  const priceElement = document.createElement('p');
  priceElement.className = 'card-text';
  priceElement.textContent = 'Price: ' + price;

  const salePriceElement = document.createElement('p');
  salePriceElement.className = 'card-text';
  salePriceElement.textContent = 'Sale Price: ' + salePrice;

  // Gắn các phần tử con vào card
  cardBody.appendChild(productName);
  cardBody.appendChild(productDescription);
  cardBody.appendChild(priceElement);
  cardBody.appendChild(salePriceElement);

  card.appendChild(imageElement);
  card.appendChild(cardBody);

  col.appendChild(card);

  return col;
}
