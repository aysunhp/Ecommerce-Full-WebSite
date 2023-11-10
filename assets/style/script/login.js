let form = document.querySelector(".login-form");
let emailInp = document.querySelector(".email-inp");
let passwordInp = document.querySelector(".password-inp");
let emailError = document.querySelector(".email-error")
let storage = document.querySelector("#storage");

let usersArr;
if (JSON.parse(localStorage.getItem("users"))) {
    usersArr = JSON.parse(localStorage.getItem("users"));
} else {
    usersArr = [];
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log(storage.checked)
    axios.get("http://localhost:3000/users").then((res) => {
        let data = res.data;
        console.log(data);
        data.forEach((user) => {
            if (
                user.email == emailInp.value &&
                user.password == passwordInp.value
            ) {
                if (storage.checked) {
                    let obj = {};
                    obj.isLogged = true;
                    obj.userId = user.id;
                    usersArr.push(obj);
                    localStorage.setItem("users", JSON.stringify(usersArr));
                } else {
                    let obj = {};
                    obj.isLogged = true;
                    obj.userId = user.id;
                    usersArr.push(obj);
                    sessionStorage.setItem("users", JSON.stringify(usersArr));
                }
                document.location.href = "index.html";
            } else if (emailInp.value.trim() == "" && passwordInp.value.trim() == "") {
                emailError.classList.remove("d-none")
            }
            else {
                emailError.classList.remove("d-none")
            }
            // emailInp.value = "";
            // passwordInp.value = "";
        });
    });
});

