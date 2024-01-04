// mobile menu
const hideMenu = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none"
}

const showMenu = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "block"
}

const swiper = new Swiper('.swiper-container', {
    // Optional: Add more Swiper configurations here
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});