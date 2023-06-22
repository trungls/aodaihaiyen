// Lấy dữ liệu từ file data.json bằng async/await
async function getData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    return data.product;
  } catch (error) {
    console.error('Lỗi tải dữ liệu:', error);
    return [];
  }
}

// Hiển thị danh sách sản phẩm
async function displayProducts() {
  try {
    const products = await getData();

    const container = document.createElement('div');
    container.className = 'container';

    const row = document.createElement('div');
    row.className = 'row';

    products
      .filter(product => product.id <= 11 && product.category === 'Áo dài')
      .forEach(product => {
        const col = createProductCard(product);
        row.appendChild(col);
      });

    container.appendChild(row);
    document.getElementById('product-card').appendChild(container);
  } catch (error) {
    console.error('Lỗi hiển thị sản phẩm:', error);
  }
}

// Hàm tạo card cho một sản phẩm
function createProductCard(product) {
  const { id, name, image, price, salePrice } = product;

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
  priceElement.className = 'card-text mt-2 h5';
  priceElement.textContent = ' ' + price;

  const salePriceElement = document.createElement('p');
  salePriceElement.className = 'card-text mt-2 d-flex justify-content-end h6 text-danger text-decoration-line-through';
  salePriceElement.textContent = ' ' + salePrice;

  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'card-btn mb-2 text-center';

  const addButton = document.createElement('a');
  addButton.href = '#';
  addButton.className = 'btn btn-primary';
  addButton.textContent = 'Thêm vào giỏ hàng';

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

// Khi tài liệu đã được tải xong
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await displayProducts();

    // Xử lý sự kiện khi click vào sản phẩm
    const productCards = document.querySelectorAll('.card-product');

    productCards.forEach(productCard => {
      productCard.addEventListener('click', () => {
        const productId = productCard.dataset.productId;
        // Chuyển hướng đến trang mới hiển thị chi tiết sản phẩm
        window.location.href = `product-detail.html?id=${productId}`;
      });
    });
  } catch (error) {
    console.error('Lỗi khởi tạo trang:', error);
  }
});

// Khởi tạo Swiper
const swiper = new Swiper(".swiper", {
  // Các tùy chọn tùy ý
  direction: "horizontal",
  loop: true,

  // Nếu cần sử dụng pagination
  pagination: {
    el: ".swiper-pagination"
  },

  // Nút điều hướng
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // Và nếu cần thanh cuộn
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
