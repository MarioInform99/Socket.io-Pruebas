# WEBSOCKETS libreria SOCKET.IO
Empezamos con la instalación del paquete json que es el principal para nuestro archivo, "package.json" tendrá
dentro las configuraciones e instalaciones de nuestro proyect
```bash
npm init
```

---------------------
Posteriormente instalamos Socket.io, esta es una librería que nos serve de comunicador con el servidor
cuando la base de datos cambie, añada o elimine un dato. 
REALIZAR ALGUNAS PRUEBAS CON WEBSOCKETS Y CREAR UN CHAT.
```bash
npm i socket.io
```
----------------------
Instalación de express para el back-end.
```bash
npm i express
```
--------

Formas para ejecutar el servidor:
Nodemon actualiza el contenido automaticamente sin reiniciar el servidor 
#nodemon <nombre del archivo>
----
Añadimos un valor en el archivo 'package.json' en la zona de 
```bash
scripts:
{
    "dev":"nodemon server.js",
    "start": "node server.js"
}
```
```bash
-npm run dev para ejecutar el primer comando
-npm start para iniciar el segundo comando
```
--------------
```bash
io.on("connection", () => {
  console.log("Cliente conectado");
});
```
Cuando un dispositivo se conecta no se lee en la terminal "Cliente conectado" porque es la conexion del Socket 
server
----
Enviar peticiones del cliente - socket para cliente conectado
```bash
io.on("connection", (socket) => {
 console.log(socket.id);
});
```
---
Para escuchar mensajes del cliente se realizar de la siguiente manera.
```bash
io.on("connection", (socket) => {
 console.log(`Identificador del socket del clienten : ID - ${socket.id}`);
  socket.emit("mensaje_bienvenido", "Bienvenido al server");
});
```
Emit es para emitir el mensaje 
