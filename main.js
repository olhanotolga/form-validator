const password = document.getElementById("password");
const email = document.getElementById("email");

console.log("working!");

const showSuccess = (element) => {
	element.classList.remove("invalid");
    element.classList.add("valid");
}
const reset = (element) => {
	element.classList.remove("valid");
    element.classList.add("invalid");
}

// VALIDATE PASSWORD

password.onkeyup = function validatePassword() {
    console.log("letter typed: ", password.value);

    // regular expressions
    const lowercaseLetterPattern = /[a-z]/;
    const uppercaseLetterPattern = /[A-Z]/;
    const numbersPattern = /[0-9]/;

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
	const noDotCommatTogetherPattern = /[^.]@[^.]/g;
	const twoDotsTogetherPattern = /\.\./g;

	// DOM elements — list items:
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
	if (commatCharPattern.test(email.value) && dotCharPattern.test(email.value) && noDotCommatTogetherPattern.test(email.value)) {
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
};
