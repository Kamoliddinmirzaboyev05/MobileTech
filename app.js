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
  term = document.querySelector(".term"),
  monthCredit = document.querySelector(".price-credit"),
  typePay = document.querySelector(".type.Pay"),
  creditPrice = document.querySelector("#credit-price");

//   Rasmlar almashishi

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    var imgAddres = img.getAttribute("src");
    mainImg.setAttribute("src", imgAddres);
  });
});

// Oylar bosilganda active holatga o'tishi
buyNow.addEventListener("click", () => {
  if (buyNow.checked) {
    term.style.display = "none";
    monthCredit.style.display = "none";
  }
});
credit.addEventListener("click", () => {
  if (!buyNow.checked) {
    term.style.display = "flex";
    monthCredit.style.display = "flex";
  }
});

gray.addEventListener("click", () => {
  graySelect.classList.remove("none");
  brownSelect.classList.add("none");
  alert(buyNow.checked);
});
brown.addEventListener("click", () => {
  brownSelect.classList.remove("none");
  graySelect.classList.add("none");
});
month3.addEventListener("click", () => {
  creditPrice.textContent = `$ ${
    price.textContent.match(/[0-9]/g).join("") / 300
  }.00`;
  month3.classList.add("active-month");
  month6.classList.remove("active-month");
  month12.classList.remove("active-month");
  month18.classList.remove("active-month");
});
month6.addEventListener("click", () => {
  creditPrice.textContent = `$ ${
    price.textContent.match(/[0-9]/g).join("") / 600
  }`;
  month6.classList.add("active-month");
  month3.classList.remove("active-month");
  month12.classList.remove("active-month");
  month18.classList.remove("active-month");
});
month12.addEventListener("click", () => {
  creditPrice.textContent = `$ ${
    price.textContent.match(/[0-9]/g).join("") / 1200
  }`;
  month12.classList.add("active-month");
  month3.classList.remove("active-month");
  month6.classList.remove("active-month");
  month18.classList.remove("active-month");
});
month18.addEventListener("click", () => {
  var priceMonth = Number(
    price.textContent.match(/[0-9]/g).join("") / 1800
  ).toFixed(2);
  creditPrice.textContent = `$ ${priceMonth}`;
  month18.classList.add("active-month");
  month3.classList.remove("active-month");
  month6.classList.remove("active-month");
  month12.classList.remove("active-month");
});

// Active monthda narx o'zgarishi

// register oyna
const register = document.querySelector(".user"),
  modal = document.querySelector(".modal"),
  modalBack = document.querySelector(".modal-back"),
  close = document.querySelector(".close"),
  inputs = document.querySelectorAll("input"),
  likeHeart = document.querySelectorAll(".like-heart");
body = document.querySelector("body");

register.addEventListener("click", () => {
  modalBack.style.top = "0";
  modal.style.top = "50%";
  body.style.overflow = "hidden";
});
close.addEventListener("click", () => {
  modalBack.style.top = "-1000px";
  modal.style.top = "-1000px";
  inputs.forEach((item) => {
    item.value = "";
  });
});
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-back")) {
    modalBack.style.top = "-1000px";
    modal.style.top = "-1000px";
    inputs.forEach((item) => {
      item.value = "";
    });
  }
});

// Like bosish

likeHeart.forEach((heart) => {
  let pasLike = 0;
  heart.addEventListener("click", () => {
    if (pasLike == 0) {
      heart.setAttribute("class", "fa-solid fa-heart");
      pasLike = 1;
    } else if (pasLike == 1) {
      heart.setAttribute("class", "fa-regular fa-heart");
      pasLike = 0;
    }
  });
});

// Add product to product modal

let cartProduct = document.getElementById("cartIcon"),
  closeCart = document.querySelector(".close-cart"),
  addCart = document.querySelector(".add"),
  productName = document.querySelector(".product"),
  cartProductName = document.querySelector("#cartProductName"),
  cartProductPrice = document.querySelector("#cartProductPrice"),
  cartProductImg = document.querySelector("#cartProductImg"),
  cartModal = document.querySelector(".modal-cart");

addCart.addEventListener("click", () => {
  cartProductName.textContent = productName.textContent.split("").splice(0, 30).join("");
  
  cartProductPrice.textContent = price.textContent;
  cartProductImg.setAttribute("src", "img/main.png");
});

// Cart modal

cartProduct.addEventListener("click", () => {
  cartModal.classList.add("show");
});
closeCart.addEventListener("click", () => {
  cartModal.classList.remove("show");
});
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-back")) {
    modalBack.style.top = "-1000px";
    modal.style.top = "-1000px";
    inputs.forEach((item) => {
      item.value = "";
    });
  }
});
