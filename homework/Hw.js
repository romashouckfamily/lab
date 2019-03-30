//Is the number even?
function isEven(n) {
  return n == parseFloat(n)? !(n%2) : void 0;
}

// Use strict equality === for "is number" test
function isEvenStrict(n) {
  return n === parseFloat(n)? !(n%2) : void 0;
}
//or
var isEven = function(number) {
    
    if (number % 2 == 0){
       return(true);
    }
    else{
       return(false);    
    }
};
let number = 88;
console.log(isEven(number));
//Is the number divisible by3?
var isDivisible = function(number) {
   
    if (number % 3 == 0){
       return(true);
    }
    else{
       return(false);    
    }
};
console.log(isDivisible(99));
//Get the first 2 letters of each word
var mylist = ['Salar','Hala']
function getfirst2lettersofeachword(list) {
	var first2letter = [];
	for(var i = 0; i < list.length; i++){
		let word = list [i].substring(0,2);
		first2letter.push(word);

	}
	return first2letter ;
}
console.log(getfirst2lettersofeachword(mylist));
//undifined 
function isUndefined(value) {
	if (value === undefined) {
		return 'undefined value';
	}
	return value;
}
var name;
console.log(isUndefined(name));
//issquarenumber
function issquarenumber (num){
	var root = Math.sqrt(num);
	if (root% 1==0) {
		return true;
	} else {
		return false;
	}
}
let num1 = 8907;
console.log (issquarenumber(num1));
//ReservesString
function reversestring (string) {
	let reversedstring = '';
	for (var i = string.length - 1; i>= 0; i--){
		reversedstring += string [i]
	}
	return reversedstring;
	console.log(reversestring('Hey guys we finally did it'));
}
//indexof
var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

var searchTerm = 'dog';
var indexOfFirst = paragraph.indexOf(searchTerm);

console.log('The index of the first "' + searchTerm + '" from the beginning is ' + indexOfFirst);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log('The index of the 2nd "' + searchTerm + '" is ' + paragraph.indexOf(searchTerm, (indexOfFirst + 1)));
// expected output: "The index of the 2nd "dog" is 52"
//Puck
/* Implement pluck, which takes an array of objects and a property name, and returns an array containing the named property of each object.

pluck([{a:1}, {a:2}], 'a') // -> [1,2]
*/
function pluck(objs, name) {
    var sol = [];
    for(var i in objs){
        if(objs[i].hasOwnProperty(name)){
            // console.log(objs[i][name]);
            sol.push(objs[i][name]);
        }
    }
    return sol;
}

console.log(pluck([{a:1}, {a:2}], 'a'));