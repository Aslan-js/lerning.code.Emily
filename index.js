const express = require ('express');
const app = express();
app.use(express.json());
const port = 3000;

let usuarios = [
    { id: 1, nome: "Emi", idade: 18, sexo: "f", pais:"Brasil"},
    { id: 2, nome: "Rapha", idade: 32, sexo: "m", pais: "Portugal"},
    { id: 3, nome: "Cronos", idade: 3, sexo: "m", pais: "Brasil"}
];

app.get('/usuarios', (req, res) => {
    res.send (usuarios);
});

app.post('/usuarios', (req,res) =>{
    const novoUsuario = {
        id: usuarios.length +1,
        nome: req.body.nome,
        idade: req.body.idade,
        sexo: req.body.sexo,
        pais: req.body.pais
    };

    usuarios.push(novoUsuario);
    res.status(201).send(novoUsuario);
});

app.put('/usuarios/:id', (req,res) =>{
    const id = parseInt (req.params.id);
    const usuario = usuarios.find (u => u.id === id);

    if(usuario){
        usuario.nome = req.body.nome;
        usuario.idade = req.body.idade;
        usuario.sexo = req.body.sexo;
        usuario.pais = req.body.pais;
        res.send(usuario);
    }
    else {
        res.status(404).send ("não encontrado");
    }
});

app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);

    usuarios = usuarios.filter(u => u.id !== id);
    res.status(204).send();
});

app.listen(port, () =>{
    console.log(`servidor rodando em http://localhost:${port}`);
});