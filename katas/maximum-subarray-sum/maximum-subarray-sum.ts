/**
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

let maxSequence: any = function( arr: number[] ): number {
	// localizar el num. máximo del array, coger los de la izquierda hasta encontrar negativo, coger derecha hasta final

	/*function allNegatives ( list: number[] ): boolean {
		let result: boolean = true;
		for ( let num of list ) {
			if ( ( num * -1 ) < 0 ) {
				result = false;
				break;
			}
		}

		return result;
	}*/

	// function hasNegatives( list: number[] ): boolean {
	// 	let result: boolean = false;
	// 	for ( let num of list ) {
	// 		console.log(`numero actual en hasNegatives: ${num}`);
	// 		if ( Math.abs(num) > num ) {
	// 			result = true;
	// 			break;
	// 		}
	// 	}
	// 	console.log(`fin bucle hasNegatives: ${result}`)
	// 	return result;
	// }

	// function hasPositives ( list: number[] ): boolean {
	// 	let result: boolean = false;
	// 	for ( let num of list ) {
	// 		if ( ( num * -1 ) < 0) {
	// 			result = true;
	// 			break;
	// 		}
	// 	}
	// 	return result;
	// }
	function allPositives ( list: number[] ): boolean {
		let result: boolean = true;
		for ( let num of list ) {
			if ( num < 0 ) {
				result = false;
				break;
			}
		}

		return result;
	}

	function locateMax ( a: number[] ): number {
		let max: number = 0;
		for ( let num of a) {
			if (num > max) {
				max = num;
			}
		}
		return max;
	}

	function sum( list:number[] ): number {
		let result: number = 0;
		for ( let num of list ) {
			result += num;
		}
		return result;
	}

	console.log(`----------array: [${arr}]----------`);

	//	if sum of whole array is negative, return 0
	if( sum(arr) < 0 ) {
		return 0;
	}

	//	check empty array
	if ( arr.length === 0 ) {
		return 0;
	}

	if ( allPositives(arr) ) {
		//	The list has only positive numbers, return full array sum
		console.log('no tiene negativos');
		return
		 sum(arr);
	}

	/*if (allPositives(arr) && allNegatives(arr)) {
		//	List is filled with one or more zeros
		return 0;
	}*/
	
	//	List has positive and negative numbers, handle them!
	console.log('tiene positivos y negativos');
	let maxArray = locateMax(arr);
	console.log(`maximo: ${maxArray}`);

	return arr[0];

};

//maxSequence([-1,0,1]);
console.log(maxSequence([0]));
console.log(maxSequence([-1,-5]));
console.log(maxSequence([-1,-5,0]));
console.log(maxSequence([-1,-5,0,5]));
console.log(maxSequence([3,5,-1]));
console.log(maxSequence([3,5]));
console.log(maxSequence([3,5,0]))