
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
  