//Servidor de express
const express = require("express");
const app = express();
//Servidor de socket
const server = require("http").createServer(app);
//Configuracion de socket
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  //socket del servidor
  //no se recomienda mandar String o booleanos. Solo JSON
  //   socket.emit("mensaje-bienvenida", {
  //     fecha: new Date(),
  //     msg: "Bienvenido al server",
  //   });
  console.log(`Cliente conectado id-> ${socket.id}`);
  //   socket.on("mensaje-cliente", (data) => {
  //     console.log(data);
  //   });
  socket.on("mensaje", (data) => {
    console.log(data);
    //Emitimos el mensaje a todas la personas conectadas
    //namespaces
    io.emit("mensaje-server", data);
    //Emitos el mensaje solo a nosotros
    // socket.emit("mensaje-server", data);http://localhost:8081/
  });
});

//Desplegamos el directorio publico
app.use(express.static(__dirname + "/public"));

server.listen(8081, () => {
  console.log("Server ejecutandose en el puerto :8081");
});
