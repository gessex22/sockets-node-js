
const socketController = (socket) => {

   
        console.log("Cliente conectado  ", socket.id);
  
        socket.on("disconect", () => {
          console.log("cliente disconect", socket.id);
        });
  
         
        socket.on("MsgS", (arg1 , callback ) => {
            console.log('mensaje desde el servidor')
             callback(arg1)
     
          socket.broadcast.emit('MsgC',arg1)
        });
      


}

module.exports = {

socketController
}