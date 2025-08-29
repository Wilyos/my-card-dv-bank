const express = require('express');
const path = require('path');
const app = express();


// Middleware para normalizar rutas con o sin slash final
app.use((req, res, next) => {
  if (req.path.endsWith('/') && req.path.length > 1) {
    res.redirect(301, req.path.slice(0, -1));
  } else {
    next();
  }
});

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
