# Welcome to day 1 of the Coding Academy!

Please boot your laptop using the Ubuntu installation we did on Wednesday.

## 1. [1 hour] Discussion on Data Types: 6 primitives + objects/symbols
- [1 hour] Lecture/discussion

## BREAK

## 2. Install Slack and Github
- Accept Slack invite from Melanie / create account
- Create Github account

## 3. [2 hours] Install Sublime for linux using the app finder in the bottom left hand corner
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

## 4. [1 hour] Live coding: Randomize seating in the room so that students from each school are sitting together. Learn data types, variable declaration, function declaration, loops
- [30 minutes] And now, your turn to write a function in pairs. Use `randomizeSeating` in `challenges` folder to get started!
- [15 minutes] debrief

## 6. [spare time] Sign up for Slack and freecodecamp, configure `~/.bash_profile`, other extras that make coding more efficient
- Sign for freecodecamp, which you'll need for homework
- Set up authentication to GitHub from Git: https://help.github.com/en/articles/set-up-git#next-steps-authenticating-with-github-from-git
	* `git config --global credential.helper cache`
	* `git config --global credential.helper 'cache --timeout=3600' `
	* // 3600 is one hour, you can choose how long you want to cache your password
- Create alias in ~/.bash_profile: `alias lab='cd ~/Desktop/projects/lab’`
- To see current path, use `pwd`  
- Add shortcut for sublime, so that you can open sublime from the command line

## Homework:
- functions worksheet in `lab/homework/day1.js`. Complete 5 of the functions (or more for good practice!). You will be presenting the function you are assigned with your partner next Saturday.
- freecodecamp: Basic Javascript course, up until "Understanding Boolean values"