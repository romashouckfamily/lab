var run = function (){

	var numbers = [3,7,8,9,0,3,];
	var count = 0;
	numbers.forEach(
		function(c){
			var isDivisible = isDivisibleBy3(c);
			Println('The number {0} is divisivle by 3?{1}'.format(c,isDivisible));
			isdivisible?'Purple':'Blue'
			If (Isdivisible)
		}	count++;
	
	Println ();
	println('There are {0}numbers divisible by three in array {1}'
		.format(count,numbers));
		var isDivisibleBy3 = function(number){
			return number % 3 === 0
			

		}
		


 //Println is a method of java.io.print stream 'it prints a message to out put on the new line'
 //it returns 'the first operand modulo the second operand,first to get as close to zero'
 //Array object lets you store multiple values in a single variable
 //[]--> new list
// for(var i = 0; i < list,lenght; i++)
//list [0] [0] for first letter to check it :) i=3ada?
//qlist.push() so push is to add to an array
//var  or let for indenifing
//Without the var you create a global, and globals are a fantastic way to have different functions overwriting each others variables (i.e. they make code a pain to maintain).
//Without the var you create a global, and globals are a fantastic way to have different functions overwriting each others variables (i.e. they make code a pain to maintain).
//Without the var you create a global, and globals are a fantastic way to have different functions overwriting each others variables (i.e. they make code a pain to maintain).

//With the var, the scope of the variable is limited to the current function (and anything inside it — it is possible to nest functions).

//Google Adsense uses globals because it splits scripts into two distinct parts (one local and one remote). A cleaner approach would be to call a function defined in the remote script and pass the parameters as arguments instead of having it pick them up from the global scope.