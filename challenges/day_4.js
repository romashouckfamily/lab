// Warm Up Challenge for day 4
// Create an array of numbers
// Create a functions that returns a new array, with only numbers less than 5 from the previous array
// Your code here:
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function lessthanfive(list){
	//create an empty array to put the items less than 5
	var newArr = [];
	//for loops that goes through each of the item 
	for(var i=0;i<list.length;i++){
	//if statement that checks if each item is less than 5
	if(list[i]<5){
	//push item to new array
	newArr.push(list[i]);
	//return new array
  }
}
  return newArr;
}
console.log(lessthanfive(array));









// Extra Credit: use .forEach to complete this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Your code here:









// Extra Extra Credit: Use .filter to complete this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Your code here:





