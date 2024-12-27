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
cartModal = document.querySelector(".modal-cart"),
  closeCart = document.querySelector(".close-cart"),
  cartProductName = document.querySelector("#cartProductName"),
  cartProductPrice = document.querySelector("#cartProductPrice"),
  cartProductImg = document.querySelector("#cartProductImg"),
  productName = document.querySelector(".product"),
  addCart = document.querySelector(".add")
const removeProduct = document.querySelector(".delete");
const mainRow = document.querySelector("#mainRow");

addCart.addEventListener("click", () => {
  mainRow.style.display = "flex";
  cartProductName.textContent = productName.textContent
    .split("")
    .splice(0, 30)
    .join("");
  cartProductPrice.textContent = price.textContent;
  cartProductImg.setAttribute("src", "img/main.png");
});

// remove product from cart
removeProduct.addEventListener("click", () => {
  cartProductName.textContent = "";
  cartProductPrice.textContent = "";
  cartProductImg.setAttribute("src", "");
  mainRow.style.display = "none";
});

// Cart modal
cartProduct.addEventListener("click", () => {
  cartModal.classList.add("show");
});
closeCart.addEventListener("click", () => {
  cartModal.classList.remove("show");
});


// Add product from card 1

const productName1 = document.querySelector("#productName1"),
cartProductName1 = document.querySelector("#cartProductName1"),
  cartProductPrice1 = document.querySelector("#cartProductPrice1"),
  cartProductImg1 = document.querySelector("#cartProductImg1"),
productImg1 = document.querySelector("#productImg1"),
addCartBtn1 = document.querySelector("#addCart1")
const row1 = document.querySelector("#row1");
const removeProduct1 = document.querySelector(".delete1");

addCartBtn1.addEventListener("click", () => {
  row1.style.display = "flex";
  cartProductName1.textContent = productName1.textContent
    .split("")
    .splice(0, 30)
    .join("");
  cartProductPrice1.textContent = price.textContent;
  cartProductImg1.setAttribute("src", productImg1.getAttribute("src"));
});


// remove product from cart 1
removeProduct1.addEventListener("click", () => {
  cartProductName1.textContent = "";
  cartProductPrice1.textContent = "";
  cartProductImg1.setAttribute("src", "");
  row1.style.display = "none";
});

// Add product from card 2
const productName2 = document.querySelector("#productName2"),
cartProductName2 = document.querySelector("#cartProductName2"),
  cartProductPrice2 = document.querySelector("#cartProductPrice2"),
  cartProductImg2 = document.querySelector("#cartProductImg2"),
productImg2 = document.querySelector("#productImg2"),
addCartBtn2 = document.querySelector("#addCart2")
const row2 = document.querySelector("#row2");
const removeProduct2 = document.querySelector(".delete2");


addCartBtn2.addEventListener("click", () => {
  row2.style.display = "flex";
  cartProductName2.textContent = productName2.textContent
    .split("")
    .splice(0, 30)
    .join("");
  cartProductPrice2.textContent = price.textContent;
  cartProductImg2.setAttribute("src", productImg2.getAttribute("src"));
});

removeProduct2.addEventListener("click", () => {
  cartProductName2.textContent = "";
  cartProductPrice2.textContent = "";
  cartProductImg2.setAttribute("src", "");
  row2.style.display = "none";
});

// Add product from card 3
const productName3 = document.querySelector("#productName3"),
cartProductName3 = document.querySelector("#cartProductName3"),
  cartProductPrice3 = document.querySelector("#cartProductPrice3"),
  cartProductImg3 = document.querySelector("#cartProductImg3"),
productImg3 = document.querySelector("#productImg3"),
addCartBtn3 = document.querySelector("#addCartBtn3")
const row3 = document.querySelector("#row3");
const removeProduct3 = document.querySelector(".delete3");


addCartBtn3.addEventListener("click", () => {
  row3.style.display = "flex";
  cartProductName3.textContent = productName3.textContent
    .split("")
    .splice(0, 30)
    .join("");
  cartProductPrice3.textContent = price.textContent;
  cartProductImg3.setAttribute("src", productImg3.getAttribute("src"));
});

removeProduct3.addEventListener("click", () => {
  cartProductName3.textContent = "";
  cartProductPrice3.textContent = "";
  cartProductImg3.setAttribute("src", "");
  row3.style.display = "none";
});

// Add product from card 4
const productName4 = document.querySelector("#productName4"),
cartProductName4 = document.querySelector("#cartProductName4"),
  cartProductPrice4 = document.querySelector("#cartProductPrice4"),
  cartProductImg4 = document.querySelector("#cartProductImg4"),
productImg4 = document.querySelector("#productImg4"),
addCartBtn4 = document.querySelector("#addCartBtn4")
const row4 = document.querySelector("#row4");
const removeProduct4 = document.querySelector(".delete4");


addCartBtn4.addEventListener("click", () => {
  row4.style.display = "flex";
  cartProductName4.textContent = productName4.textContent
    .split("")
    .splice(0, 30)
    .join("");
  cartProductPrice4.textContent = price.textContent;
  cartProductImg4.setAttribute("src", productImg4.getAttribute("src"));
});

removeProduct4.addEventListener("click", () => {
  cartProductName4.textContent = "";
  cartProductPrice4.textContent = "";
  cartProductImg4.setAttribute("src", "");
  row4.style.display = "none";
});