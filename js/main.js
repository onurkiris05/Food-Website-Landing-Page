import { foodData } from "./foodData.js";
const searchContainer = document.querySelector(".search-container");
const searchLogo = document.querySelector(".search-logo");
const btnLearnMore = document.querySelector(".btn-learn-more");
const foodCard = document.querySelector(".food-card");
const selectionOptions = document.querySelectorAll(".options");
const cardImage = document.querySelector(".food-img");
const navMobile = document.querySelector(".nav-mobile");
const menuMobile = document.querySelector(".menu-mobile");

// Search bar toggle
searchLogo.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
});

// Learn more button toggle
btnLearnMore.addEventListener("click", () => {
  foodCard.classList.toggle("active");
  btnLearnMore.classList.toggle("active");

  if (btnLearnMore.classList.contains("active")) {
    btnLearnMore.innerHTML = "Show Less <ion-icon name='chevron-collapse-outline'></ion-icon>";
  } else {
    btnLearnMore.innerHTML = "Learn More <ion-icon name='search-circle-outline'></ion-icon>";
  }
});

// Food card change
function changeCard(card) {
  const id = card.getAttribute("data-id");
  const selectedFood = foodData.find((item) => item.id == id);
  cardImage.src = selectedFood.img;
}

selectionOptions.forEach((option) => {
  option.addEventListener("click", () => {
    changeCard(option);
  });
});

// Mobile menu toggle
menuMobile.addEventListener("click", () => {
  navMobile.classList.toggle("active");
  menuMobile.classList.toggle("active");
});
