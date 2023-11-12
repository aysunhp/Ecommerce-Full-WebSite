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

let myAccountFavs = document.querySelector(".favorites");
let faveTab = document.querySelector(".faveTab");
let favouritesLocal = JSON.parse(localStorage.getItem("favouritesLocal"));
faveTab.addEventListener("click", function () {
  myAccountFavs.innerHTML = "";
  favouritesLocal.forEach(function (element) {
    let productDate = new Date(element.createDate);
    let currentDate = new Date();
    myAccountFavs.innerHTML += `
        <div class="card">
       <a href="product-page.html?id=${
         element.id
       }" style="overflow: hidden; width: 218px; height: 243px;">
       <img
          src="${element.image}"
          class="card-img-top img-fluid"
          alt="..."  
          style="width: 218px; height: 243px; margin: 11px 71px 16px 24px"
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
              margin:0;
              padding:0;
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
                margin:0;
              padding:0;
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
                padding:0;
                margin:0;
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
          <i class="fa-solid fa-xmark removeBtn" name="${
            element.id
          }"style="position: absolute; top: 24px; right: 25px ; font-size:1.5em;"></i>
        </div>
        `;
    removeBtns = document.querySelectorAll(".removeBtn");
    for (let btns of removeBtns) {
      btns.addEventListener("click", function () {
        this.parentElement.parentElement.remove();
        favouritesLocal.splice(btns.name, 1);
        localStorage.setItem(
          "favouritesLocal",
          JSON.stringify([...favouritesLocal])
        );
      });
    }
  });
});
