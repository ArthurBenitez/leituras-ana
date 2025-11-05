// app.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // esse não precisava mas vi que é bom ter

const app = express();
app.use(express.json());
app.use(cors());

// Conexão com banco
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senai', 
  database: 'bibliofile'
});

db.connect(err => {
  if (err) console.error('Erro ao conectar:', err);
  else console.log('Conectado também ao MySQL');
});

// Rota para listar livros
app.get('/livros', (req, res) => {
  db.query('SELECT * FROM leituras', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Rota para registrar leitura
app.post('/livros', (req, res) => {
  const { titulo, autor, genero, paginas, tempo, nota, resenha } = req.body;

  db.query(
    'INSERT INTO leituras (titulo, autor, genero, paginas, tempo, nota, resenha) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [titulo, autor, genero, paginas, tempo, nota, resenha],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send('Leitura registrada');
    }
  );
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000 mas caso der erro, use o arquivo index.html (Open with Live Server) - aviso para a professora Ana. Deve primeiro dar app.js e depois index.html. É o único modo que está funcionando'));
