const searchContainer = document.querySelector(".search-container");
const searchLogo = document.querySelector(".search-logo");

searchLogo.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
});
