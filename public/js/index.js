// Tải và hiển thị dữ liệu cho khối "Áo dài"
async function fetchAoDaiData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    const container = document.createElement('div');
    container.className = 'container';

    const row = document.createElement('div');
    row.className = 'row';

    data.product
      .filter(product => product.id <= 11 && product.category === 'Áo dài')
      .forEach(product => {
        const col = createProductCard(product);
        row.appendChild(col);
      });

    container.appendChild(row);
    document.getElementById('product-card').appendChild(container);
  } catch (error) {
    console.error('Lỗi tải dữ liệu:', error);
  }
}

// Tạo thẻ sản phẩm
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

  
  // Thêm sự kiện click cho thẻ sản phẩm
  card.addEventListener('click', () => {
    // Điều hướng đến trang mới với thông tin sản phẩm
    const productUrl = `product-detail.html?id=${product.id}`; // Thay 'product.html' bằng URL của trang mới
    window.location.assign(productUrl);
  }); 


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

// Gọi hàm fetchAoDaiData để tải và hiển thị dữ liệu cho khối "Áo dài"
fetchAoDaiData();


// Tải và hiển thị dữ liệu cho khối "Quần dài"
async function fetchQuanDaiData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    const container = document.createElement('div');
    container.className = 'container';

    const row = document.createElement('div');
    row.className = 'row';

    data.product
      .filter(product => product.category === 'Quần dài')
      .forEach(product => {
        const col = createProductCard(product);
        row.appendChild(col);
      });

    container.appendChild(row);
    document.getElementById('product-card-2').appendChild(container);
  } catch (error) {
    console.error('Lỗi tải dữ liệu:', error);
  }
}

// Gọi hàm fetchQuanDaiData để tải và hiển thị dữ liệu cho khối "Quần dài"
fetchQuanDaiData();


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




