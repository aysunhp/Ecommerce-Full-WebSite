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
    data.forEach((element) => {
      let productDate = new Date(element.createDate);
      let currentDate = new Date();
      // featured
      featuredSwiperWrapper.innerHTML += `
      <div class="swiper-slide">
       <div class="card">
        <img
          src="${element.image}"
          class="card-img-top img-fluid"
          alt="..."  
          style="width: 218px; height: 243px; margin: 11px 71px 16px 71px"
        />
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
          <img
            src="./assets/images/logo/favourite.svg"
            alt=""
            style="position: absolute; top: 24px; right: 30px"
          />
        </div>
      </div>
    </div>
        `;
      fswiper.update();

      // bestseller
      bestsellerSwiperWrapper.innerHTML += `
      <div class="swiper-slide">
       <div class="card">
        <img
          src="${element.image}"
          class="card-img-top img-fluid"
          alt="..."  
          style="width: 218px; height: 243px; margin: 11px 71px 16px 71px"
        />
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
          <img
            src="./assets/images/logo/favourite.svg"
            alt=""
            style="position: absolute; top: 24px; right: 30px"
          />
        </div>
      </div>
    </div>
      `;
      bswiper.update();

      //discount-products
      if (element.discountPercent) {
        discountSwiperWrapper.innerHTML += `
      <div class="card">
          <img
            src="${element.image}"
            class="card-img-top img-fluid"
            alt="..."  
            style="width: 218px; height: 243px; margin: 11px 71px 16px 71px"
          />
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
            <img
              src="./assets/images/logo/favourite.svg"
              alt=""
              style="position: absolute; top: 24px; right: 30px"
            />
          </div>
        </div>
      `;
      }
    });
  });
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
