// Write a function firstReverse that takes a single string parameter and returns the string in reverse order.

	var firstReverse = function(string){

		console.log( string.split(' ').reverse().join(' ') )
		return string.split(' ').reverse().join(' ');

	};

	firstReverse('the cat ran fast');


// Write a function swapCase that takes a single string parameter and swaps the case of each character. 
// For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols 
// stay the way they are.

var swapCase = function(string){
	
};

swapCase('Hello World');


// Bonus: Write a function letterCount that takes a single string parameter and returns the first word
// with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should 
// return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If 
// there are no words with repeating letters return -1. Words will be separated by single spaces.