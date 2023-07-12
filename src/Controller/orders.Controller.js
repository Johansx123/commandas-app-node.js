import { poolconf } from "../db.js";
import { pool } from "../db.js";
import MySQLEvents from 'mysql-events';
import { io } from "../app.js";


const mysqlEvent = new MySQLEvents(poolconf);
mysqlEvent.add(
    'unicentaopos.orders',
    (oldRow,newRow) => {
        console.log('se escucho el evento')
        const nuevaOrden = newRow.fields;
          const filteredObj = { 
            body:{
            id: nuevaOrden.id,
            orderid: nuevaOrden.orderid,
            count: nuevaOrden.qty,
            details: nuevaOrden.details,
            ticketid: nuevaOrden.ticketid,
            ordertime: nuevaOrden.ordertime}
          };
          const json = JSON.stringify(filteredObj);
          io.emit('nueva-orden',json)
          const {orderid,count,details,ticketid,ordertime} = filteredObj.body
          pool.query('INSERT INTO ordersapi(orderid,count,details,ticketid,ordertime) VALUES (?,?,?,?,?)',[orderid,count,details,ticketid,ordertime]);
    }
  );


export const getOrders = async (req,res)=> {
    try {
        const [rows] = await pool.query('SELECT * FROM unicentaopos.ordersapi');
        if(rows.length <= 0) return res.status(404).json({
            message: "orden no encontrada"
        });
        res.send(rows);
    } catch (error) {
        return res.status(500).json ({
            message: 'Error al consultar DB'
        })    
    }
}

export const getOrdersday = async (req, res) => {
    try {
        const ordertime = (req.params.ordertime + '%')
        const [rows] = await pool.query('SELECT * FROM unicentaopos.ordersapi WHERE ordertime LIKE ?', [ordertime]);
        if(rows.length <= 0) return res.status(404).json({
            message: "no se encontraron registros"
        });
        res.send(rows);
    } catch (error) {
        return res.status(500).json ({
            message: 'Error al consultar DB'
        })    
    }
};

export const getOrder = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM unicentaopos.ordersapi WHERE orderid = ?', [req.params.id]);
        if(rows.length <= 0) return res.status(404).json({
            message: "orden no encontrada"
        });
        res.send(rows);
    } catch (error) {
        return res.status(500).json ({
            message: 'Error al consultar DB'
        })    
    }
};
export const recallOrders = async (req,res)=> {
    try {
        res.send('nonononon')
    } catch (error) {
        return res.status(500).json ({
            message: 'get error orders'
        })
    }
}

