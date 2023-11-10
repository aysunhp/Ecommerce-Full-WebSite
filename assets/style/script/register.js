let form = document.querySelector(".register-form");
let emailInp = document.querySelector(".email-inp");
let emailError = document.querySelector(".email-error")
let fnameInp = document.querySelector(".fname-inp");
let lnameInp = document.querySelector(".lname-inp");
let passwordInp = document.querySelector(".password-inp");
let balanceInp = document.querySelector(".balance-inp");
let continueBtn = document.querySelector(".continue-btn")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    axios.get("http://localhost:3000/users").then((res) => {
        let users = res.data;
        let duplicateEmail = users.find((x) => x.email == emailInp.value);
        if (duplicateEmail) {
            emailError.classList.remove("d-none")
        } else {
            axios.post("http://localhost:3000/users", {
                name: fnameInp.value,
                surname: lnameInp.value,
                email: emailInp.value,
                password: passwordInp.value,
                balance: balanceInp.value,
                admin: false,
                orders: [],
                basket: [],
                favourites: []

            });
            document.location.href = "login.html";
        }
    });
});