// Learning objectives: data types, variables, functions

var classList = [
	"Natalie", "Maria A.", "Ellen", "Maria M.", "Hala", 
	"Salar", "Lubov", "Shrouq", "Diana", "Dania", "Nadeen", 
	"Amjad", "Christo", "Fawzi", "Judeh", "Moh", "Miray", "Ibrahim", "Anton"
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

	for (var student in classObj) {
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

	console.log(seatingChart);
}

randomizeSeating(classObj);