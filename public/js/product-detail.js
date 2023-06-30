// Tải và hiển thị dữ liệu cho khối "Áo dài"
async function fetchAoDaiData() {

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
    salePriceElement.className = 'card-price mt-2 d-flex justify-content-end h6 text-danger text-decoration-line-through';
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
  
