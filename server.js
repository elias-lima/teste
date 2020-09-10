const express = require('express');
// Iniciando o App
const app = express();
 
// Primeira rota
app.get('/', (req,res) => {
res.send("Hello World")
});
app.listen(3001);
