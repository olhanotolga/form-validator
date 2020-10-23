const password = document.getElementById("password");
const email = document.getElementById("email");
const cardNumber = document.getElementById("cardNum");
const submitButton = document.getElementById("submitButton");

console.log("working!");

const showSuccess = (element) => {
	element.classList.remove("invalid");
    element.classList.add("valid");
}
const reset = (element) => {
	element.classList.remove("valid");
    element.classList.add("invalid");
}

// VALIDATION BOOLEANS
let isEmailValid = false;
let isPasswordValid = false;
let isCardValid = false;

// VALIDATE PASSWORD

password.onkeyup = function validatePassword() {
    console.log("letter typed: ", password.value);

    // regular expressions
    const lowercaseLetterPattern = /[a-z]/;
    const uppercaseLetterPattern = /[A-Z]/;
    const numbersPattern = /[0-9]/;

	// DOM elements
	const passwordValidationList = document.querySelectorAll("#password-validation > li");
	console.log(passwordValidationList);

    const lowercaseElement = document.getElementById("lowercase");
    const uppercaseElement = document.getElementById("uppercase");
    const numberElement = document.getElementById("number");
    const minCharsElement = document.getElementById("minChars");

    if (lowercaseLetterPattern.test(password.value)) {
		showSuccess(lowercaseElement);
    } else {
        reset(lowercaseElement);
    }

    if (uppercaseLetterPattern.test(password.value)) {
        showSuccess(uppercaseElement);
    } else {
		reset(uppercaseElement);
    }

    if (numbersPattern.test(password.value)) {
        showSuccess(numberElement);
    } else {
        reset(numberElement);
    }

    if (password.value.length >= 8) {
        showSuccess(minCharsElement);
    } else {
        reset(minCharsElement);
	}
	
	// if all elements have the class "valid", isPasswordValid = true;
	isPasswordValid = passwordValidationList.forEach(item => {
		if(item.className === "invalid") {
			console.log(false);
			return false;
		}
	})

	activateSubmitButton();
};

// VALIDATE EMAIL

email.onkeyup = function validateEmail() {
    console.log("character typed: ", email.value);

    // patterns
	// const emailPattern = /^.{1,}[^\.@]@[^\.@]{2,}\.{1}.{1,}/;
	const commatCharPattern = /@/g;
	const twoCharsBeforeCommatPattern = /^.{2,}@/;
	const twoCharsAfterCommatPattern = /@.{2,}/;
	const dotCharPattern = /\./g;
	const noDotCommatTogetherPattern = /[^\.]@[^\.]/;
	const twoDotsTogetherPattern = /\.\./g;

	// DOM elements — list items:
	const emailValidationList = document.querySelectorAll("#email-validation > li");
	console.log(emailValidationList);

	const commatCharItem = document.getElementById("commat-char");
	const twoCharsBeforeCommatItem = document.getElementById("two-before-commat");
	const twoCharsAfterCommatItem = document.getElementById("two-after-commat");
	const oneCommatItem = document.getElementById("one-commat");
	const dotCharItem = document.getElementById("dot-char");
	const maxThreeDotsItem = document.getElementById("max-three-dots");
	const noTwoDotsTogetherItem = document.getElementById("no-two-dots-together");
	const noDotCommatTogetherItem = document.getElementById("no-dot-and-commat-together");
    const minCharsEmailItem = document.getElementById("min-email-chars");

	// conditions:
	// 1 — a @ character
	if (commatCharPattern.test(email.value)) {
		showSuccess(commatCharItem);
	} else {
		reset(commatCharItem);
	}
	// 2 — 2 characters before @
	if (twoCharsBeforeCommatPattern.test(email.value)) {
		showSuccess(twoCharsBeforeCommatItem);
	} else {
		reset(twoCharsBeforeCommatItem);
	}
	// 3 — 2 characters after @
	if (twoCharsAfterCommatPattern.test(email.value)) {
		showSuccess(twoCharsAfterCommatItem);
	} else {
		reset(twoCharsAfterCommatItem);
	}
	// 4 — no more than one @ character
	if (email.value.match(commatCharPattern) && email.value.match(commatCharPattern).length === 1) {
		showSuccess(oneCommatItem);
	} else {
		reset(oneCommatItem);
	}
	// 5 — a dot character
	if (dotCharPattern.test(email.value)) {
		showSuccess(dotCharItem);
	} else {
		reset(dotCharItem);
	}
	// 6 — maximum 3 dots
	if (email.value.match(dotCharPattern) && email.value.match(dotCharPattern).length > 0 && email.value.match(dotCharPattern).length <= 3) {
		showSuccess(maxThreeDotsItem);
	} else {
		reset(maxThreeDotsItem);
	}
	// 7 — no 2 dots next to each other
	if (dotCharPattern.test(email.value) && !twoDotsTogetherPattern.test(email.value)) {
		showSuccess(noTwoDotsTogetherItem);
	} else {
		reset(noTwoDotsTogetherItem);
	}
	// 8 — no dot and @ next to each other
	if (noDotCommatTogetherPattern.test(email.value)) {
		showSuccess(noDotCommatTogetherItem);
	} else {
		reset(noDotCommatTogetherItem);
	}
	// 9 — minimum 6 characters
    if (email.value.length >= 6) {
        showSuccess(minCharsEmailItem);
    } else {
        reset(minCharsEmailItem);
	}
	
	// if all elements have the class "valid", isEmailValid = true;
	isEmailValid = emailValidationList.forEach(item => {
		if(item.className === "invalid") {
			console.log(false);
			return false;
		}
	})

	activateSubmitButton();
};

// VALIDATE CREDIT CARD NUMBER

cardNumber.onkeyup = function validateCardNumber() {
	// patterns
	const onlyNumbersPattern = /^[0-9]+$/;

	// DOM elements
	const cardValidationList = document.querySelectorAll("#card-validation > li");
	console.log(cardValidationList);

	const cardOnlyNumsEl = document.getElementById("card-only-numbers");
	const minmaxCardLengthEl = document.getElementById("minmax-card-length");
	const cardValidStartEl = document.getElementById("card-valid-start");
	const luhnFormulaEl = document.getElementById("card-luhn-formula");

	const luhnFormulaResult = cardNumberToCheck => {
		
		// ? Drop the last digit from the number. The last digit is what we want to check against
		const lastDigit = cardNumberToCheck.slice(cardNumberToCheck.length - 1);
		console.log(lastDigit);
		
		let manipulatedNumber = cardNumberToCheck.slice(0, cardNumberToCheck.length - 1);
		console.log(manipulatedNumber);

		// ? Reverse the numbers
		let cardNumberArray = manipulatedNumber.split("").reverse();
		console.log(cardNumberArray);

		// ? Multiply the digits in odd positions (1, 3, 5, etc.) by 2
		cardNumberArray = cardNumberArray.map(el => Number(el) % 2 !== 0 ? el * 2 : Number(el) );
		console.log(cardNumberArray);

		// ? Subtract 9 to all any result higher than 9
		cardNumberArray = cardNumberArray.map(el => el > 9 ? el -= 9 : el);
		console.log(cardNumberArray);

		// ? Add all the numbers together
		let reducedArr = cardNumberArray.reduce((acc, curr) => acc + curr, 0);
		console.log(reducedArr);

		// ? The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10)
		let luhnResult = Number(lastDigit) === reducedArr % 10;
		console.log(luhnResult);

		return luhnResult;
	}

	let luhnAlgorithmMatch = luhnFormulaResult(cardNumber.value);

	// only numbers
	if (cardNum.value.match(onlyNumbersPattern)) {
		showSuccess(cardOnlyNumsEl);
	} else {
		reset(cardOnlyNumsEl);
	}
	
	// between 13 and 19 characters long
	if (cardNumber.value.length >= 13 && cardNumber.value.length <= 19) {
		showSuccess(minmaxCardLengthEl);
	} else {
		reset(minmaxCardLengthEl);
	}

	// starts with number between 2 and 6
	if (Number(cardNumber.value[0]) >= 2 && Number(cardNumber.value[0]) <= 6) {
		showSuccess(cardValidStartEl);
	} else {
		reset(cardValidStartEl);
	}

	// passes the Luhn Algorithm
	if (luhnAlgorithmMatch) {
		showSuccess(luhnFormulaEl);
	} else {
		reset(luhnFormulaEl);
	}

	// if all elements have the class "valid", isCardValid = true;
	isCardValid = cardValidationList.forEach(item => {
		if(item.className === "invalid") {
			console.log(false);
			return false;
		}
	})

	activateSubmitButton();
}

console.log(isEmailValid);
console.log(isCardValid);
console.log(isPasswordValid);


function activateSubmitButton() {
	if (isEmailValid === true && isPasswordValid === true && isCardValid === true) {
		console.log("all true?", isEmailValid === true && isPasswordValid === true && isCardValid === true);
		submitButton.removeAttribute("disabled");
	} else {
		submitButton.setAttribute("disabled", true);
	}
}
// activateSubmitButton();