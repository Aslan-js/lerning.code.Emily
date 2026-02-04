const express = require('express');
const sequelize = require('./database');
const User = require('./User');

const app = express();
app.use (express.json());

sequelize.sync()
    .then(()=> console.log('tabela criada'))
    .catch(err => console.error('erro', err));

app.post('/usuarios', async (req, res) => {
  const { nome, idade, sexo, pais } = req.body;
  
  const novoUsuario = await User.create({ nome, idade, sexo, pais });
  
  res.json(novoUsuario);
});


app.get('/usuarios', async (req, res) => {
  const todosUsuarios = await User.findAll();
  res.json(todosUsuarios);
});


app.listen(3000, () => console.log('API porta 3000'));