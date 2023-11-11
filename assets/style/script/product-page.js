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
console.log(userArr)
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



let id = new URLSearchParams(location.search).get("id")
console.log(id);
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

axios.get("http://localhost:3000/products").then((res) => {
    let products = res.data;

    let found = products.find((item) => item.id == id);
    console.log(found);
    productImgs.forEach((productImg) => {
        productImg.children[0].setAttribute("src", `${found.image}`);
    })
    let newPrice = found.price - (found.discountPercent * found.price / 100);
    console.log(newPrice)
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
    reviewCount.innerHTML = `${found.comment.length}`
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