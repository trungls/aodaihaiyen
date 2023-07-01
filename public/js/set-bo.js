// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

close.onclick = function () {
  modal.style.display = "none";
}

close_footer.onclick = function () {
  modal.style.display = "none";
}

order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng");
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i];
  button.addEventListener("click", function () {
    var button_remove = event.target;
    button_remove.parentElement.parentElement.remove();
    updatecart();
  });
}

// Update cart
function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var total = 0;

  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i];
    var price_item = cart_row.getElementsByClassName("cart-price")[0];
    var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0];
    var price = parseFloat(price_item.innerText);
    var quantity = quantity_item.value;
    total = total + price * quantity;
  }

  document.getElementsByClassName("cart-total-price")[0].innerText = total + "VNĐ";
}

// Thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart();
  });
}

// Thêm vào giỏ
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {
    var button = event.target;
    var product = button.parentElement.parentElement;
    var img = product.parentElement.getElementsByClassName("img-prd")[0].src;
    var title = product.getElementsByClassName("content-product-h3")[0].innerText;
    var price = product.getElementsByClassName("price")[0].innerText;
    addItemToCart(title, price, img);
    modal.style.display = "block";
    updatecart();
  });
}

function addItemToCart(title, price, img) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cart_title = cartItems.getElementsByClassName("cart-item-title");

  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert("Sản Phẩm Đã Có Trong Giỏ Hàng");
      return;
    }
  }

  var cartRowContents = `
    <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
    </div>`;

  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);

  cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", function () {
    var button_remove = event.target;
    button_remove.parentElement.parentElement.remove();
    updatecart();
  });

  cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", function (event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart();
  });
}

// Tải và hiển thị dữ liệu
async function fetchAoDaiData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    const container = document.createElement('div');
    container.className = 'container';

    const row = document.createElement('div');
    row.className = 'row';

    data.product
      .filter(product => product.id && product.category === 'Quần dài')
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
  const { id, name, image, price } = product;

  const col = document.createElement('div');
  col.className = 'products col-lg-4 col-md-6 col-xl-3 col-xxl-3 mb-2';

  const mainProduct = document.createElement('div');
  mainProduct.className = 'main-product';

  const imgProduct = document.createElement('div');
  imgProduct.className = 'img-product';

  const img = document.createElement('img');
  img.className = 'img-prd w-100 p-0';
  img.src = image;
  img.alt = '';

  imgProduct.appendChild(img);

  const contentProduct = document.createElement('div');
  contentProduct.className = 'content-product';

  const contentProductH3 = document.createElement('div');
  contentProductH3.className = 'content-product-h3 text-start';
  contentProductH3.textContent = name;

  const contentProductDeltals = document.createElement('div');
  contentProductDeltals.className = 'content-product-deltals d-inline text-start';

  const priceDiv = document.createElement('div');
  priceDiv.className = 'price';

  const moneyH4 = document.createElement('div');
  moneyH4.className = 'money h4 text-black';
  moneyH4.textContent = price;

  priceDiv.appendChild(moneyH4);
  contentProductDeltals.appendChild(priceDiv);

  const moneyH5 = document.createElement('div');
  moneyH5.className = 'money h5 text-decoration-line-through text-danger d-flex justify-content-end';
  moneyH5.textContent = '799.000 đ';

  contentProduct.appendChild(contentProductH3);
  contentProduct.appendChild(contentProductDeltals);
  contentProduct.appendChild(moneyH5);

  const addToCartButton = document.createElement('button');
  addToCartButton.type = 'button';
  addToCartButton.className = 'btn btn-cart btn-primary';
  addToCartButton.textContent = 'Thêm Vào Giỏ';

  const dFlexDiv = document.createElement('div');
  dFlexDiv.className = 'd-flex justify-content-center mb-2';

  dFlexDiv.appendChild(addToCartButton);

  mainProduct.appendChild(imgProduct);
  mainProduct.appendChild(contentProduct);
  mainProduct.appendChild(dFlexDiv);

  col.appendChild(mainProduct);

  // Thêm sự kiện click vào nút "Thêm Vào Giỏ"
  addToCartButton.addEventListener('click', function (event) {
    var button = event.target;
    var product = button.parentElement.parentElement;
    var img = product.parentElement.getElementsByClassName("img-prd")[0].src;
    var title = product.getElementsByClassName("content-product-h3")[0].innerText;
    var price = product.getElementsByClassName("money h4 text-black")[0].innerText;
    addItemToCart(title, price, img);
    modal.style.display = "block";
    updatecart();
  });


  col.addEventListener('click', (event) => {
    // Kiểm tra nếu click vào button thì bỏ qua
    if (event.target.classList.contains('btn')) {
      return;
    }
  
    // Điều hướng đến trang mới với thông tin sản phẩm
    const productUrl = `product-detail.html?id=${id}`; // Thay 'product-detail.html' bằng URL của trang mới
    window.location.assign(productUrl);
  });
  
  return col;


  
}

fetchAoDaiData();

