### Your First Express and React App
Create full stack apps with React and Express. Run your client and server with a single command, thanks to a node module call concurrently

# Step by Step instructions - Building this from scratch
### For creating the server (using Express)
1. Make a new directory for your project. 
2. cd into your new directory 
3. create a package.json with the command `npm init`
4. Make sure that the main file in your package is `server.js`
4. Install all the dependencies with the commands:`npm i express`, `npm i cors` and `npm i concurrently`
5. Install the module nodemon in the dev server with the command `npm i nodemon --save-dev`
6. Inside your package.json, change the scripts to: 
```
"start": "node server.js",
"server": "nodemon server.js",
```
(doing this, you will delete the test script)

7. Create your server.js file (you can do that with `touch server.js` or directly on your VSCode)

### Inside your server.js File
Here is the minimal express server. We're creating just one route to grab information. You probably will change this according to your project.

Once you have written your server.js file, you can run your project with `npm run server` in your terminal to run your server script.

### The client (The React Part)
In another Terminal window. Go to your directory for the project. 
1. Install create-react-app with `npm i -g create-react-app`
2. Create a react app, called client, with the command `create-react-app client`. That should create a new folder client inside your project directory 
3. cd into your client folder and star your react server with the command `npm start`
4. At this point, you should have a server running on port 5000 with your backend and a new react server running on port 3000 with the initial logo of React. 

### Working on React. 
Inside the src folder, create a components folder. 
There you can create the .js file for your component. For this project is called `students.js`
We decided to make a .css file for our component, so we made the file students.css in the same folder. 

### Inside your component .js File
1. Create a basic component 
2. Import useState and useEffect hooks from react
3. Inside your return function, create a basic `<div>` with and `<h2>` Tittle with the name of you component
4. Set the initial variables for your state according to your data (for this project is students) and set the initial value to be an empty array
5. We will use the useEffect hook to bring the data from your server each time the component renders. Notice that the second argument to that function is an empty array. That controls how often the effect executes. If it is empty, it will only execute once. 
6. Fetch returns a promise, so we're using `.then` to convert your response into json data and `.then` again to change the value of your State with setState and do a little `console.log` for sanity reasons.   
7. Inside your return, we use map() to create a list with all the data you are fetching for your server. 
8. Inside your App.js file, delete the default values of the component and import your new component. 
9. Run your localhost to see if you are seeing your component work. 
10. Add styles to your component.css file to make your list more visually pleasing. 

At this point, you should see the data from your server in your react localhost. 

### To run just one server with the module concurrently
Inside your package.json in your `serve` directory add these client and dev scripts with: 
```
"client": "npm start --prefix client",
 "dev": "concurrently \"npm run server\" \"npm run client\""
```
Make sure that you're copy-pasting the correct number of quotes. 
Now, to run both servers just type the command `npm run dev`

### To add a Postgres DB
In a new terminal window, go to your project directory and run the command `psql -U postgres -f db.sql` that will create a database `techtonica` and a table `students` with 6 rows. 


# Quick-setup (if you want to use this as your template)
```
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```
