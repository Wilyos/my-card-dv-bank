
const express = require('express');
const path = require('path');
const app = express();

// Ruta raíz para verificar que el servidor responde
app.get('/', (req, res) => {
  res.send('Servidor Express activo. Usa /my-personal-card1 para ver una landing.');
});


// Middleware para normalizar rutas con o sin slash final
app.use((req, res, next) => {
  if (req.path.endsWith('/') && req.path.length > 1) {
    res.redirect(301, req.path.slice(0, -1));
  } else {
    next();
  }
});

const fs = require('fs');
const errorLogPath = path.join(__dirname, 'error.log');
app.get('/:landing', (req, res) => {
  const landing = req.params.landing; // Ej: "my-personal-card1"
  const folder = landing;
  const filePath = path.join(__dirname, 'landings', folder, 'index.html');
  const logError = (msg, err) => {
    const fullMsg = `[${new Date().toISOString()}] ${msg} ${err ? err.stack || err : ''}\n`;
    fs.appendFile(errorLogPath, fullMsg, () => {});
    console.error(fullMsg);
  };
  console.log('Intentando servir:', filePath);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      logError('Archivo no encontrado o error de acceso:', err);
      return res.status(404).send('Landing no encontrada o error de acceso.');
    }
    res.sendFile(filePath, (err) => {
      if (err) {
        logError('Error al servir landing:', err);
        res.status(500).send('Error interno al servir la landing.');
      }
    });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
