/*

How much is the fish! (- Scooter )

The ocean is full of colorful fishes. We as programmers want to know the hexadecimal value of these fishes.

Task

Take all hexadecimal valid characters (a,b,c,d,e,f) of the given name and XOR them. Return the result as an integer.

Input

The input is always a string, which can contain spaces, upper and lower case letters but no digits.

Example

fisHex("redlionfish") -> e,d,f -> XOR -> 12
*/

function fisHex(name) {
  var defs = { 'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15 },
      pattern = /[^a-f]/g,
      hexsValues = name.toLowerCase().replace(pattern, ''),
      result = 0,
      index = 0;

  for( ; index < hexsValues.length; index++ ) {
    result ^= defs[hexsValues[index]];
  }
  return result;
}
