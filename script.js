let btn = document .querySelector(".no11 button")
btn.addEventListener("click", () => {
    document.querySelector(".no12").style.display = 'block'
})
let close = document .querySelector(".no14")
close.addEventListener("click", () => {
    document.querySelector(".no12").style.display = 'none'
})
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})
