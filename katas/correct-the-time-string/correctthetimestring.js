/**

	A new task for you!

	You have to create a method, that corrects a given time string. There was a problem in addition, so many of the time strings are broken. Time-Format is european. So from "00:00:00" to "23:59:59". 

	Some examples:

	"09:10:01" -> "09:10:01"
	"11:70:10" -> "12:10:10"
	"19:99:99" -> "20:40:39"
	"24:01:01" -> "00:01:01"

	If the input-string is null or empty return exactly this value! (empty string for C++)
	If the time-string-format is invalid, return null. (empty string for C++)

	Have fun coding it and please don't forget to vote and rank this kata! :-)

	I have created other katas. Have a look if you like coding and challenges.

*/


function timeCorrect(timestring) {

	function format(num) {
		return ((num<10) ? '0'+num : num);
	}

	
	var patternTimeString = /^([0-9][0-9]):[0-9][0-9]:[0-9][0-9]$/;
	
	if(typeof(timestring) == null || timestring === '')
		return timestring;

	if(!patternTimeString.test(timestring))
		return null;

	var tsArray = timestring.split(':');
	var seconds = parseInt(tsArray[0])*3600 + parseInt(tsArray[1])*60 + parseInt(tsArray[2]);
	
	tsArray[0] = parseInt(seconds / 3600) % 24;
	tsArray[1] = parseInt((seconds - (3600 * tsArray[0])) / 60) % 60;
	tsArray[2] = seconds % 60;

	for(var i = 0; i < tsArray.length; i++) {
		tsArray[i] = format(tsArray[i], 10);
	}
	return tsArray.join(':');
}

console.log(timeCorrect('25:40:70'));