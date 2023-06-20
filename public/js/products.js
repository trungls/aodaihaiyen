// Render card sản phẩm
function renderProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('card', 'col-md-4', 'col-lg-3', 'mb-4');

  const image = document.createElement('img');
  image.src = product.image;
  image.alt = 'Product Image';
  image.classList.add('card-img-top');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const title = document.createElement('h5');
  title.classList.add('card-title', 'text-left', 'mt-1');
  title.textContent = product.name;

  const price = document.createElement('div');
  price.classList.add('card-price', 'd-inline', 'h5', 'mt-1');
  price.textContent = `$${product.price}`;

  const salePrice = document.createElement('div');
  salePrice.classList.add('card-price-sale', 'd-inline', 'p-2', 'h6', 'text-danger', 'text-decoration-line-through');
  salePrice.textContent = `$${product.salePrice}`;

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('card-btn', 'mt-1', 'text-center');

  const btn = document.createElement('a');
  btn.href = '#';
  btn.classList.add('btn', 'btn-primary');
  btn.textContent = 'Thêm vào giỏ hàng';

  btnContainer.appendChild(btn);

  cardBody.appendChild(title);
  cardBody.appendChild(price);
  cardBody.appendChild(salePrice);
  cardBody.appendChild(btnContainer);

  card.appendChild(image);
  card.appendChild(cardBody);

  return card;
}

// Render tất cả các card sản phẩm từ data.json
function renderAllProductCards() {
  const productCardContainer = document.getElementById('product-card');

  // Fetch dữ liệu từ tệp JSON
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Lặp qua tất cả các sản phẩm và hiển thị card sản phẩm
      data.forEach(product => {
        const card = renderProductCard(product);
        productCardContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Lỗi khi tải dữ liệu:', error);
    });
}

// Gọi hàm để render tất cả các card sản phẩm
renderAllProductCards();
