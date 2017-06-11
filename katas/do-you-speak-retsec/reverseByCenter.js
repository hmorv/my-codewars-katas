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
	var output,
		firstHalf,
		secondHalf;

	if ( s.length % 2 !== 0 ) {
		//	Word is uneven (odd)
		firstHalf = s.substring(Math.ceil(s.length/2));
		var center = s[Math.ceil(s.length/2) - 1 ];
		secondHalf = s.substring( 0, Math.ceil(s.length/2) -1 );
		
		output = firstHalf + center + secondHalf;
	} else {
		//	Word is even
		firstHalf = s.substring( Math.ceil( s.length/2 ) );
		secondHalf = s.substring(0, Math.ceil(s.length/2) );
		output =  firstHalf + secondHalf;
	}
	return output;
}

console.log('original word: ' + 'america, result: ' +reverseByCenter('america'));
console.log('original word: ' + 'seis, result: ' + reverseByCenter('seis'));