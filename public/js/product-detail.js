document.addEventListener("DOMContentLoaded", function () {
  const productUrl = new URLSearchParams(window.location.search);
  const productId = productUrl.get("id");
  console.log(productId);
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

      productImage.src = product.image;
      productTitle.textContent = product.name;
      productPrice.textContent = product.price;
      productDescription.textContent = product.description;
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


