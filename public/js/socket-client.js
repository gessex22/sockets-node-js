const buttomSend = document.getElementById("btnSend");
const text = document.getElementById("textMessage");

const socket = io();

socket.on("connect", () => {
  console.log("conectaded");
});

socket.on("disconnect", () => {
  console.log(" disconected");
});

socket.on("MsgC",  (message) => {

  console.log(message)
  
});


// Evento al hacer clic en el botón para enviar el mensaje
buttomSend.addEventListener("click", () => {
  let messageInput = text.value;

  // Emitir evento 'MsgS' al servidor con messageInput, un callback y un tercer argumento
  socket.emit("MsgS",  messageInput , (text)=> {

    console.log(`Mensaje: ${text} desde cliente ` , socket.id)
  });
});