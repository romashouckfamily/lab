# Welcome to day 1 of the Coding Academy!

Please boot your laptop using the Ubuntu installation we did on Wednesday.

## 1. [30 minutes] Install Sublime for linux using the app finder in the bottom left hand corner
- Install Package control: Tools > Install Package Control
- Go to Tools > Command Palette. Click on Install Package
- Install "Javascript Console" https://calebgrove.com/articles/js-console-sublime-text
- The console requires a Node.js install 
`sudo apt update`
`sudo apt install nodejs`
-- See https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04
- Look for where node.js has been installed on your machine: `which node` 
- Create a new build called `Node.sublime-build`. Use the location of node in your file, which should look something like this:
```
{
  "cmd": ["/usr/bin/nodejs", "$file"],
  "selector": "source.js"
}
```

## 3. [15 minutes] Get setup with Github
- Creat github account 

- Setup git: https://help.github.com/en/articles/set-up-git
`sudo apt install git` You'll have to enter your linux password and hit `y` once or twice.

## 4. [30 minutes] Get access to weekly syllabus and homework
- Go home: `cd ~`
- Make a new directory called projects in ~ 
`mkdir projects`
`cd projects`
- Fork my github repository: https://github.com/onelovelyname/lab (https://help.github.com/en/articles/fork-a-repo)
- Clone your fork of my repo: `git clone https://github.com/YOUR_NAME/lab`
- Add remote upstream (my repo) for your fork: `git remote add upstream https://github.com/onelovelyname/lab`
	* See https://help.github.com/en/articles/configuring-a-remote-for-a-fork
- Take a look at the syllabus in sublime

## [5 minutes] BREAK

## 5. [2 hours] Discussion on Data Types: 6 primitives + objects/symbols
- [30 minutes] Lecture/discussion
- [30 minutes] Problem-solving methodology and live coding: Randomize seating in the room so that students from each school are sitting together. Learn data types, variable declaration, function declaration, loops
- [30 minutes] And now, your turn to write a function in pairs. Use `randomizeSeating` in `challenges` folder to get started!
- [15 minutes] debrief
```
function randomizeSeating(names) {

	// your code here:

}
```

## BREAK + Movement exercises

## 5. [1 hour] Collaboration on Code of Conduct
- We will review the Code of Conduct together to make sure we all understand the values and goals of this course. You can make suggestions for guidelines by submitting pull requests to my repository. Each person will submit one pull request that I will merge.
### Steps:
0. Sync your fork with my repo: https://help.github.com/en/articles/syncing-a-fork 
	* `git fetch upstream` 
	* `git checkout master` 
	* `git merge upstream/master`
1. Make sure that the Code of Conduct file is open in your Sublime text editor
2. Make a change to the file. You can suggest new guidelines. When we are all satisfied, add your name to the document in your text editor. Then, commit your changes: `git add` `git commit`
*Make sure to put a good commit message!*
3. Fetch any changes from my repo: https://help.github.com/en/articles/syncing-a-fork
4. Then, push your changes to your remote origin: `git push origin master`
5. Finally, submit a Pull Request to my repository. Congratulations, you've submitted your first PR!

## [optional] 7. Configure your bash profile to make use of shortcuts
- Set up authentication to GitHub from Git: https://help.github.com/en/articles/set-up-git#next-steps-authenticating-with-github-from-git
	* `git config --global credential.helper cache`
	* `git config --global credential.helper 'cache --timeout=3600' `
	* // 3600 is one hour, you can choose how long you want to cache your password
- Create alias in ~/.bash_profile: `alias lab='cd ~/Desktop/projects/lab’`
- To see current path, use `pwd`  
- Add shortcut for sublime, so that you can open sublime from the command line

## Homework:
- freecodecamp: Basic Javascript course, up until "Understanding Boolean values"