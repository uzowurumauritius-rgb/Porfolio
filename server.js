const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DIR  = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png':  'image/png',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.webp': 'image/webp',
};

http.createServer((req, res) => {
  const url  = req.url.split('?')[0];
  const file = url === '/' ? 'index.html' : url.replace(/^\//, '');
  const full = path.join(DIR, file);

  if (!full.startsWith(DIR)) {
    res.writeHead(403); return res.end('Forbidden');
  }

  fs.readFile(full, (err, data) => {
    if (err) {
      fs.readFile(path.join(DIR, 'index.html'), (e2, d2) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(d2 || 'Not found');
      });
    } else {
      const ext = path.extname(full).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(data);
    }
  });
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio running on port ${PORT}`);
});
