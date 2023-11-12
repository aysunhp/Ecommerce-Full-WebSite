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
} else {
  userArr = [];
}
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

let basketArr;
let localBasket = JSON.parse(localStorage.getItem("basket"));
if (localBasket) {
  basketArr = [...localBasket];
} else {
  basketArr = [];
}
let shoppingItems = document.querySelector(".shoppingItems");
axios.get("http://localhost:3000/products").then((res) => {
  let data = res.data;
  data.forEach((bag) => {
    basketArr.forEach((item) => {
      if (bag.id == item.id) {
        shoppingItems.innerHTML += `
                    <div class="shoppingItem">
                    <div class="image-wrapper">
                      <img
                        src="${bag.image}"
                        alt=""
                        style="width: 140px;
                        height: 149px;"
                      />
                    </div>
                    <div class="info">
                      <h1>${bag.name}</h1>
                      <p>
                        Size: XS <span style="margin-left: 15px">Color: ${
                          bag.color
                        }</span>
                      </p>
                      <p>Delivery: 25-32 days</p>
                      <p>Quality</p>
                      <p>Quantity : <span>${item.quantity}</span></p>
                    </div>
                    <div class="shoppingItem-right">
                      <div class="price">
                        <p style="font-weight:700">US $ <span style="font-weight:700;color:black;font-size:18px">${
                          (bag.price -
                            (bag.price * bag.discountPercent) / 100) *
                          item.quantity
                        }</span></p>
                      </div>
                      <div class="buttons">
                        <button class="faveBtn">
                          <i class="fa-regular fa-heart" style="color:red"></i> Favorite
                        </button>
                        <button class="faveBtn delete" name=${bag.id}>
                          <i class="fa-regular fa-trash-can"></i> Remove
                        </button>
                      </div>
                    </div>
                  </div>`;
      }

      // total price of basket
      let totalPrices = document.querySelectorAll(".basket-total-price");
      totalPrices.forEach((totalPrice) => {
        let price = Math.round(
          basketArr.reduce((total, item) => {
            let addedBag = data.find((bag) => bag.id == item.id);
            return (
              total +
              (addedBag.price -
                (addedBag.price * addedBag.discountPercent) / 100) *
                item.quantity
            );
          }, 0)
        );
        console.log(price);
        totalPrice.innerText = price;
      });

      let deleteBtns = document.querySelectorAll(".delete");
      deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", function () {
          Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              let updatedBasket = basketArr.filter((x) => x.id != this.name);
              let totalPrices = document.querySelectorAll(
                ".basket-total-price"
              );
              totalPrices.forEach((totalPrice) => {
                let removed = data.find((bag) => bag.id == item.id);
                let removedQuantity =
                  this.parentElement.parentElement.previousElementSibling
                    .children[4].lastChild.innerText;
                let removedPrice =
                  this.parentElement.parentElement.parentElement.children[2]
                    .children[0].children[0].children[0].innerText;
                let price =
                  this.parentElement.parentElement.parentElement.parentElement
                    .nextElementSibling.children[0].children[0].children[2]
                    .children[1].children[0].innerText;
                console.log(removedQuantity);
                console.log(price);
                console.log(removedPrice);
                price = price - Math.trunc(removedPrice * removedQuantity);
                totalPrice.innerHTML = price;
              });

              this.parentElement.parentElement.parentElement.remove();
              localStorage.setItem(
                "basket",
                JSON.stringify([...updatedBasket])
              );

              // basket_total.textContent = totalPrice;
              Swal.fire("Deleted!", "success");
            }
          });
        });
      });
    });
  });
});

// confirm button
// let quantity = basketData ? basketData.quantity : 0;
// console.log(quantity);

let quantity = basketArr.reduce((total, item) => {
  return total + item.quantity;
}, 0);
console.log(quantity);

let confirmBtn = document.querySelector(".confirmBtn");
confirmBtn.addEventListener("click", function (e) {
  console.log(this.parentElement);
  e.preventDefault();
  let basketTotal =
    this.parentElement.previousElementSibling.children[0].children[2]
      .children[1].children[0];
  let localUser = JSON.parse(localStorage.getItem("users"));
  let sessionUser = JSON.parse(sessionStorage.getItem("users"));
  if (localUser || sessionUser) {
    axios.get("http://localhost:3000/users").then((res) => {
      let users = res.data;
      if (localUser) {
        userArr = [...localUser];
      } else {
        userArr = [...sessionUser];
      }
      userArr.forEach((elem) => {
        let user = users.find((item) => item.id == elem.userId);
        console.log(user);
        // balance
        if (user.balance < basketTotal.innerText) {
          Swal.fire({
            position: "bottom-end",
            icon: "error",
            title: "Your balance is not enough",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          let newBalance = user.balance - basketTotal.innerText;
          axios.patch(` http://localhost:3000/users/${user.id}`, {
            balance: newBalance,
          });

          if (!user.orders) {
            user.orders = [];
          }
          // order.push(obj);
          axios.patch(`http://localhost:3000/users/${user.id}`, {
            orders: [
              ...user.orders,
              {
                quantity: quantity,
                totalPrice: basketTotal.innerText,
                orderDate: new Date(),
                id: Math.random().toString(16).slice(2),
              },
            ],
          });
          basketTotal.innerText = 0;
          shoppingItems.innerHTML = "";
          shoppingItems.innerHTML = `<h2 class="text-danger m-3">There is not any product</h2>`;
          localStorage.removeItem("basket");

          Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "Your basket sended to check",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "You have to login first!",
      footer: '<a href="login.html">Login now</a>',
    });
  }
});
