//This is the minimal express server. 

const express = require('express');
const cors = require('cors');

const app = express();

//We're creating just one route to grab information. You  probably will change this according to your project
app.get('/api/students', cors(), (req, res) => {
    //We're hardcoding our data. If you're calling an API, this is where you will use fetch. 
  const students = [

    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    {id: 4, firstName: 'Cristina', lastName: 'Rodriguez'},
    {id: 5, firstName: 'Jair', lastName: 'Trejo'},
  ];

  res.json(students);
});

//We're setting port 5000 because React usually used by default port 3000, and we want to avoid conflicts. 
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);