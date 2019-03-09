function reverseString(str) {

	str = str.split(""); 
	console.log(str)

	//convert 'jQuery' to array
	str = str.reverse(); 
	console.log(str)

	//reverse 'jQuery' order 
	str = str.join(""); 
	console.log(str)

	//then join the reverse order values together	
	console.log(str)
}

reverseString("fawzi")
