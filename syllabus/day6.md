## [30 minutes] Morning challenge

## [30 minutes] Housekeeping
- How to properly save files so that they do not create merge conflicts:
	* 1. Create a new folder called "[YOUR_NAME]" (where YOUR_NAME = Melanie or Maria or Fawzi, etc.) 
	* 2. If you are editing a lecture or homework file, please save it in this folder
	* 3. Add this folder to your .gitignore file so that it is not pushed online every time you update it

- How to fetch new code and resolve existing merge conflicts:
	* `cd ~/projects/lab`
	* `git fetch upstream master`
	* `git merge upstream/master`

- If you get a message that says you have not committed your code, please commit by:
	* `git add .`
	* `git commit -m "write your own message here"`
	* Then proceed with the merge process. 

It is important to read all of the messages in the Terminal when you are using git. They give you instructions on how to continue when you're stuck.

## [30 minutes] Javascript Classes
- Classes are special Javascript functions that use object-oriented programming concepts

## [30 minutes] React Introduction

## [60 minutes] React Tutorial

## Homework
- React freecodecamp (https://learn.freecodecamp.org/) until `Create a React Component` 
- Write a function that creates a Person object, using the code in`lecture/classes.js` as an example. Use both a function constructor and a class declaration. Give the person three properties: `name`, `age`, and `talent`. Give the person two methods `sayHello` and `walk`. 
```
var Person = function(name, age, talent) {
	// your code here


}

class PersonClass {
	constructor(name, age, talent) {
		// your code here
		

  	}
	// and here!


}
```