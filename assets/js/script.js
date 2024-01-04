// mobile menu
const hideMenu = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none"
}

const showMenu = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "block"
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });