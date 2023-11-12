let signUp = document.querySelector(".sign-up");
let logOut = document.querySelector(".loging-out");
let account = document.querySelector(".account");
console.log(signUp)
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


// get bag function
// let getBag = function (bag) {
//     let bagCategoryName1 = document.querySelector(".bag-category-name1");
//     let bagCategoryName2 = document.querySelector(".bag-category-name2");
//     bagCategoryName1.innerHTML = ``;
//     bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
//     bagCategoryName2.innerHTML = ``
//     bagCategoryName2.innerHTML = `${bag.categoryFirst}`
//     let productDate = new Date(bag.createDate);
//     let currentDate = new Date();
//     featuredProductes.innerHTML += `
// <div
//     class="card"
//     style="
//     position: relative;
//     width: 360px;
//     height: 508px;
//     border: none;
//     border-radius: 8px;
//     background: #f9f9f9;
//   "
//   >
//      <a href="product-page.html?id=${bag.id}">
//    <img
//    src="${bag.image}"
//    class="card-img-top img-fluid"
//    alt="..."  
//    style="width: 218px; height: 243px; margin: 11px 71px 16px 71px"
//  />
//  </a>
//     <div class="card-body">
//       <div class="star-rating">
//         ${bag.rating >= 1
//             ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
//             : ""
//         }

//         ${bag.rating >= 2
//             ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
//             : ""
//         }

//         ${bag.rating >= 3
//             ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
//             : ""
//         }

//         ${bag.rating >= 4
//             ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
//             : ""
//         }


//         ${bag.rating == 5
//             ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
//             : ""
//         }
//       </div>
//       <p
//         class="card-text"
//         style="
//           color: #000;
//           font-family: 'Poppins';
//           font-size: 16px;
//           font-style: normal;
//           font-weight: 400;
//           line-height: 170%;
//         "
//       >
//         ${bag.name}<br>${bag.description}
//       </p>
//       <div class="product-price">
//         <p
//           class="text1"
//           style="
//             color: #f75145;
//             font-family: 'Poppins';
//             font-size: 20px;
//             font-style: normal;
//             font-weight: 600;
//             line-height: 170%;
//           "
//         >
//             ${bag.discountPercent !== 0
//             ? `$${(
//                 bag.price -
//                 bag.price * (bag.discountPercent / 100)
//             ).toFixed(2)}`
//             : `$${bag.price.toFixed(2)}`
//         }
//           <span
//             class="text2"
//             style="
//               color: rgba(54, 54, 54, 0.75);
//               font-family: 'Poppins';
//               font-size: 16px;
//               font-style: normal;
//               font-weight: 400;
//               line-height: 170%;
//               margin-left: 18px;
//             "
//           >
//           ${bag.discountPercent !== 0
//             ? `From $${bag.price.toFixed(2)}`
//             : ""
//         }
//           </span>
//         </p>
//       </div>
//       <button
//         class="btn basket-btn"
//         id=${bag.id}
//         style="
//           width: 312px;
//           height: 48px;
//           border-radius: 8px;
//           border: 1px solid #212121;
//         "
//       >
//         <p
//           style="
//             color: #212121;
//             font-family: 'Poppins';
//             font-size: 16px;
//             font-style: normal;
//             font-weight: 500;
//             line-height: 170%;
//             margin-top: 4px;
//           "
//         >
//           Add to cart
//         </p>
//       </button>
//       <button
//         style="
//           background-color: ${currentDate.getTime() - productDate.getTime() <= 3600000
//             ? "#43D167"
//             : `${bag.discountPercent ? "#DF4244" : "transparent"}`
//         };
//           width: 79px;
//           height: 32px;
//           border-radius: 8px;
//           border: none;
//           position: absolute;
//           top: 20px;
//           left: 15px;
//         "
//       >
//         <p
//           style="
//             color: #fff;
//             font-family: Poppins;
//             font-size: 16px;
//             font-style: normal;
//             font-weight: 500;
//             line-height: 170%; /* 27.2px */
//           "
//         >
//           ${currentDate.getTime() - productDate.getTime() <= 3600000
//             ? "New"
//             : `${bag.discountPercent
//                 ? `${bag.discountPercent}%`
//                 : ""
//             }`
//         }
//         </p>
//       </button>
//       <img
//         src="./assets/images/logo/favourite.svg"
//         alt=""
//         style="position: absolute; top: 24px; right: 30px"
//       />
//     </div>
//   </div>
// `;
// }

// adding basket function
let addBasket = function () {
  // adding to basket
  let basketBtns = document.querySelectorAll(".basket-btn");
  console.log(basketBtns)
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

      let bagId = this.id;
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

}
let filtering = function () {
  let result = document.querySelector("#result");
  result.addEventListener("click", function (e) {
    e.preventDefault();
    let resultValue = result.value;
    if (resultValue == "price") {
      axios.get("http://localhost:3000/products").then((res) => {
        let products = res.data;
        let sortedProducts = products.sort((a, b) => (a.price - a.price * a.discountPercent / 100) - (b.price - b.price * b.discountPercent / 100))

        featuredProductes.innerHTML = "";
        sortedProducts.forEach((bag) => {
          let bagCategoryName1 = document.querySelector(".bag-category-name1");
          let bagCategoryName2 = document.querySelector(".bag-category-name2");
          bagCategoryName1.innerHTML = ``;
          bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
          bagCategoryName2.innerHTML = ``
          bagCategoryName2.innerHTML = `${bag.categoryFirst}`
          let productDate = new Date(bag.createDate);
          let currentDate = new Date();
          featuredProductes.innerHTML += `
                    <div
                        class="card"
                        style="
                        position: relative;
                        width: 360px;
                        height: 508px;
                        border: none;
                        border-radius: 8px;
                        background: #f9f9f9;
                      "
                      >
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
                            id=${bag.id}
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
                      </div>
                    `;

        })

        addBasket()
      })
    } else if (resultValue == "sold") {
      axios.get("http://localhost:3000/products").then((res) => {
        let products = res.data;

        let sortedProducts = products.sort((a, b) => a.sold - b.sold)

        featuredProductes.innerHTML = "";
        sortedProducts.forEach((bag) => {
          let bagCategoryName1 = document.querySelector(".bag-category-name1");
          let bagCategoryName2 = document.querySelector(".bag-category-name2");
          bagCategoryName1.innerHTML = ``;
          bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
          bagCategoryName2.innerHTML = ``
          bagCategoryName2.innerHTML = `${bag.categoryFirst}`
          let productDate = new Date(bag.createDate);
          let currentDate = new Date();
          featuredProductes.innerHTML += `
                <div
                    class="card"
                    style="
                    position: relative;
                    width: 360px;
                    height: 508px;
                    border: none;
                    border-radius: 8px;
                    background: #f9f9f9;
                  "
                  >
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
                        id=${bag.id}
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
                  </div>
                `;
        })

        addBasket()
      })
    }

  })
}
filtering()

let count = 0
let result = document.querySelector(".result");
let featuredProductes = document.querySelector(".featured-products-section");
axios.get("http://localhost:3000/products").then((res) => {
  let products = res.data;

  products.forEach((bag) => {

    let bagCategoryName1 = document.querySelector(".bag-category-name1");
    let bagCategoryName2 = document.querySelector(".bag-category-name2");
    bagCategoryName1.innerHTML = ``;
    bagCategoryName1.innerHTML = `Bags`;
    bagCategoryName2.innerHTML = ``
    bagCategoryName2.innerHTML = "Bags"
    let productDate = new Date(bag.createDate);
    let currentDate = new Date();
    featuredProductes.innerHTML += `
        <div
            class="card"
            style="
            position: relative;
            width: 360px;
            height: 508px;
            border: none;
            border-radius: 8px;
            background: #f9f9f9;
          "
          >
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
                id=${bag.id}
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
          </div>
        `;

    count++;
  })
  result.innerHTML = `${count}`
  addBasket()
})


let bagCategoryName = document.querySelectorAll(".bag-category-name")
let eveningBag = document.querySelector(".evening-bag");
eveningBag.addEventListener("click", function (e) {
  e.preventDefault();
  axios.get("http://localhost:3000/products").then((res) => {
    let products = res.data;
    let eveningbags = products.filter((item) => item.categoryFirst == "Evening Bag")
    featuredProductes.innerHTML = "";
    count = 0;
    eveningbags.forEach((bag) => {
      let bagCategoryName1 = document.querySelector(".bag-category-name1");
      let bagCategoryName2 = document.querySelector(".bag-category-name2");
      bagCategoryName1.innerHTML = ``;
      bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
      bagCategoryName2.innerHTML = ``
      bagCategoryName2.innerHTML = `${bag.categoryFirst}`
      let productDate = new Date(bag.createDate);
      let currentDate = new Date();
      featuredProductes.innerHTML += `
        <div
            class="card"
            style="
            position: relative;
            width: 360px;
            height: 508px;
            border: none;
            border-radius: 8px;
            background: #f9f9f9;
          "
          >
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
                id=${bag.id}
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
          </div>
        `;


      count++;
    })
    result.innerHTML = `${count}`
    addBasket()
  })
})

let shoulderBag = document.querySelector(".shoulder-bag");
shoulderBag.addEventListener("click", function (e) {
  e.preventDefault();
  axios.get("http://localhost:3000/products").then((res) => {
    let products = res.data;
    let shoulderbags = products.filter((item) => item.categoryFirst == "Shoulder Bag")
    featuredProductes.innerHTML = "";
    count = 0;
    shoulderbags.forEach((bag) => {
      let bagCategoryName1 = document.querySelector(".bag-category-name1");
      let bagCategoryName2 = document.querySelector(".bag-category-name2");
      bagCategoryName1.innerHTML = ``;
      bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
      bagCategoryName2.innerHTML = ``
      bagCategoryName2.innerHTML = `${bag.categoryFirst}`
      let productDate = new Date(bag.createDate);
      let currentDate = new Date();
      featuredProductes.innerHTML += `
        <div
            class="card"
            style="
            position: relative;
            width: 360px;
            height: 508px;
            border: none;
            border-radius: 8px;
            background: #f9f9f9;
          "
          >
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
                id=${bag.id}
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
          </div>
        `;


      count++;
    })
    result.innerHTML = `${count}`
    addBasket()
  })
})

let backpackBag = document.querySelector(".backpack-bag");
backpackBag.addEventListener("click", function (e) {
  e.preventDefault();
  axios.get("http://localhost:3000/products").then((res) => {
    let products = res.data;
    let backpacks = products.filter((item) => item.categoryFirst == "Backpack Bag")
    featuredProductes.innerHTML = "";
    count = 0;
    backpacks.forEach((bag) => {
      let bagCategoryName1 = document.querySelector(".bag-category-name1");
      let bagCategoryName2 = document.querySelector(".bag-category-name2");
      bagCategoryName1.innerHTML = ``;
      bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
      bagCategoryName2.innerHTML = ``
      bagCategoryName2.innerHTML = `${bag.categoryFirst}`
      let productDate = new Date(bag.createDate);
      let currentDate = new Date();
      featuredProductes.innerHTML += `
        <div
            class="card"
            style="
            position: relative;
            width: 360px;
            height: 508px;
            border: none;
            border-radius: 8px;
            background: #f9f9f9;
          "
          >
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
                id=${bag.id}
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
          </div>
        `;


      count++;
    })
    result.innerHTML = `${count}`
    addBasket()
  })
})

let handBag = document.querySelector(".handbag-bag");
handBag.addEventListener("click", function (e) {
  e.preventDefault();
  axios.get("http://localhost:3000/products").then((res) => {
    let products = res.data;
    let handBags = products.filter((item) => item.categoryFirst == "Hand Bag")
    featuredProductes.innerHTML = "";
    count = 0;
    handBags.forEach((bag) => {
      let bagCategoryName1 = document.querySelector(".bag-category-name1");
      let bagCategoryName2 = document.querySelector(".bag-category-name2");
      bagCategoryName1.innerHTML = ``;
      bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
      bagCategoryName2.innerHTML = ``
      bagCategoryName2.innerHTML = `${bag.categoryFirst}`
      let productDate = new Date(bag.createDate);
      let currentDate = new Date();
      featuredProductes.innerHTML += `
        <div
            class="card"
            style="
            position: relative;
            width: 360px;
            height: 508px;
            border: none;
            border-radius: 8px;
            background: #f9f9f9;
          "
          >
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
                id=${bag.id}
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
          </div>
        `;



      count++;
    })
    result.innerHTML = `${count}`
    addBasket()
  })
})

let postmanBag = document.querySelector(".postman-bag");
postmanBag.addEventListener("click", function (e) {
  e.preventDefault();
  axios.get("http://localhost:3000/products").then((res) => {
    let products = res.data;
    let postmans = products.filter((item) => item.categoryFirst == "Postman Bag")
    featuredProductes.innerHTML = "";
    count = 0;
    postmans.forEach((bag) => {
      let bagCategoryName1 = document.querySelector(".bag-category-name1");
      let bagCategoryName2 = document.querySelector(".bag-category-name2");
      bagCategoryName1.innerHTML = ``;
      bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
      bagCategoryName2.innerHTML = ``
      bagCategoryName2.innerHTML = `${bag.categoryFirst}`
      let productDate = new Date(bag.createDate);
      let currentDate = new Date();
      featuredProductes.innerHTML += `
        <div
            class="card"
            style="
            position: relative;
            width: 360px;
            height: 508px;
            border: none;
            border-radius: 8px;
            background: #f9f9f9;
          "
          >
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
                id=${bag.id}
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
          </div>
        `;


      count++
    })
    result.innerHTML = `${count}`
    addBasket()
  })
})

let beltBag = document.querySelector(".belt-bag");
beltBag.addEventListener("click", function (e) {
  e.preventDefault();
  axios.get("http://localhost:3000/products").then((res) => {
    let products = res.data;
    let beltBags = products.filter((item) => item.categoryFirst == "Belt Bag")
    featuredProductes.innerHTML = "";
    count = 0;
    beltBags.forEach((bag) => {
      let bagCategoryName1 = document.querySelector(".bag-category-name1");
      let bagCategoryName2 = document.querySelector(".bag-category-name2");
      bagCategoryName1.innerHTML = ``;
      bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
      bagCategoryName2.innerHTML = ``
      bagCategoryName2.innerHTML = `${bag.categoryFirst}`
      let productDate = new Date(bag.createDate);
      let currentDate = new Date();
      featuredProductes.innerHTML += `
        <div
            class="card"
            style="
            position: relative;
            width: 360px;
            height: 508px;
            border: none;
            border-radius: 8px;
            background: #f9f9f9;
          "
          >
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
                id=${bag.id}
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
          </div>
        `;



      count++;
    })
    result.innerHTML = `${count}`
    addBasket()
  })
})



let categoryBtns = document.querySelectorAll(".category-btn")
categoryBtns.forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (this.children[0].classList.contains("fa-chevron-down")) {
      this.children[0].classList.replace("fa-chevron-down", "fa-chevron-up")
      let categoryContent = this.parentElement.nextElementSibling;
      categoryContent.classList.remove("d-none");
      let backpack = document.querySelector(".backpack");
      let belt = document.querySelector(".belt");
      let hand = document.querySelector(".hand");
      let shoulder = document.querySelector(".shoulder");
      let evening = document.querySelector(".evening");
      let postman = document.querySelector(".postman");

      backpack.addEventListener("click", function (e) {
        e.preventDefault();
        axios.get("http://localhost:3000/products").then((res) => {
          let products = res.data;
          let backpacks = products.filter((item) => item.categoryFirst == "Backpack Bag")
          featuredProductes.innerHTML = "";
          count = 0;
          backpacks.forEach((bag) => {
            let bagCategoryName1 = document.querySelector(".bag-category-name1");
            let bagCategoryName2 = document.querySelector(".bag-category-name2");
            bagCategoryName1.innerHTML = ``;
            bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
            bagCategoryName2.innerHTML = ``
            bagCategoryName2.innerHTML = `${bag.categoryFirst}`
            let productDate = new Date(bag.createDate);
            let currentDate = new Date();
            featuredProductes.innerHTML += `
                    <div
                        class="card"
                        style="
                        position: relative;
                        width: 360px;
                        height: 508px;
                        border: none;
                        border-radius: 8px;
                        background: #f9f9f9;
                      "
                      >
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
                            id=${bag.id}
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
                      </div>
                    `;


            count++;
          })
          result.innerHTML = `${count}`
          addBasket()
        })
      })
      belt.addEventListener("click", function (e) {
        e.preventDefault();
        axios.get("http://localhost:3000/products").then((res) => {
          let products = res.data;
          let belts = products.filter((item) => item.categoryFirst == "Belt Bag")
          featuredProductes.innerHTML = "";
          count = 0;
          belts.forEach((bag) => {
            let bagCategoryName1 = document.querySelector(".bag-category-name1");
            let bagCategoryName2 = document.querySelector(".bag-category-name2");
            bagCategoryName1.innerHTML = ``;
            bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
            bagCategoryName2.innerHTML = ``
            bagCategoryName2.innerHTML = `${bag.categoryFirst}`
            let productDate = new Date(bag.createDate);
            let currentDate = new Date();
            featuredProductes.innerHTML += `
                    <div
                        class="card"
                        style="
                        position: relative;
                        width: 360px;
                        height: 508px;
                        border: none;
                        border-radius: 8px;
                        background: #f9f9f9;
                      "
                      >
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
                            id=${bag.id}
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
                      </div>
                    `;


            count++;
          })
          result.innerHTML = `${count}`
          addBasket()
        })
      })
      hand.addEventListener("click", function (e) {
        e.preventDefault();
        axios.get("http://localhost:3000/products").then((res) => {
          let products = res.data;
          let hands = products.filter((item) => item.categoryFirst == "Hand Bag")
          featuredProductes.innerHTML = "";
          count = 0;
          hands.forEach((bag) => {
            let bagCategoryName1 = document.querySelector(".bag-category-name1");
            let bagCategoryName2 = document.querySelector(".bag-category-name2");
            bagCategoryName1.innerHTML = ``;
            bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
            bagCategoryName2.innerHTML = ``
            bagCategoryName2.innerHTML = `${bag.categoryFirst}`
            let productDate = new Date(bag.createDate);
            let currentDate = new Date();
            featuredProductes.innerHTML += `
                    <div
                        class="card"
                        style="
                        position: relative;
                        width: 360px;
                        height: 508px;
                        border: none;
                        border-radius: 8px;
                        background: #f9f9f9;
                      "
                      >
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
                            id=${bag.id}
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
                      </div>
                    `;


            count++;
          })
          result.innerHTML = `${count}`
          addBasket();
        })
      })
      shoulder.addEventListener("click", function (e) {
        e.preventDefault();
        axios.get("http://localhost:3000/products").then((res) => {
          let products = res.data;
          let shoulderbags = products.filter((item) => item.categoryFirst == "Shoulder Bag")
          featuredProductes.innerHTML = "";
          count = 0;
          shoulderbags.forEach((bag) => {
            let bagCategoryName1 = document.querySelector(".bag-category-name1");
            let bagCategoryName2 = document.querySelector(".bag-category-name2");
            bagCategoryName1.innerHTML = ``;
            bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
            bagCategoryName2.innerHTML = ``
            bagCategoryName2.innerHTML = `${bag.categoryFirst}`
            let productDate = new Date(bag.createDate);
            let currentDate = new Date();
            featuredProductes.innerHTML += `
                    <div
                        class="card"
                        style="
                        position: relative;
                        width: 360px;
                        height: 508px;
                        border: none;
                        border-radius: 8px;
                        background: #f9f9f9;
                      "
                      >
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
                            id=${bag.id}
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
                      </div>
                    `;


            count++;
          })
          result.innerHTML = `${count}`
          addBasket()
        })
      })
      evening.addEventListener("click", function (e) {
        e.preventDefault();
        axios.get("http://localhost:3000/products").then((res) => {
          let products = res.data;
          let eveningbags = products.filter((item) => item.categoryFirst == "Evening Bag")
          featuredProductes.innerHTML = "";
          count = 0;
          eveningbags.forEach((bag) => {
            let bagCategoryName1 = document.querySelector(".bag-category-name1");
            let bagCategoryName2 = document.querySelector(".bag-category-name2");
            bagCategoryName1.innerHTML = ``;
            bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
            bagCategoryName2.innerHTML = ``
            bagCategoryName2.innerHTML = `${bag.categoryFirst}`
            let productDate = new Date(bag.createDate);
            let currentDate = new Date();
            featuredProductes.innerHTML += `
                    <div
                        class="card"
                        style="
                        position: relative;
                        width: 360px;
                        height: 508px;
                        border: none;
                        border-radius: 8px;
                        background: #f9f9f9;
                      "
                      >
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
                            id=${bag.id}
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
                      </div>
                    `;


            count++;
          })
          result.innerHTML = `${count}`
          addBasket()
        })
      })
      postman.addEventListener("click", function (e) {
        e.preventDefault();
        axios.get("http://localhost:3000/products").then((res) => {
          let products = res.data;
          let postmans = products.filter((item) => item.categoryFirst == "Postman Bag")
          featuredProductes.innerHTML = "";
          count = 0;
          postmans.forEach((bag) => {
            let bagCategoryName1 = document.querySelector(".bag-category-name1");
            let bagCategoryName2 = document.querySelector(".bag-category-name2");
            bagCategoryName1.innerHTML = ``;
            bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
            bagCategoryName2.innerHTML = ``
            bagCategoryName2.innerHTML = `${bag.categoryFirst}`
            let productDate = new Date(bag.createDate);
            let currentDate = new Date();
            featuredProductes.innerHTML += `
                    <div
                        class="card"
                        style="
                        position: relative;
                        width: 360px;
                        height: 508px;
                        border: none;
                        border-radius: 8px;
                        background: #f9f9f9;
                      "
                      >
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
                            id=${bag.id}
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
                      </div>
                    `;


            count++;
          })
          result.innerHTML = `${count}`
          addBasket()
        })
      })
    } else {
      this.children[0].classList.replace("fa-chevron-up", "fa-chevron-down")
      let categoryContent = this.parentElement.nextElementSibling;
      categoryContent.classList.add("d-none");
    }
  })
})



let priceRangeForm = document.querySelector(".price-range-form");
let lessPrice = document.querySelector(".less");
let morePrice = document.querySelector(".more");
priceRangeForm.addEventListener("click", function (e) {
  e.preventDefault();
  axios.get("http://localhost:3000/products").then((res) => {
    let products = res.data;
    let suitableProducts = products.filter((item) => (item.price - item.price * item.discountPercent / 100) >= lessPrice.value && item.price <= morePrice.value)

    featuredProductes.innerHTML = "";
    count = 0;
    suitableProducts.forEach((bag) => {
      let bagCategoryName1 = document.querySelector(".bag-category-name1");
      let bagCategoryName2 = document.querySelector(".bag-category-name2");
      bagCategoryName1.innerHTML = ``;
      bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
      bagCategoryName2.innerHTML = ``
      bagCategoryName2.innerHTML = `${bag.categoryFirst}`
      let productDate = new Date(bag.createDate);
      let currentDate = new Date();
      featuredProductes.innerHTML += `
        <div
            class="card"
            style="
            position: relative;
            width: 360px;
            height: 508px;
            border: none;
            border-radius: 8px;
            background: #f9f9f9;
          "
          >
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
                id=${bag.id}
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
          </div>
        `;


      count++;
    })
    result.innerHTML = `${count}`
    addBasket()


    result.addEventListener("click", function (e) {
      e.preventDefault();
      let resultValue = result.value;
      if (resultValue == "price") {
        suitableProducts = suitableProducts.sort((a, b) => a.price - b.price);
        featuredProductes.innerHTML = "";
        count = 0;
        suitableProducts.forEach((bag) => {
          let bagCategoryName1 = document.querySelector(".bag-category-name1");
          let bagCategoryName2 = document.querySelector(".bag-category-name2");
          bagCategoryName1.innerHTML = ``;
          bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
          bagCategoryName2.innerHTML = ``
          bagCategoryName2.innerHTML = `${bag.categoryFirst}`
          let productDate = new Date(bag.createDate);
          let currentDate = new Date();
          featuredProductes.innerHTML += `
                <div
                    class="card"
                    style="
                    position: relative;
                    width: 360px;
                    height: 508px;
                    border: none;
                    border-radius: 8px;
                    background: #f9f9f9;
                  "
                  >
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
                        id=${bag.id}
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
                  </div>
                `;


          count++;
        })
        result.innerHTML = `${count}`
        addBasket()
      } else if (resultValue == "sold") {
        suitableProducts = suitableProducts.sort((a, b) => a.sold - b.sold);
        featuredProductes.innerHTML = "";
        count = 0;
        suitableProducts.forEach((bag) => {
          let bagCategoryName1 = document.querySelector(".bag-category-name1");
          let bagCategoryName2 = document.querySelector(".bag-category-name2");
          bagCategoryName1.innerHTML = ``;
          bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
          bagCategoryName2.innerHTML = ``
          bagCategoryName2.innerHTML = `${bag.categoryFirst}`
          let productDate = new Date(bag.createDate);
          let currentDate = new Date();
          featuredProductes.innerHTML += `
<div
    class="card"
    style="
    position: relative;
    width: 360px;
    height: 508px;
    border: none;
    border-radius: 8px;
    background: #f9f9f9;
  "
  >
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
        id=${bag.id}
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
  </div>
`;


          count++;
        })
        result.innerHTML = `${count}`
        addBasket()
      }
    })

  })
})

let materialForm = document.querySelector(".material-form");
let materials = document.querySelectorAll(".material");
let materialArr;
materialForm.addEventListener("submit", function (e) {
  e.preventDefault()
  materialArr = [];
  for (let material of materials) {
    if (material.checked) {
      materialArr.push(material.value)
    }
  }

  axios.get("http://localhost:3000/products").then((res) => {
    let products = res.data;
    let bagArr = products.filter((elem) => {
      if (materialArr.find(item => item == elem.Material)) {
        return elem;
      }
    })
    console.log(bagArr);
    featuredProductes.innerHTML = "";
    count = 0;
    bagArr.forEach(bag => {
      let bagCategoryName1 = document.querySelector(".bag-category-name1");
      let bagCategoryName2 = document.querySelector(".bag-category-name2");
      bagCategoryName1.innerHTML = ``;
      bagCategoryName1.innerHTML = `${bag.categoryFirst}`;
      bagCategoryName2.innerHTML = ``
      bagCategoryName2.innerHTML = `${bag.categoryFirst}`
      let productDate = new Date(bag.createDate);
      let currentDate = new Date();
      featuredProductes.innerHTML += `
        <div
            class="card"
            style="
            position: relative;
            width: 360px;
            height: 508px;
            border: none;
            border-radius: 8px;
            background: #f9f9f9;
          "
          >
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
                id=${bag.id}
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
          </div>
        `;

      count++;
    })
    result.innerHTML = `${count}`
    addBasket()
  })
})
