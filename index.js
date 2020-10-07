const password = document.getElementById("password");
console.log("working!");

password.onkeyup = function validatePassword() {
    console.log("letter typed: ", password.value);

    // regular expressions
    const lowercaseLetterPattern = /[a-z]/;
    const uppercaseLetterPattern = /[A-Z]/;
    const numbersPattern = /[0-9]/;
    // const minCharactersPattern = /.{8}/;

    const lowercaseElement = document.getElementById("lowercase");
    const uppercaseElement = document.getElementById("uppercase");
    const numberElement = document.getElementById("number");
    const minCharsElement = document.getElementById("minChars");

    if (lowercaseLetterPattern.test(password.value)) {
        lowercaseElement.classList.remove("invalid");
        lowercaseElement.classList.add("valid");
    } else {
        lowercaseElement.classList.add("invalid");
        lowercaseElement.classList.remove("valid");
    }

    if (uppercaseLetterPattern.test(password.value)) {
        uppercaseElement.classList.remove("invalid");
        uppercaseElement.classList.add("valid");
    } else {
        uppercaseElement.classList.add("invalid");
        uppercaseElement.classList.remove("valid");
    }

    if (numbersPattern.test(password.value)) {
        numberElement.classList.remove("invalid");
        numberElement.classList.add("valid");
    } else {
        numberElement.classList.add("invalid");
        numberElement.classList.remove("valid");
    }

    if (password.value.length >= 8) {
        minCharsElement.classList.remove("invalid");
        minCharsElement.classList.add("valid");
    } else {
        minCharsElement.classList.add("invalid");
        minCharsElement.classList.remove("valid");
    }
};
