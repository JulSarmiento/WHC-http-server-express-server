// Requerimos el modulo http de node.js
const http = require('http');

// Definimos la constante HOST que sera el host( o dominio) donde correrá el servidor
const HOST = 'localhost';
// Definimos la constante PORT que sera el puerto donde correrá el servidor
const PORT = 8080;

//  Instanciamos servidor empleando el metodo createServer de http con un mensaje de respuesta.
const server = http.createServer((_request, response) => {
  response.end('Este es mi primer servidor en node.js');
});

// Iniciamos el servidor con el metodo listen de server
server.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});