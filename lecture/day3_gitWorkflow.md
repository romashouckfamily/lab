# Let's discuss our tools: 
- Code editor 
	* Exists locally
	* Creates and stores files locally (on your physical computer)
	* Where you make all your code changes
- Terminal, aka command line
	* Exists locally
	* Allows you to write commands directly to the computer. Some examples of what you can do are: create directories (folders), create files, change file names and locations, download/install new programs, launch applications, etc. The options are pretty much endless!
	* One important thing that the terminal allows you to do is manage your codebase using command line tools like Git
	* If you make a change in your code editor to your code, you can see on your terminal what you've changed (if you have Git installed). This means that you can review all of your changes before sharing them with others BEFORE you put your changes online.
- Web browser (including Github)
	* Exists remotely - the information you view on an external website is generally NOT hosted locally, but on a remote server.
	* Where others can see code that you're ready to share.

*Walk through diagram of coding in progress* 

# We use a tool called Git to manage our code changes.
- Git is a verson-control system for tracking code changes during software development
- Helpful for collaborating with other software engineers: good alternative to saving files locally on your computer and emailing them to your collaborators
- Like Google Documents but for code

# How does it work?
- Each person maintains a copy of the codebase locally on their own computer. 
- There is also a "master" copy of the codebase located online. This copy is called the "origin". 
- If multiple people are working on the same codebase, it is important that we are able to collaborate smoothly without overwriting each other's changes.
- Food for thought:
	* If two people are working on the same document, how would we ensure that both people's changes are included? Any ideas?

*Walk through git workflow process* 

# Advanced
- Sometimes, the origin codebase is a duplicate of another codebase, and the origin wants to stay in sync with this second codebase. This second codebase is called the "upstream". You may remember making a copy of my codebase last time by "forking" or copying it. 
- Branches are helpful in differentiating what you're working on from the master copy. 

# For more practice with Git:
- Practice with Code Academy's basic git workflow course: https://www.codecademy.com/learn/learn-git/modules/learn-git-git-workflow-u