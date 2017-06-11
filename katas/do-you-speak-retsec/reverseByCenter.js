/*
Do you speak retsec?

You and your friends want to play undercover agents. In order to exchange your secret messages, you've come up with the following system: you take the word, cut it in half, and place the first half behind the latter. If the word has an uneven number of characters, you leave the middle at its previous place:

retsec examples

That way, you'll be able to exchange your messages in private.

Task

You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

Examples

reverseByCenter("agent") == "nteag" // center character is e

reverseByCenter("secret")  == "retsec" // no center character
Remarks

Don't use this to actually exchange messages in private.
*/
function reverseByCenter(s) {
	var center;
	var result;
	if ( s.length % 2 !== 0 ) {
		//	Word is uneven (odd)
		center = s[Math.ceil(s.length/2) - 1 ];
		//console.log(center);
		result = s.substring(Math.ceil(s.length/2)) + s[Math.ceil(s.length/2 - 1)];
		//result = s.substring(Math.ceil(s.length/2),  + Math.ceil(s.length/2) -1) + center;
		result += s.substring( 0, Math.ceil(s.length/2) -1 );
		console.log(result);
	} else {
		//	Word is even
		result = s.substring(Math.ceil(s.length/2));
		result += s.substring(0, Math.ceil(s.length/2) );
		console.log(result);
	}

	return result;
}

reverseByCenter('america');
reverseByCenter('seis');