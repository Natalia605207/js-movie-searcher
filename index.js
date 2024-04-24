const input = document.querySelector('#search');
const movies = document.querySelectorAll('.movie');

input.addEventListener('keyup', (e) => {
    const letters = e.target.value.toLowerCase();
    movies.forEach(movie => {
        movie.querySelector('.name').textContent.toLowerCase().includes(letters) ? (movie.style.display = 'flex') : (movie.style.display = 'none');
    })
})

const backToTopBtn = document.querySelector('#backToTop');

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    }
    else {
        backToTopBtn.style.display = "none";
    }
})
backToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});