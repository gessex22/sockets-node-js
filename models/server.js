const express = require("express");
const cors = require("cors");
const { Socket } = require("socket.io");
const { socketController } = require("../sockets/controller");
const dotenv = require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);
    this.paths = {};

    this.sockets();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
  }

  // async dbConect (){
  //     await dbconection()
  // }

  routes() {
    // this.app.use(this.paths.auth,require('../routes/auth-routes'))
  }

  sockets() {
    this.io.on("connection",   socketController  );
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor REST online en el puerto " + this.port);
    });
  }
}

module.exports = Server;
