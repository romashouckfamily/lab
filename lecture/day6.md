## New Concepts
- Classes that includes methods, properties, and `this` reference

## Introducing React 
- React is a JavaScript library for building user interfaces - what you see on the webpage
- Often used for single-page applications, ones that do not require re-loading a page in order to display new content
- It lets you compose complex UIs from small and isolated pieces of code called “components”

## create-react-app
- Starter code for folks looking to learn React or build a application with default settings
- Webpack (module bundler) looks through the application starting at `src/index.js` to create a dependency graph
- It then runs the code through Babel, a transpiler which parses newer code and transforms it into a version of Javascript that most browsers understand.
- Webpack then uses the dependency graph to create a single Javascript file, injects it into `public/index.html` using `script` tags (remember we learned about these?) and starts a development server at http://localhost:3000
- Navigating to this URL in the browser will show a live, interactive instance of your application. Any changes saved to the source code will reflect in the running app instance automatically.

## tic-tac-toe
- Let's look together the application directory structure before we get started: https://github.com/nitishdayal/cra_closer_look
- `render` method returns a description of what you'd like to see on the webpage
	* JSX is a special syntax that is transformed into React elements at build time