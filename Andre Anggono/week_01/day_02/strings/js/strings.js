// Strings
// DrEvil Function
const drEvil = function (amount) {
	let result = `${amount} dollars`;

	if (amount === 1000000) {
		result += " (pinky)";
	}

	return result;
};

// MixUp Function
const mixUp = function (s1, s2) {
	const firstMixedWord = s2.substr(0, 2) + s1.substr(2);
	const secondMixedWord = s1.substr(0, 2) + s2.substr(2);
	return `${firstMixedWord} ${secondMixedWord}`;
};

// FixStart Function
const fixStart = function (string) {
	// Initialising the result variable with the first character of the string argument as this will not be affected / formatted.
	let result = string[0];

	// To accomodate for single character input as the argument. Return the single character wihtout processing it.
	if (string.length > 1) {
		for (let i = 1; i < string.length; i++) {
			// Comparing character of string args at i'th location starting from index 1 with value from index 0.
			// If matches, add * to the result variable. Otherwise add the character of string args at i'th location.
			if (string[i] === string[0]) {
				result += "*";
			} else {
				result += string[i];
			}
		}
	}

	return result;
};

// Verbing Function
const verbing = function (verb) {
	let result = verb;

	if (verb.length >= 3) {
		if (verb.substr(-3) === "ing") {
			result += "ly";
		} else {
			result += "ing";
		}
	}

	return result;
};

// Not Bad Function
const notBad = function (string) {
	const indexOfNot = string.indexOf("not");
	const indexOfBad = string.indexOf("bad");
	let result = string;

	if (indexOfNot !== -1 && indexOfBad !== -1 && indexOfBad > indexOfNot) {
		result = `${string.substr(0, indexOfNot)}good${string.substr(indexOfBad + 3)}`;
	}

	return result;
};
