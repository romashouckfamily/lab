# What do we do when we run into a problem we don't know how to solve? 
For better or worse, this happens to software engineers every day. 
We need to learn steps and tools to help us when we are stuck. 

## Things to keep in mind:
- Go slowly and read everything. Coding requires careful, line-by-line reading. Computers are very particular!
- Patience is required. You will likely not solve the problem on the first try. Be patient with yourself, and keep on persisting.
- You're probably not the only one. If you've run into a problem, chances are somebody else has too! We can learn how to look for answers: online, from our friends, and from our teachers.

## Before you start writing code
0. Understand the inputs and outputs of a function that you're writing. Write down some examples of inputs and expected outputs in the comments so that you can test your functions after you've written them. Ask yourself: 
	* Have I written down the `inputs` and `outputs` that I expect? 
	* What is the data type of each of the `inputs` and `outputs`?
	* What are some examples that I could use for testing after I write my function?

1. Talk yourself through how the function should work, writing pseudo-code along the way. 
	* See example for selecting items of color red. 
	```
	function selectItemsOfColorRed() {
		// make empty list of red items
		// go through each item
			// if red, add to list of red items 
		// after you finish going through input list, return newly created list of red items
	}
	```
	* Let's write pseudo-code for three functions together (including inputs, outputs, and examples please)
		(1) Return all elements beginning with the letter "Q" from input array.
		(2) Return all numbers greater than 10 from input array. 
		(3) Return all keys in object for all numerical values. 

2. Start to write the function, using your pseudo-code as an outline. Console log frequently to check that your code is acting as expected. Write clean code to prevent simple bugs!
	* Pair parentheses, curly braces, and brackets properly. 
	* Use good indentation so that you can read your code easily. You want to indent if creating a function body, if writing an `if` statement body, etc. You will develop intuition around this as you practice.

## When you're stuck in the middle of writing code
0. Before you even get started, check in with yourself. Are you frustrated or angry? Try to approach the act of solving the problem from a rational and calm mind. 
*This means that if you're frustrated, you can take a break. Walk around the classroom, drink a sip of water, or take a deep breath. When you're calm, you can begin the process of problem-solving.*
This practice is difficult. When I'm in the middle of debugging something, it's very tough for me to walk away and come back with a clear mind. However, I rarely solve something big when I'm banging my head against the keyboard: I usually arrive at the answer when I give myself time to process away from the computer.

1. Articulate the problem to yourself. Be as specific as possible.  
	* Read your error messages very slowly (until you understand them!)
	* Don't just say "it's not working". Say, "there's an error on line 24 that reads: `Unexpected token {"`. 

2. Define a hypothesis. 
	* "I hypothesize that this is not working because there is something wrong with my syntax `{`. I'll go check there first."

3. Check for simple solutions. Javascript is particular about how code is written. Here are some simple things to confirm:
	* Have you correctly opened and closed all parentheses, curly braces, and brackets? `(), {}, []` must have their corresponding pair. Use proper indentations to make this easy to see. 
	* Have you used quotation marks correctly? Double quotations must pair with other double quotations, and the same is true of single quotations and backticks.
	* Have you named everything correctly, or do you have typos? If you name a variable `myFriend`, you must later refer to it as `myFriend`. NOT `myfriend` or `my Friend`. 
	* Did you declare your function properly? Remember the structure of functions is: 
	```
	function noErrorsPlease() {
		// write function body here
	}
	```
	* 
4. Look for help online. Google for the problem, as it is likely that someone else has run into the same problem. 
	* When you Google, be specific. Use "Javascript" in the search query so that you find solutions in the same language.
	* If you don't know what the problem is, try to get as close as possible. Chances are, other people were also as confused as you, and the search results should help you to define your search query better. 
	* Keep searching until you have a better understanding of your issue.
	* As you go along in your search, you can continue to re-define your hypothesis to be closer and closer to your issue.

5. Use the tools at your disposal. Firefox and Google Chrome both have good web inspectors. If it is a web issue, check if there are errors in the console. 

6. Ask a friend. It's often easier to find a bug if you and a friend are working together to solve the issue. 
	* Tell them the error you are seeing, your current hypothesis, and what you have already tried. 

7. Ask a teacher for help.
	* If you ask me for help, I will ask about your steps: (1) What is the error you are seeing? (2) What have you tried already to solve the problem? (3) What is your hypothesis about the solution?
	* If you have not already defined the above questions, I will ask you to go back and complete those steps first.


## Rule of 20-20-20
If you have 60 minutes allocated to one question, spend your time like this:
- 20 minutes trying to solve it on your own
- 20 minutes trying to solve it with a peer
- 20 minutes asking a teacher for help