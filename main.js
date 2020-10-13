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

const email = document.getElementById("email");

email.onkeyup = function validateEmail() {
    console.log("character typed: ", email.value);

    // patterns
    // const commAtChar = String.fromCharCode(64);
    const commAtChar = "@";
    console.log(commAtChar, typeof commAtChar);
    const dotChar = ".";

    const atCharElement = document.getElementById("at-character");
    const dotCharElement = document.getElementById("dot-character");
    const minCharsEmailElement = document.getElementById("min-email-chars");

    if (email.value.includes(commAtChar)) {
        console.log(
            password.value,
            commAtChar,
            "includes @:",
            password.value.includes(commAtChar)
        );

        atCharElement.classList.remove("invalid");
        atCharElement.classList.add("valid");
    } else {
        console.log(
            password.value,
            "includes @:",
            password.value.includes(commAtChar)
        );

        atCharElement.classList.add("invalid");
        atCharElement.classList.remove("valid");
    }

    // at least 2 characters before @

    if (email.value.includes(dotChar)) {
        dotCharElement.classList.remove("invalid");
        dotCharElement.classList.add("valid");
    } else {
        dotCharElement.classList.add("invalid");
        dotCharElement.classList.remove("valid");
    }

    // . is after the @ character

    if (email.value.length >= 6) {
        minCharsEmailElement.classList.remove("invalid");
        minCharsEmailElement.classList.add("valid");
    } else {
        minCharsEmailElement.classList.add("invalid");
        minCharsEmailElement.classList.remove("valid");
    }
};
