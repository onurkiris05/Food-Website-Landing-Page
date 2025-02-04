const searchContainer = document.querySelector(".search-container");
const searchLogo = document.querySelector(".search-logo");
const btnLearnMore = document.querySelector(".btn-learn-more");
const imgCard = document.querySelector(".img-card");

searchLogo.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
});

btnLearnMore.addEventListener("click", () => {
  imgCard.classList.toggle("active");
});
