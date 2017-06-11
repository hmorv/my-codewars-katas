/*
You need to write a password generator that meets the following criteria:

6 - 20 characters long
contains at least one lowercase letter
contains at least one uppercase letter
contains at least one number
contains only alphanumeric characters (no special characters)
Return the random password as a string.

Note: "randomness" is checked by counting the characters used in the generated passwords - all characters should have less than 50% occurance. Based on extensive tests, the normal rate is around 35%.
*/
function passwordGen(){
	String.prototype.shuffle = function () {
		var a = this.split(""),
		n = a.length;

		for(var i = n - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var tmp = a[i];
			a[i] = a[j];
			a[j] = tmp;
		}
		return a.join("");
	};

	var passwordLength = Math.floor( ( Math.random() * 15 ) + 6 );
	var i = 0;
	var lowercase = 'abcdefghijklmnopqrstuvwxyz';
	var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var numbers = '1234567890';
	var password = '';
	//	At least one number:
	password = lowercase[Math.floor ( ( Math.random() * lowercase.length ) ) ];
	//	At least one lowercase char
	password += uppercase[Math.floor ( ( Math.random() * uppercase.length ) ) ];
	//	At least one uppercase char
	password += numbers[Math.floor ( ( Math.random() * numbers.length ) ) ];
	var all = lowercase + uppercase + numbers;
	for( ; i < passwordLength - 3; i++ ) {
		password += all[Math.floor( ( Math.random() * all.length) ) ];
	}
	return password.shuffle();
}

console.log(passwordGen());