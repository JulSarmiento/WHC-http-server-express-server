// Requerimos el modulo http de node.js
const http = require('http');

// Definimos la constante HOST que sera el host( o dominio) donde correrá el servidor
const HOST = 'localhost';
// Definimos la constante PORT que sera el puerto donde correrá el servidor
const PORT = 8080;

const writeHtmlResponse = (response, htmlCode) => {
  response.setHeader('Content-Type', 'text/plain; charset=utf-8');
  // Enviamos el codigo de estado 200 y el mensaje de respuesta
  response.writeHead(200);
  response.end(htmlCode);
}

//  Instanciamos servidor empleando el metodo createServer de http con un mensaje de respuesta.
const server = http.createServer((request, response) => {
  const url = request.url;
  console.log('url', url);

  if(url === '/other'){
    writeHtmlResponse(response, '<h1>Otra página</h1>');
  } else if (url === '/ping') {
    writeHtmlResponse(response, '<h1>Pong</h1>');
  } else {
    writeHtmlResponse(response, '<h1>Hola Mundo</h1>');
  }
  
});

// Iniciamos el servidor con el metodo listen de server
server.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});