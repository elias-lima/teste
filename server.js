const express = require('express');
// Iniciando o App
const app = express();
 
// Primeira rota
const cors = require('cors');
const pool = require('./db');

app.get('/', (req,res) => {
res.send("Hello World")
});

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server has started on port 5000");

});


//ROUTES//


//create a todo

app.post('/todos', async (req, res) => {
  try {
      const { description } = req.body;
      const newTodo = await pool.query(
      "INSERT INTO todo(description) VALUES($1) RETURNING *",
      [description]
      );

      res.json(newTodo);
  } catch (err){
    console.error(err.message);
  }
});


//get all todo