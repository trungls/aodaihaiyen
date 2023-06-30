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