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
