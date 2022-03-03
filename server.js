//This is the minimal express server. 
const { Pool } = require('pg');
const express = require('express');
const cors = require('cors');


const app = express();
const db = new Pool({
  user: 'postgres',
  database: 'techtonica',
  password: 'Calle100No11B90'
});

//We're creating just one route to grab information. You  probably will change this according to your project
app.get('/api/students', cors(), async (req, res) => {
    //We're replacing the object students with a query from the database 
  const { rows: students } = await db.query('SELECT * FROM students');
  // const students = [

  //   {id: 1, firstName: 'John', lastName: 'Doe'},
  //   {id: 2, firstName: 'Brad', lastName: 'Traversy'},
  //   {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  //   {id: 4, firstName: 'Cristina', lastName: 'Rodriguez'},
  //   {id: 5, firstName: 'Jair', lastName: 'Trejo'},
  // ];
  
  res.json(students);
});

//We're setting port 5000 because React usually used by default port 3000, and we want to avoid conflicts. 
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);