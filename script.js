// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Filter out companies which have more than one 'o' without the filter method.

// HİNT: Write your results in a new array.

const itCompanies = [
	'Facebook',
	'Google',
	'Microsoft',
	'Apple',
	'IBM',
	'Oracle',
	'Amazon',
	'Oppo',
];

const findCompanies = (arr) => {
	let counter = 0;
	let res = [];

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] === 'o') {
				counter++;
			}
		}
		if (counter > 1) {
			res.push(arr[i]);
		}
		counter = 0;
	}
	return res;
};

console.log(findCompanies(itCompanies));

//=============================================================================================================================

// You have a lorem ipsum paragraph but there is something wrong. Some sentences starts with lowercase letter. Make them correct. (Make all sentences start with a capital letter)
// Note: Pay attension; do not change 1.a.32 to uppercase.

loremIpsum =
	"Contrary to popular belief, Lorem Ipsum is not simply random text. it has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.a.32 and 1.a.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. this book is a treatise on the theory of ethics, very popular during the Renaissance. the first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.a.32";
