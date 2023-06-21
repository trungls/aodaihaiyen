// Lấy dữ liệu từ file data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Tạo card cho mỗi sản phẩm
    const container = document.createElement('div');
    container.className = 'container';

    const row = document.createElement('div');
    row.className = 'row';

    data.product
    .filter(product => product.category === 'Áo dài')
    .forEach(product => {
      const col = createProductCard(product);
      row.appendChild(col);
    });

    container.appendChild(row);
    document.getElementById('product-card').appendChild(container);
  })
  .catch(error => {
    console.error('Lỗi tải dữ liệu:', error);
  });

// Hàm tạo card cho một sản phẩm
function createProductCard(product) {
  const { id, name, image, price, salePrice } = product;

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


  const priceElement = document.createElement('p');
  priceElement.className = 'card-text mt-2 h6';
  priceElement.textContent = 'Giá: ' + price;

  const salePriceElement = document.createElement('p');
  salePriceElement.className = 'card-text mt-2 h5';
  salePriceElement.textContent = 'Sale : ' + salePrice;
  
  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'card-btn mb-2 text-center';

  const addButton = document.createElement('a');
  addButton.href = '#';
  addButton.className = 'btn btn-primary';
  addButton.textContent = 'Thêm vào giỏ hàng';
  
  // Gắn các phần tử con vào card
  cardBody.appendChild(productName);
  cardBody.appendChild(priceElement);
  cardBody.appendChild(salePriceElement);
  cardBody.appendChild(addButton);

  buttonDiv.appendChild(addButton);

  card.appendChild(imageElement);
  card.appendChild(cardBody);

  col.appendChild(card);
  card.appendChild(buttonDiv);
  return col;
}



