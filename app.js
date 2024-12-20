let mainImg = document.querySelector("#mainImg"),
  imgs = document.querySelectorAll(".itemImg"),
  graySelect = document.querySelector(".gray-select"),
  gray = document.querySelector(".gray"),
  brownSelect = document.querySelector(".brown-select"),
  brown = document.querySelector(".brown"),
  buyNow = document.querySelector("#buyNow"),
  credit = document.querySelector("#credit"),
  month3 = document.querySelector(".month3"),
  month6 = document.querySelector(".month6"),
  month12 = document.querySelector(".month12"),
  month18 = document.querySelector(".month18"),
  price = document.querySelector("#laptop-price"),
  creditPrice = document.querySelector("#credit-price");

//   Rasmlar almashishi

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    var imgAddres = img.getAttribute("src");
    mainImg.setAttribute("src", imgAddres);
  });
});

// Oylar bosilganda active holatga o'tishi

gray.addEventListener("click", () => {
  graySelect.classList.remove("none");
  brownSelect.classList.add("none");
});
brown.addEventListener("click", () => {
  brownSelect.classList.remove("none");
  graySelect.classList.add("none");
});
month3.addEventListener("click", () => {
  creditPrice.textContent = `$ ${price.textContent.match(/[0-9]/g).join("")/300}.00`
  month3.classList.add("active-month");
  month6.classList.remove("active-month");
  month12.classList.remove("active-month");
  month18.classList.remove("active-month");
});
month6.addEventListener("click", () => {
    creditPrice.textContent = `$ ${price.textContent.match(/[0-9]/g).join("")/600}`
  month6.classList.add("active-month");
  month3.classList.remove("active-month");
  month12.classList.remove("active-month");
  month18.classList.remove("active-month");
});
month12.addEventListener("click", () => {
    creditPrice.textContent = `$ ${price.textContent.match(/[0-9]/g).join("")/1200}`
  month12.classList.add("active-month");
  month3.classList.remove("active-month");
  month6.classList.remove("active-month");
  month18.classList.remove("active-month");
});
month18.addEventListener("click", () => {
    var priceMonth = Number(price.textContent.match(/[0-9]/g).join("")/1800).toFixed(2)
    creditPrice.textContent = `$ ${(priceMonth)}`
  month18.classList.add("active-month");
  month3.classList.remove("active-month");
  month6.classList.remove("active-month");
  month12.classList.remove("active-month");
});

// Active monthda narx o'zgarishi
