// Learning objectives: data types, variables, functions
// Remember: What is an array? 
// How do you write a for loop?
// 
var classList = [
	"Natalie", "Maria A.", "Ellen", "Maria M.", "Hala", 
	"Salar", "Lubov", "Shrouq", "Diana", "Dania", "Nadeen", 
	"Amjad", "Christo", "Fawzi", "Judeh", "Moh", "Miray", "Ibrahim", "Anton", "Ramiz"
	];

// input: array of student names: ["Ibrahim"]
// output: object with student and school
// sample output: { "ibrahim": "jsb" }
function convertIntoObject(classList) {
	var jsb = ["Fawzi", "Judeh", "Moh", "Miray", "Ibrahim", "Anton", "Lubov"];
	var ahliya = ["Shrouq", "Diana", "Dania", "Nadeen", "Amjad"];
	var stJosephs = ["Natalie", "Maria A.", "Ellen", "Maria M.", "Hala", "Salar"];
	var bethlehemU = [ "Christo"];

	var newList = {};

	// first type of for loop, this is for looping through ARRAYS
	for (var i = 0; i < classList.length; i++) {
		// classList[i] is Natalie, for example
		var name = classList[i];
		var school;
		// jsb
		if (jsb.includes(name)) {
			school = "jsb";
		// ahliya
		} else if (ahliya.includes(name)) {
			school = "ahliya";
		// stJosephs
		} else if (stJosephs.includes(name)) {
			school = "stJosephs";	
		// bethlehem u
		} else if (bethlehemU.includes(name)) {
			school = "bethlehemU";
		// broken
		} else {
			school = "broken";
		}
		
		newList[name] = school;
	}
	return newList;
}

var classObj = convertIntoObject(classList);

function randomizeSeating(classObj) {
	var seatingChart = {
		table1: [], //6
		table2: [], //6
		table3: [], //4
		table4: [] //4
	};

	// second type of for loops, this is for looping through OBJECTS
	for (var student in classObj) {
		// choose a random number between 1 and 4
		var random = Math.ceil(Math.random() * 4);

		// console.log(classObj[student]);
		// console.log(random);

		if (random == 1) {
			seatingChart["table" + random.toString()].push(student);
		}

		if (random == 2) {
			seatingChart["table" + random.toString()].push(student);
		}

		if (random == 3) {
			seatingChart["table" + random.toString()].push(student);
		}

		if (random == 4) {
			seatingChart["table" + random.toString()].push(student);
		}
	}

	//console.log(seatingChart);
}

//randomizeSeating(classObj);


function randomizeSeating2(classList) {
	var numSeats = 20;
	var seatingChart = [];

	for (i = 0; i < numSeats; i++) {
		// choose one student randomly from classList array
		var randomPosition = Math.floor(Math.random() * classList.length);
		var student = classList[randomPosition];

		// add student to seatingChart
		seatingChart.push(student);

		// remove student so they are not selected again
		classList.splice(randomPosition, 1);
	}
	return seatingChart;
}

var seatingChart = randomizeSeating2(classList);

function splitIntoTables(seatingChart) {
	var tableSize = [6,6,4,4];
	var tables = [];
	for (var i = 0; i < tableSize.length; i++) {
		var table = seatingChart.splice(0, tableSize[i]);
		tables.push(table);
	}
	return tables;
}

console.log(splitIntoTables(seatingChart));
/* Table groups starting on Saturday, March 9
[ [ 'Hala', 'Dania', 'Fawzi', 'Lubov', 'Anton', 'Christo' ],
  [ 'Natalie', 'Moh', 'Ramiz', 'Maria A.', 'Amjad', 'Judeh' ],
  [ 'Ibrahim', 'Miray', 'Diana', 'Salar' ],
  [ 'Nadeen', 'Maria M.', 'Shrouq', 'Ellen' ] ]
*/


// input: list of numbers [1,2,3,4,5]
// output: list of odd numbers
function filterToOdd (list) {
	var oddList = [];

	for (var i = 0; i <= list.length -1; i++) {
		console.log(list[i]);
		if (list[i] % 2 !== 0) {
			oddList.push(list[i]);
		}
	}
	//console.log(oddList);
	return oddList;
}
var odds = filterToOdd([1,2,3,4,5]);
console.log("odds: " + odds);




