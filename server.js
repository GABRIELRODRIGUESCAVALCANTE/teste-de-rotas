const express = require('express');
const app = express();
const porta = 3000;

const listaDeAlunos = [
    { id: 1, nome: "Ana Silva", mediaMatematica: 8.5 },
    { id: 2, nome: "Bruno Souza", mediaMatematica: 6.0 },
    { id: 3, nome: "Carla Dias", mediaMatematica: 9.5 },
    { id: 4, nome: "Daniel Saboroso", mediaMatematica: 5.5 },
    { id: 5, nome: "Eduarda Lima", mediaMatematica: 10.0 }
];

app.get('/alunos', (req, res) => {
    res.json(listaDeAlunos);
});
app.listen(porta, () => {
    console.log(`Servidor a rodar em http://localhost:${porta}`);
    console.log(`Acede à rota de alunos em http://localhost:${porta}/alunos`);
});