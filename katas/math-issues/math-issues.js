/**
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()
*/

Math.round = function(number) {

	var decimalPart = parseInt( number.toString().split(".")[1] || "" );
	var output;

	if ( decimalPart ) {
		
		if ( parseInt(decimalPart.toString()[0]) >= 5 ) {
			decimalPart++;
			output = Math.ceil(number);
		} else {
			output = Math.floor(number);
		}
	} else {
		output = Math.floor(number);
	}

	return output;
};

Math.ceil = function(number) {

	return ( parseInt(number.toString().split(".")[1]) > 0 ) ? Math.floor(number) + 1 : Math.floor(number);
};

Math.floor = function(number) {
  return parseInt(number);
};


console.info(Math.round(0.1));
console.info(Math.round(0.4));
console.info(Math.ceil(0.5));
console.info(Math.ceil(1.0));
console.info(Math.floor(1.3));
console.info(Math.floor(1.5));