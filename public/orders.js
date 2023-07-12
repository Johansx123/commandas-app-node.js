const socket = io() // Cambia la URL y el puerto según tu configuración

socket.on('ping', ()=> {
    console.log('escuchado')
    socket.emit('pong')
})

socket.on('nueva-orden', (nuevaOrden) => {
  console.log('Nueva orden recibida:', nuevaOrden);
  // Cargar la información de la nueva orden en la interfaz de usuario
});

