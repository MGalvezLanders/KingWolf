const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5500;
const FRONTEND_DIR = path.join(__dirname, 'FRONTEND', 'docs');

const server = http.createServer((req, res) => {
  let filePath = path.join(FRONTEND_DIR, req.url);
  
  // Si es una ruta (no un archivo), servir index.html
  if (req.url !== '/' && !req.url.includes('.')) {
    filePath = path.join(FRONTEND_DIR, 'index.html');
  }
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }
    
    const ext = path.extname(filePath);
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.jpg': 'image/jpeg',
      '.png': 'image/png',
    };
    
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
    res.end(content);
  });
});

server.listen(PORT, () => console.log(`Servidor en http://127.0.0.1:${PORT}`));
