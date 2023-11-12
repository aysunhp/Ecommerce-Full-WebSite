let signUp = document.querySelector(".sign-up");
let logOut = document.querySelector(".loging-out");
let account = document.querySelector(".account");
let userArr;
let localUser = JSON.parse(localStorage.getItem("users"));
let sessionUser = JSON.parse(sessionStorage.getItem("users"));
if (localUser) {
  userArr = [...localUser];
} else if (sessionUser) {
  userArr = [...sessionUser];
}
else {
  userArr = [];
}
if (localUser || sessionUser) {
  account.classList.replace("d-none", "d-block");
  logOut.classList.replace("d-none", "d-block");
  signUp.classList.add("d-none"); 
  logOut.addEventListener("click", function (e) {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Log out!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("users");
        sessionStorage.removeItem("users");
        Swal.fire(
          'Logged out!',
          'success'
        )
        document.location.href = "index.html"
      }
    })

  })
}


// product page 
let id = new URLSearchParams(location.search).get("id");
let productImgs = document.querySelectorAll(".product-img");
let productImage = document.querySelector(".product-image");
let discountBox = document.querySelector(".discount-box");
let discount = document.querySelector(".discount");
let rate = document.querySelector(".rate-stars");
let rateCount = document.querySelector(".rate-count");
let productName = document.querySelector("#product-name");
let reviewCount = document.querySelector(".review-count");
let priceBox = document.querySelector(".price");
let discountPlace = document.querySelector(".discounted-place");
let discountedPrice = document.querySelector(".discounted-price");
let priceSpan = document.querySelector(".price-span")
let bagReviewCount = document.querySelector(".bag-review-count");
let basketBtn = document.querySelector(".add-to-card-btn");


axios.get("http://localhost:3000/products").then((res) => {
  let products = res.data;

  let found = products.find((item) => item.id == id);

  productImgs.forEach((productImg) => {
    productImg.children[0].setAttribute("src", `${found.image}`);
  })
  reviewCount.innerHTML = `${found.comments.length}`;
  bagReviewCount.innerHTML = `${found.comments.length}`;
  let newPrice = found.price - (found.discountPercent * found.price / 100);
  basketBtn.setAttribute("id", `${found.id}`)
  if (found.discountPercent > 0) {
    discount.innerHTML = `${found.discountPercent}`;
    discountPlace.classList.remove("d-none");
    discountPlace.style.color = "red"
    discountedPrice.innerHTML = `${newPrice}`;
    discountedPrice.style.color = "red"
    priceSpan.innerHTML = "FROM $"
    priceBox.innerHTML = `${found.price}`

  } else {
    discountBox.classList.add("d-none");
    priceBox.innerHTML = `${found.price}`
  }

  productImage.children[0].setAttribute("src", `${found.image}`);
  productName.innerHTML = `${found.name}`;
  rateCount.innerHTML = `${found.rating}`
  if (found.rating == "5") {
    rate.innerHTML = `
<i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px"></i>
<i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px;"></i>
<i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px;"></i>
<i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px;"></i>
<i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px;"></i>`
  } else if (found.rating == "4") {
    rate.innerHTML = `
<i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px"></i>
<i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px;"></i>
<i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px;"></i>
<i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px;"></i>
`
  } else if (found.rating == "3") {
    rate.innerHTML = `
        <i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px"></i>
        <i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px;"></i>
        <i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px;"></i>
        `
  } else if (found.rating == "2") {
    rate.innerHTML = `
        <i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px"></i>
        <i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px;"></i>
        `
  } else {
    rate.innerHTML = `
        <i class="fa-solid fa-star" style="color: #ffdd45;font-size:14px"></i>
        `
  }
})


// review and description
let description = document.querySelector(".descriptions");
let descriptionContainerr = document.querySelector(".description-containerr");
let reviewContainer = document.querySelector(".review-containerr")
let review = document.querySelector(".review-container");
let reviewBtn = document.querySelector(".review-btn");

reviewBtn.addEventListener("click", function (e) {
  e.preventDefault();

  axios.get("http://localhost:3000/products").then((res) => {
    let products = res.data;

    reviewContainer.classList.remove("d-none");
    descriptionContainerr.classList.add("d-none");
    let found = products.find((item) => item.id == id);
    let comments = found?.comments;


    comments.forEach((comment) => {
      reviewContainer.innerHTML += `
            <div class="review review-container">
            <div class="name-rate">
              <div class="name">${comment.name}</div>
              <div class="rate rate-of-star">
              </div>
            </div>
            <div class="review-time">${comment.date}</div>
            <div class="review-content">
            ${comment.comments}
            </div>
          </div>
`;
      let starRates = document.querySelectorAll(".rate-of-star");
      starRates.forEach((starRate) => {
        if (comment.rate == "5") {
          starRate.innerHTML = `<i class="fa-solid fa-star" style="color:#FFDD45"></i
                    ><i style="color:#FFDD45" class="fa-solid fa-star"></i
                    ><i style="color:#FFDD45" class="fa-solid fa-star"></i
                    ><i style="color:#FFDD45" class="fa-solid fa-star"></i
                    ><i style="color:#FFDD45" class="fa-solid fa-star"></i>`;
        } else if (comment.rate == "4") {
          starRate.innerHTML = `
                    <i style="color:#FFDD45" class="fa-solid fa-star"></i
                    ><i style="color:#FFDD45" class="fa-solid fa-star"></i
                    ><i style="color:#FFDD45" class="fa-solid fa-star"></i
                    ><i style="color:#FFDD45" class="fa-solid fa-star"></i>`;
        } else if (comment.rate == 3) {
          starRate.innerHTML = `<i style="color:#FFDD45" class="fa-solid fa-star"></i
                    ><i style="color:#FFDD45" class="fa-solid fa-star"></i
                    ><i style="color:#FFDD45" class="fa-solid fa-star"></i
                    >
                    `;
        } else if (comment.rate == 2) {
          starRate.innerHTML = `<i style="color:#FFDD45" class="fa-solid fa-star"></i
                    ><i style="color:#FFDD45" class="fa-solid fa-star"></i
                    >
                    `;
        } else {
          starRate.innerHTML = `
                    <i style="color:#FFDD45" class="fa-solid fa-star"></i>
                    `;
        }
      })

    })

  })
})

description.addEventListener("click", function (e) {
  e.preventDefault();

  axios.get("http://localhost:3000/products").then((res) => {
    let products = res.data;


    let found = products.find((item) => item.id == id);
    // let descriptionContent = found.description;
    descriptionContainerr.classList.remove("d-none");
    reviewContainer.classList.add("d-none");
    descriptionContainerr.children[0].innerHTML = `${found.description}`


  })
})

// you may also like section

let container = document.querySelector(".you-may-also-like .also-liked-products .containerr");

axios.get("http://localhost:3000/products").then((res) => {
  let products = res.data;

  let found = products.find((item) => item.id == id);

  products.forEach((bag) => {
    if (bag.categoryFirst == found.categoryFirst) {
      let productDate = new Date(bag.createDate);
      let currentDate = new Date();
      container.innerHTML += `
            <div class="card" style="width: 360px;
            height: 508px;border-radius: 8px;
            background: #F9F9F9;">
            <a href="product-page.html?id=${bag.id}">
            <img
               src="${bag.image}"
               class="card-img-top img-fluid"
               alt="..."  
               style="width: 218px; height: 243px; margin: 11px 71px 16px 71px"
             />
             </a>
             
             <div class="card-body">
               <div class="star-rating">
                 ${bag.rating >= 1
          ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
          : ""
        }
                 
                 ${bag.rating >= 2
          ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
          : ""
        }
                 
                 ${bag.rating >= 3
          ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
          : ""
        }
     
                 ${bag.rating >= 4
          ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
          : ""
        }
     
                 
                 ${bag.rating == 5
          ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
          : ""
        }
               </div>
               <p
                 class="card-text"
                 style="
                   color: #000;
                   font-family: 'Poppins';
                   font-size: 16px;
                   font-style: normal;
                   font-weight: 400;
                   line-height: 170%;
                 "
               >
                 ${bag.name}<br>${bag.description}
               </p>
               <div class="product-price">
                 <p
                   class="text1"
                   style="
                     color: #f75145;
                     font-family: 'Poppins';
                     font-size: 20px;
                     font-style: normal;
                     font-weight: 600;
                     line-height: 170%;
                   "
                 >
                     ${bag.discountPercent !== 0
          ? `$${(
            bag.price -
            bag.price * (bag.discountPercent / 100)
          ).toFixed(2)}`
          : `$${bag.price.toFixed(2)}`
        }
                   <span
                     class="text2"
                     style="
                       color: rgba(54, 54, 54, 0.75);
                       font-family: 'Poppins';
                       font-size: 16px;
                       font-style: normal;
                       font-weight: 400;
                       line-height: 170%;
                       margin-left: 18px;
                     "
                   >
                   ${bag.discountPercent !== 0
          ? `From $${bag.price.toFixed(2)}`
          : ""
        }
                   </span>
                 </p>
               </div>
               <button
                 class="btn basket-btn"
                 id=${bagid}
                 style="
                   width: 312px;
                   height: 48px;
                   border-radius: 8px;
                   border: 1px solid #212121;
                 "
               >
                 <p
                   style="
                     color: #212121;
                     font-family: 'Poppins';
                     font-size: 16px;
                     font-style: normal;
                     font-weight: 500;
                     line-height: 170%;
                     margin-top: 4px;
                   "
                 >
                   Add to cart
                 </p>
               </button>
               <button
                 style="
                   background-color: ${currentDate.getTime() - productDate.getTime() <= 3600000
          ? "#43D167"
          : `${bag.discountPercent ? "#DF4244" : "transparent"}`
        };
                   width: 79px;
                   height: 32px;
                   border-radius: 8px;
                   border: none;
                   position: absolute;
                   top: 20px;
                   left: 15px;
                 "
               >
                 <p
                   style="
                     color: #fff;
                     font-family: Poppins;
                     font-size: 16px;
                     font-style: normal;
                     font-weight: 500;
                     line-height: 170%; /* 27.2px */
                   "
                 >
                   ${currentDate.getTime() - productDate.getTime() <= 3600000
          ? "New"
          : `${bag.discountPercent
            ? `${bag.discountPercent}%`
            : ""
          }`
        }
                 </p>
               </button>
               <img
                 src="./assets/images/logo/favourite.svg"
                 alt=""
                 style="position: absolute; top: 24px; right: 30px"
               />
             </div>
           </div>`
    }
  })
  // adding to basket
  let basketBtns = document.querySelectorAll(".basket-btn");
  let basketArr;
  let localBasket = JSON.parse(localStorage.getItem("basket"));
  if (localBasket) {
    basketArr = [...localBasket];
  } else {
    basketArr = [];
  }

  basketBtns.forEach(basketBtn => {
    basketBtn.addEventListener("click", function (e) {
      e.preventDefault();

      bagId = this.id;
      let existingBag = basketArr.find((item) => item.id === bagId);

      if (basketArr) {
        if (!existingBag) {
          let obj = {};
          obj.quantity = 1;
          obj.id = bagId;
          basketArr.push(obj);
          localStorage.setItem("basket", JSON.stringify(basketArr));
          Swal.fire({
            position: "bottom-right",
            icon: "success",
            title: " Added to Basket",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          existingBag.quantity += 1;
          localStorage.setItem("basket", JSON.stringify(basketArr));
          Swal.fire({
            position: "bottom-right",
            icon: "success",
            title: "One more added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        basketArr = [];
      }



    })
  })
})

// adding to basket
let addBasket = function () {
  let basketBtns = document.querySelectorAll(".basket-btn");
  let basketArr;
  let localBasket = JSON.parse(localStorage.getItem("basket"));
  if (localBasket) {
    basketArr = [...localBasket];
  } else {
    basketArr = [];
  }

  basketBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(this.id)
    bagId = this.id;
    let existingBag = basketArr.find((item) => item.id === bagId);

    if (basketArr) {
      if (!existingBag) {
        let obj = {};
        obj.quantity = 1;
        obj.id = bagId;
        basketArr.push(obj);
        localStorage.setItem("basket", JSON.stringify(basketArr));
        Swal.fire({
          position: "bottom-right",
          icon: "success",
          title: " Added to Basket",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        existingBag.quantity += 1;
        localStorage.setItem("basket", JSON.stringify(basketArr));
        Swal.fire({
          position: "bottom-right",
          icon: "success",
          title: "One more added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      basketArr = [];
    }
  })
}

addBasket()