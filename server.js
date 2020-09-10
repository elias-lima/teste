const express = require('express');
// Iniciando o App
const app = express();
 
// Primeira rota
app.get('/', (req,res) => {
res.status(200).send('La API funciona correctamente');
res.send("Hello World")
});
app.listen(3001);
