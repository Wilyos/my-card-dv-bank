const express = require('express');
const path = require('path');
const app = express();

app.get('/:landing', (req, res) => {
  const landing = req.params.landing; // Ej: "my-personal-card1"
  const folder = landing;
  const filePath = path.join(__dirname, 'landings', folder, 'index.html');
  res.sendFile(filePath, err => {
    if (err) {
      res.status(404).send('Landing no encontrada');
    }
  });
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
