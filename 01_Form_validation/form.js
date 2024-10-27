// All dom part
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const messageError = document.getElementById("message-error");
const submitError = document.querySelector("button");
const fieldError = document.querySelector(".emty-fields");
let highLight = document.querySelectorAll(".highlight");

// name validation

function validateName() {
    let name = document.getElementById("user-name").value;
    if (name == 0) {
        nameError.innerHTML = `Full name required`;
        highLight[0].style.border = "2px solid lightcoral";
        return false;
    }
    else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = `Please enter correct name`;
        highLight[0].style.border = "2px solid lightcoral";
        return false
    }

    nameError.innerHTML = `<p>Your name is correct</p>`
    highLight[0].style.border = "2px solid seagreen";
    return true;
}


//  Email validation
function validateEmail() {
    let eamil = document.getElementById("user-email").value;

    if (eamil == 0) {
        emailError.innerHTML = `Full email required`;
        highLight[1].style.border = "2px solid lightcoral";
        return false
    }
    else if (!eamil.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = `Write correct email`
        highLight[1].style.border = "2px solid lightcoral";
        return false
    }
    emailError.innerHTML = `<p>valid email address</p>`
    highLight[1].style.border = "2px solid seagreen";
    return true
}

// phone validation


function validatePhone() {
    let phone = document.getElementById("user-phone").value;

    if (phone == 0) {
        phoneError.innerHTML = `Phone no. required`;
        highLight[2].style.border = "2px solid lightcoral";
        return false;
    }
    else if (phone.length !== 10) {
        phoneError.innerHTML = `Phone no. should be 10 digits`
        highLight[2].style.border = "2px solid lightcoral";

        return false;

    } else if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = `Only digit please`
        highLight[2].style.border = "2px solid lightcoral ";

        return false;

    }

    phoneError.innerHTML = `<p>Valid number</p>`
    highLight[2].style.border = "2px solid seagreen ";
    return true;

}


// validation message

function validMessage() {
    let message = document.getElementById("user-message").value;

    let count = 30;
    let left = count - message.length

    if (left > 0) {
        messageError.innerHTML = `${left} More characters required only`;
        highLight[3].style.border = "2px solid lightcoral";

        return false;
    }

    messageError.innerHTML = `<p>Correct</p>`;
    highLight[3].style.border = "2px solid seagreen";
    return true;

}

//  submit button validation
submitError.addEventListener("click", validateSubmit, false);
function validateSubmit(elem) {

    if (validateName() || validateEmail() || validatePhone() || validMessage()) {

        fieldError.style.display = "block";
        fieldError.innerHTML = `<p>Thank you for fill the form</p>`
        document.querySelector(".emty-fields p").style.color = "seagreen"
        setInterval(function () { fieldError.style.display = "none"; }, 5000)
        return false
    }


    else if (!validateName() || !validateEmail() || !validatePhone() || !validMessage()) {
        fieldError.style.display = "block";
        fieldError.innerHTML = `<p><i class="ri-error-warning-fill"></i> Please fill out all fields </p>`
        setInterval(function () { fieldError.style.display = "none"; }, 3000)
        return false;

    }

}



