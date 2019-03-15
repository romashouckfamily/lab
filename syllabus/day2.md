## 0. [5 minutes] Review course structure
1. Learn code basics and collaborative workflows
- Environment setup, including: text editor, command line tool, Github
- Problem-solving methodology
- Introduction to algorithms
- Basic Javascript, ES6
- Data types
- Data structures: Arrays, stacks, queues, hashes, linked lists
- Functions
2. Develop understanding of the client-server relationships; build client
3. Build backend server; discuss scalability and security
4. Putting it all together by building a solo project
5. Build web application with teammates, demo project

## 1. [45 minutes] Problem-solving methodology lecture
- 30 minutes discussing problem-solving as a discipline: Go slowly, be patient, and identify what the issue is.
- Last class we worked through concepts very quickly. We're going to review them today.
### Tips
- When you're frustrated, take a breath or a break. Come to the problem with a clear mind, frustrated minds don't solve problems. 
- Read your error messages carefully.
- Use proper indentation so you can spot errors more quickly. 
- Check your parentheses and curly braces. You need to match opening and closing parentheses and curly braces in Javascript.
- When you Google, be sure to include "Javascript" in your search query. And be as specific as you can: "choose element in array randomly Javascript" is a better search than "randomize array". When you look at search results, look for those that are:
	* written in Javascript
	* address your specific question
	* if it relates to your environment, make sure to add "Ubuntu" to your query.

## 2. [45 minutes] Code algorithm together, going over every small detail

## 3. [5 minutes] BREAK

## 4. [30 minutes] Debugging lecture / practice with Mahd

## 5. [45 minutes] Coding Challenge of the Day
- Debugging worksheet

## 6. [15 minutes] Get setup with Git
- Setup git: https://help.github.com/en/articles/set-up-git
`sudo apt install git` You'll have to enter your linux password and hit `y` once or twice.

## 7. [45 minutes] Get access to weekly syllabus and homework
- Go home: `cd ~`
- Make a new directory called projects in ~ 
	* `mkdir projects`
	* `cd projects`
- Fork my github repository: https://github.com/onelovelyname/lab (https://help.github.com/en/articles/fork-a-repo)
- Clone your fork of my repo: `git clone https://github.com/YOUR_NAME/lab`
- Add remote upstream (my repo) for your fork: `git remote add upstream https://github.com/onelovelyname/lab`
	* See https://help.github.com/en/articles/configuring-a-remote-for-a-fork
- Take a look at the syllabus in sublime
- Add your homework (functions worksheet) to the `homework` folder. Save it as `day1_homework_[FIRST_NAME_LAST_INITIAL].js`
	* `git status`
	* `git add .`
	* `git commit` and enter commit message "Add functions homework"
	* `git push origin master` to get your homework online for review 

## Homework:
- functions worksheet in `lab/homework/day1.js`. Finish the function worksheet (or do as much as you're able). You will be presenting the function you are assigned with your partner next Saturday.
- freecodecamp: Basic Javascript course, up until "Testing Objects for Properties"