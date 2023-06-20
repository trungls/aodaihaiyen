const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  });
  // JS card sp
 
// Lấy đối tượng chứa các card sản phẩm
const container = document.querySelector('.container');

// Lấy dữ liệu từ file JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Lặp qua mảng sản phẩm trong dữ liệu JSON
    data.forEach(product => {
      // Tạo một thẻ card sản phẩm
      const card = document.createElement('div');
      card.classList.add('card');

      // Tạo thẻ hình ảnh
      const thumbnail = document.createElement('div');
      thumbnail.classList.add('card-thumnail');
      const image = document.createElement('img');
      image.src = product.image;
      image.classList.add('card-img-top');
      image.alt = 'Product Image';
      thumbnail.appendChild(image);
      card.appendChild(thumbnail);

      // Tạo phần body của card chứa thông tin sản phẩm
      const body = document.createElement('div');
      body.classList.add('card-body');

      // Thêm tên sản phẩm
      const productName = document.createElement('h5');
      productName.classList.add('card-title');
      productName.textContent = product.name;
      body.appendChild(productName);

      // Thêm giá sản phẩm
      const productPrice = document.createElement('p');
      productPrice.classList.add('card-text');
      productPrice.textContent = 'Giá: ' + product.price;
      body.appendChild(productPrice);

      // Thêm mô tả sản phẩm
      const productDescription = document.createElement('p');
      productDescription.classList.add('card-text');
      productDescription.textContent = product.description;
      body.appendChild(productDescription);

      // Thêm card-body vào card
      card.appendChild(body);

      // Thêm card vào container
      container.appendChild(card);
    });
  })
  .catch(error => console.log(error));

  