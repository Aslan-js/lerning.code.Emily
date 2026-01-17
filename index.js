const express = require ('express');
const app = express();
app.use(express.json());
const port = 3000;

let usuarios = [
    { id: 1, nome: "Emi" },
    { id: 2, nome: "Rapha" },
    { id: 3, nome: "Cronos" }
];

app.get('/usuarios', (req, res) => {
    res.send (usuarios);
});

app.post('/usuarios', (req,res) =>{
    const novoUsuario = {
        id: usuarios.length +1,
        nome: req.body.nome
    };

    usuarios.push(novoUsuario);
    res.status(201).send(novoUsuario);
});

app.put('/usuarios/:id', (req,res) =>{
    const id = parseInt (req.params.id);
    const usuario = usuarios.find (u => u.id === id);

    if(usuario){
        usuario.nome = req.body.nome;
        res.send(usuario);
    }
    else {
        res.send(404).send ("não encontrado");
    }
});

app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);

    usuarios = usuarios.filter(u => u.id !== id);
    res.status(204).send();
});

app.listen(port, () =>{
    console.log('servidor rodando em http://localhost:&{port}');
});