document.addEventListener("DOMContentLoaded", function () {
  const productUrl = new URLSearchParams(window.location.search);
  const productId = productUrl.get("id");

  // Tải và hiển thị dữ liệu sản phẩm
  async function displayProduct() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      const product = data.product.find(item => item.id === parseInt(productId));

      if (product) {
        const productDetail = document.getElementById('product-detail');
        const productImage = productDetail.querySelector('.product-image');
        const productTitle = productDetail.querySelector('.product-title');
        const productPrice = productDetail.querySelector('.product-price');
        const productDescription = productDetail.querySelector('.product-description');
        const productSize = productDetail.querySelector('.product-size');
        const addToCartButton = productDetail.querySelector('.add-to-cart-button');
        const buyNowButton = productDetail.querySelector('.buy-now-button');

        productImage.src = product.image;
        productTitle.textContent = product.name;
        productPrice.textContent = product.price;
        productDescription.textContent = product.description;

        // Thêm button size
        product.sizes.forEach(size => {
          const sizeInput = document.createElement('input');
          sizeInput.type = 'checkbox';
          sizeInput.name = 'size';
          sizeInput.value = size;
          sizeInput.id = `size-${size}`;

          const sizeLabel = document.createElement('label');
          sizeLabel.textContent = size;
          sizeLabel.htmlFor = `size-${size}`;

          productSize.appendChild(sizeInput);
          productSize.appendChild(sizeLabel);
        });

        // Thêm button "Thêm vào giỏ"
        addToCartButton.addEventListener('click', () => {
          // Xử lý logic khi nhấn vào nút "Thêm vào giỏ"
        });

        // Thêm button "Mua hàng"
        buyNowButton.addEventListener('click', () => {
          // Xử lý logic khi nhấn vào nút "Mua hàng"
        });
      } else {
        console.error('Không tìm thấy sản phẩm');
      }
    } catch (error) {
      console.error('Lỗi tải dữ liệu:', error);
    }
  }

  // Gọi hàm hiển thị sản phẩm khi trang được tải
  displayProduct();
});

