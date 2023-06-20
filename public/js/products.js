fetch('data.json')
.then(response => response.json())
.then(data => {
  const productCardsContainer = document.getElementById('product-cards');

  // Lặp qua danh sách sản phẩm
  data.product.forEach(product => {
    // Tạo các phần tử HTML tương ứng với thông tin sản phẩm
    const card = document.createElement('div');
    card.className = 'card';

    const thumbnail = document.createElement('div');
    thumbnail.className = 'card-thumnail';

    const image = document.createElement('img');
    image.src = product.image;
    image.className = 'card-img-top';
    image.alt = 'Product Image';
    thumbnail.appendChild(image);

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('div');
    title.className = 'card-title text-left h6 mt-1';
    title.textContent = product.name;
    body.appendChild(title);

    const price = document.createElement('div');
    price.className = 'card-price d-inline h5 mt-1';
    price.textContent = product.price + '$';
    body.appendChild(price);

    // Thêm các phần tử vào thẻ card
    card.appendChild(thumbnail);
    card.appendChild(body);

    // Thêm thẻ card vào container
    productCardsContainer.appendChild(card);
  });
})
.catch(error => console.log(error));