/*
Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

    Python: return a list;
    JavaScript: returns an Array;
    C#: returns a string[];
    PHP: returns an array;
    C++: returns a vector<string>;
    Haskell: returns a [String];
    Ruby: returns an Array;

Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]

and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

// function towerBuilder(nFloors) {
//   // build here
//   //2*nFloors-1

//   function buildLine(length, index) {
//   	//lenght of line (2*nFloors-1), index of tower floor
//   	var line;

//   	return line;
//   }

//   var i;
//   var result = [];

//   for (i = 0; i < nFloors; i++) {
//   	var line;
//   }
// }
function towerBuilder(nFloors) {
  var spaces = nFloors-1;
  var result = [];

  for(var i = 0; i < nFloors; i++) {
    var line = "";
    var blanks = "";
    for(var k = nFloors-(i); k > 1; k--) {
      blanks += " ";
    }
    
    for(var j = 0; j < 2*i+1; j++) {
      line += "*";
    }
    
    result.push(blanks+line+blanks);
  }

  return result;
}

console.log(towerBuilder(1));