let featuredProducts = document.querySelector(".featured-products");
let bestsellerProducts = document.querySelector(".bestsellers-products");
let discountProducts = document.querySelector(".discount-products");

let featuredSwiperWrapper = document.querySelector(
  ".swiper-featured .featured-products .swiper-wrapper"
);
let bestsellerSwiperWrapper = document.querySelector(
  ".swiper-bestseller .bestsellers-products .swiper-wrapper"
);
let discountSwiperWrapper = document.querySelector(
  ".swiper-discount .discount-products .swiper-wrapper"
);
let fswiper = new Swiper(".swiper-featured .featured-products", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 24,
});
let bswiper = new Swiper(".swiper-bestseller .bestsellers-products", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 24,
});
let dswiper = new Swiper(".swiper-discount .discount-products", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 24,
});

fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element, i) => {
      let productDate = new Date(element.createDate);
      let currentDate = new Date();
      // featured
      featuredSwiperWrapper.innerHTML += `
      <div class="swiper-slide">
       <div class="card">
       <a href="product-page.html?id=${element.id}">
       <img
          src="${element.image}"
          class="card-img-top img-fluid"
          alt="..."  
          style="width: 218px; height: 243px; margin: 11px 71px 16px 71px"
        />
        </a>
        
        <div class="card-body">
          <div class="star-rating">
            ${
              element.rating >= 1
                ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
                : ""
            }
            
            ${
              element.rating >= 2
                ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
                : ""
            }
            
            ${
              element.rating >= 3
                ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
                : ""
            }

            ${
              element.rating >= 4
                ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
                : ""
            }

            
            ${
              element.rating == 5
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
            ${element.name}<br>${element.description}
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
                ${
                  element.discountPercent !== 0
                    ? `$${(
                        element.price -
                        element.price * (element.discountPercent / 100)
                      ).toFixed(2)}`
                    : `$${element.price.toFixed(2)}`
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
              ${
                element.discountPercent !== 0
                  ? `From $${element.price.toFixed(2)}`
                  : ""
              }
              </span>
            </p>
          </div>
          <button
            class="btn basket-btn" 
            id=${element.id}
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
              background-color: ${
                currentDate.getTime() - productDate.getTime() <= 3600000
                  ? "#43D167"
                  : `${element.discountPercent ? "#DF4244" : "transparent"}`
              };
              width: 79px;
              height: 32px;
              border-radius: 8px;
              border: none;
              position: absolute;
              top: 20px;
              left: 15px;
            "
            name="${element.id}"
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
              ${
                currentDate.getTime() - productDate.getTime() <= 3600000
                  ? "New"
                  : `${
                      element.discountPercent
                        ? `${element.discountPercent}%`
                        : ""
                    }`
              }
            </p>
          </button>
          <i name="${element.id}" class="${
        JSON.parse(localStorage.getItem("favSingers")) &&
        JSON.parse(localStorage.getItem("favSingers")).find(
          (x) => x.id == element.id
        )
          ? "fa-solid"
          : "fa-regular"
      } fa-heart faveBtns" style="position: absolute; top: 24px; right: 30px ; width:22px;height:22px; color:#DF4244;"></i>
        </div>
      </div>
    </div>
        `;
      fswiper.update();

      // bestseller
      if (element.sold >= 5) {
        bestsellerSwiperWrapper.innerHTML += `
      <div class="swiper-slide">
       <div class="card">
       <a href="product-page.html?id=${element.id}">
       <img
          src="${element.image}"
          class="card-img-top img-fluid"
          alt="..."  
          style="width: 218px; height: 243px; margin: 11px 71px 16px 71px"
        />
        </a>
        <div class="card-body">
          <div class="star-rating">
<<<<<<< HEAD
            ${
              element.rating >= 1
                ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
                : ""
            }
            
            ${
              element.rating >= 2
                ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
                : ""
            }
            
            ${
              element.rating >= 3
                ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
                : ""
            }

            ${
              element.rating >= 4
                ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
                : ""
            }

            
            ${
              element.rating == 5
                ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
                : ""
            }
=======
            ${element.rating >= 1
            ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
            : ""
          }
            
            ${element.rating >= 2
            ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
            : ""
          }
            
            ${element.rating >= 3
            ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
            : ""
          }

            ${element.rating >= 4
            ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
            : ""
          }

            
            ${element.rating == 5
            ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
            : ""
          }
>>>>>>> 6e5a96ff0660f2fe5ff9d2d1fed032bb9f38b3af
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
            ${element.name}<br>${element.description}
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
<<<<<<< HEAD
                ${
                  element.discountPercent !== 0
                    ? `$${(
                        element.price -
                        element.price * (element.discountPercent / 100)
                      ).toFixed(2)}`
                    : `$${element.price.toFixed(2)}`
                }
=======
                ${element.discountPercent !== 0
            ? `$${(
              element.price -
              element.price * (element.discountPercent / 100)
            ).toFixed(2)}`
            : `$${element.price.toFixed(2)}`
          }
>>>>>>> 6e5a96ff0660f2fe5ff9d2d1fed032bb9f38b3af
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
<<<<<<< HEAD
              ${
                element.discountPercent !== 0
                  ? `From $${element.price.toFixed(2)}`
                  : ""
              }
=======
              ${element.discountPercent !== 0
            ? `From $${element.price.toFixed(2)}`
            : ""
          }
>>>>>>> 6e5a96ff0660f2fe5ff9d2d1fed032bb9f38b3af
              </span>
            </p>
          </div>
          <button
            class="btn basket-btn"
            id=${element.id}
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
<<<<<<< HEAD
              background-color: ${
                currentDate.getTime() - productDate.getTime() <= 3600000
                  ? "#43D167"
                  : `${element.discountPercent ? "#DF4244" : "transparent"}`
              };
=======
              background-color: ${currentDate.getTime() - productDate.getTime() <= 3600000
            ? "#43D167"
            : `${element.discountPercent ? "#DF4244" : "transparent"}`
          };
>>>>>>> 6e5a96ff0660f2fe5ff9d2d1fed032bb9f38b3af
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
<<<<<<< HEAD
              ${
                currentDate.getTime() - productDate.getTime() <= 3600000
                  ? "New"
                  : `${
                      element.discountPercent
                        ? `${element.discountPercent}%`
                        : ""
                    }`
              }
=======
              ${currentDate.getTime() - productDate.getTime() <= 3600000
            ? "New"
            : `${element.discountPercent
              ? `${element.discountPercent}%`
              : ""
            }`
          }
>>>>>>> 6e5a96ff0660f2fe5ff9d2d1fed032bb9f38b3af
            </p>
          </button>
          <i name="${element.id}" class="${
          JSON.parse(localStorage.getItem("favouritesLocal")) &&
          JSON.parse(localStorage.getItem("favouritesLocal")).find(
            (x) => x.id == element.id
          )
            ? "fa-solid"
            : "fa-regular"
        } fa-heart faveBtns" style="position: absolute; top: 24px; right: 30px ; width:22px;height:22px; color:#DF4244;"></i>
        </div>
      </div>
    </div>
      `;
      }
      bswiper.update();

      //discount-products
      if (element.discountPercent > 0) {
        discountSwiperWrapper.innerHTML += `
        <div class="swiper-slide">
        <div class="card">
        <a href="product-page.html?id=${element.id}">
        <img
           src="${element.image}"
           class="card-img-top img-fluid"
           alt="..."  
           style="width: 218px; height: 243px; margin: 11px 71px 16px 71px"
         />
         </a>
         <div class="card-body">
           <div class="star-rating">
             ${
               element.rating >= 1
                 ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
                 : ""
             }
             
             ${
               element.rating >= 2
                 ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
                 : ""
             }
             
             ${
               element.rating >= 3
                 ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
                 : ""
             }
 
             ${
               element.rating >= 4
                 ? `<span class="star" style="color: #ffdd45">&#9733;</span>`
                 : ""
             }
 
             
             ${
               element.rating == 5
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
             ${element.name}<br>${element.description}
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
                 ${
                   element.discountPercent !== 0
                     ? `$${(
                         element.price -
                         element.price * (element.discountPercent / 100)
                       ).toFixed(2)}`
                     : `$${element.price.toFixed(2)}`
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
               ${
                 element.discountPercent !== 0
                   ? `From $${element.price.toFixed(2)}`
                   : ""
               }
               </span>
             </p>
           </div>
           <button
             class="btn"
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
               background-color: ${
                 currentDate.getTime() - productDate.getTime() <= 3600000
                   ? "#43D167"
                   : `${element.discountPercent ? "#DF4244" : "transparent"}`
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
               ${
                 currentDate.getTime() - productDate.getTime() <= 3600000
                   ? "New"
                   : `${
                       element.discountPercent
                         ? `${element.discountPercent}%`
                         : ""
                     }`
               }
             </p>
           </button>
           <i name="${element.id}" class="${
          JSON.parse(localStorage.getItem("favSingers")) &&
          JSON.parse(localStorage.getItem("favSingers")).find(
            (x) => x.id == element.id
          )
            ? "fa-solid"
            : "fa-regular"
        } fa-heart faveBtns" style="position: absolute; top: 24px; right: 30px ; width:22px;height:22px; color:#DF4244;"></i>
         </div>
       </div>
     </div>
      `;
      }
      dswiper.update();

      // faves
      let favourites = document.querySelectorAll(".faveBtns");
      for (let favebtn of favourites) {
        favebtn.addEventListener("click", function () {
          let faveId = this.getAttribute("name");
          if (this.classList.contains("fa-regular")) {
            this.classList.replace("fa-regular", "fa-solid");
            fetch("http://localhost:3000/products/" + faveId)
              .then((res) => res.json())
              .then((data) => {
                let favouritesLocal = JSON.parse(
                  localStorage.getItem("favouritesLocal")
                );
                if (!favouritesLocal) {
                  favouritesLocal = [data];
                } else {
                  let existingItem = favouritesLocal.findIndex(
                    (item) => item.id === data.id
                  );
                  if (existingItem !== -1) {
                    console.log("Item already exists in the basket.");
                  } else {
                    favouritesLocal.push(data);
                  }
                }
                localStorage.setItem(
                  "favouritesLocal",
                  JSON.stringify(favouritesLocal)
                );
              });
          } else if (this.classList.contains("fa-solid")) {
            this.classList.replace("fa-solid", "fa-regular");
            let favouritesLocal = JSON.parse(
              localStorage.getItem("favouritesLocal")
            );
            if (favouritesLocal) {
              let id = this.getAttribute("name");
              let existingItemIndex = favouritesLocal.findIndex(
                (item) => item.id == id
              );
              console.log(existingItemIndex);
              if (existingItemIndex !== -1) {
                favouritesLocal.splice(existingItemIndex, 1);
                localStorage.setItem(
                  "favouritesLocal",
                  JSON.stringify(favouritesLocal)
                );
              }
            }
          }
        });
      }
    });

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
  });


// sign up and account in header
let signUp = document.querySelector(".sign-up");
let logOut = document.querySelector(".loging-out");
let account = document.querySelector(".account");
console.log(signUp);
let userArr;
let localUser = JSON.parse(localStorage.getItem("users"));
let sessionUser = JSON.parse(sessionStorage.getItem("users"));
if (localUser) {
  userArr = [...localUser];
} else if (sessionUser) {
  userArr = [...sessionUser];
} else {
  userArr = [];
}
console.log(userArr);
if (localUser || sessionUser) {
  account.classList.replace("d-none", "d-block");
  logOut.classList.replace("d-none", "d-block");
  signUp.classList.add("d-none");
  logOut.addEventListener("click", function (e) {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("users");
        sessionStorage.removeItem("users");
        Swal.fire("Logged out!", "success");
        document.location.href = "index.html";
      }
    });
  });
}


// search input
let searchProduct = document.querySelector(".search-product")
let inputSection = document.querySelector(".input-section .containerr")
searchProduct.addEventListener("keyup", function (e) {
  e.preventDefault();
  inputSection.innerHTML = "";
  axios.get("http://localhost:3000/products").then((res) => {
    let products = res.data;
    products.forEach((bag) => {
      if (bag.name.toLowerCase().trim().includes(searchProduct.value.toLowerCase().trim())) {
        let productDate = new Date(bag.createDate);
        let currentDate = new Date();
        inputSection.parentElement.classList.remove("d-none")
        inputSection.innerHTML += `
          <div class="card" style="width: 360px;
          height: 508px;margin-top:30px" >
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
          `
      }

      //  adding to fav

    });

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
  });
});
