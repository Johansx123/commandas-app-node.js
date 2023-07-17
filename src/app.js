import express from 'express';
import orders from './Routes/orders.Routes.js';
import { Server as SocketServer } from 'socket.io';
import http from 'http';
import cors from 'cors';

 


const app = express();
export const server = http.createServer(app)
export const io = new SocketServer(server, 
    {cors: {
        origin:"http://localhost:5173"
    }})
app.use(express.json());


io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado', socket.id);
  
    socket.emit('ping')

    socket.on('pong',()=>{
        console.log('pong')
    })
  });

// io.of('disconect',()=>{
//     console.log('client disconnected')
// })


app.use(express.static('public'))


app.use(orders);

app.use ((req,res,next)=>{
    res.status(404).json({
        message: 'No se encontro ruta'
    })
})
export default app;