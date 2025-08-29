const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Servir archivos estáticos desde public
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.send('Servidor Express activo en Vercel. Usa /my-personal-card1 para ver una landing.');
});

app.get('/:landing', (req, res) => {
  const landing = req.params.landing;
  const filePath = path.join(__dirname, '..', 'public', 'landings', landing, 'index.html');
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('Landing no encontrada.');
    }
    res.sendFile(filePath);
  });
});

module.exports = app;
