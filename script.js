let form = document.querySelector("#form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
// const expression = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const expression = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;


form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (username.value.length < 3 || username.value === "") {
        let confirmation1 = document.getElementById("confirmation1")
        confirmation1.textContent = "Veuillez entrez un username de minimum 3 caracteres :("
        confirmation1.style.color = "#e74c3c"
        username.style.border = "2px solid #e74c3c"
    } else if (username.value.length > 15) {
        let confirmation1 = document.getElementById("confirmation1")
        confirmation1.textContent = "Veuillez entrez un username qui ne dépasse pas 15 caracteres :("
        confirmation1.style.color = "#e74c3c"
        username.style.border = "2px solid #e74c3c"
    } else {
        username.style.border = "2px solid #2ecc71"
        confirmation1.textContent = ""

    }


    if (expression.test(email.value)) {
        let confirmation2 = document.getElementById("confirmation2")
        email.style.border = "2px solid #2ecc71"
        confirmation2.textContent = ""

    } else {
        let confirmation2 = document.getElementById("confirmation2")
        confirmation2.textContent = "Veuillez entrez une adresse E-mail valide"
        confirmation2.style.color = "#e74c3c"
        email.style.border = "2px solid #e74c3c"
    }

    if (password.value === "" || password.value.length < 6) {
        let confirmation3 = document.getElementById("confirmation3");
        confirmation3.textContent = "Veuillez entrez un mot de passe d'au moins 6 caracteres";
        confirmation3.style.color = "#e74c3c";
        password.style.border = "2px solid #e74c3c"
    } else {
        password.style.border = "2px solid #2ecc71"
        confirmation3.textContent = ""
    }

    if (password.value !== password2.value || password2.value == "") {
        let confirmation4 = document.getElementById("confirmation4");
        confirmation4.textContent = " Veuillez confirmer avec le mot de passe saisi plus haut"
        confirmation4.style.color = "#e74c3c";
        password2.style.border = "2px solid #e74c3c"
    } else {
        password2.style.border = "2px solid #2ecc71"
        confirmation4.textContent = ""
    }
})