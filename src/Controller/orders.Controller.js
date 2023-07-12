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
        res.json({jsonarray})
    } catch (error) {
        return res.status(500).json ({
            message: 'get error orders'
        })
    }
}
export const recallOrders = async (req,res)=> {
    try {
        res.send('nonononon')
    } catch (error) {
        return res.status(500).json ({
            message: 'get error orders'
        })
    }
}

export const Createorders = async (req, res) => {
    try {
        const {name, salary} = req.body;
        const [rows] = await pool.query('INSERT INTO employees(name, salary) VALUES (?, ?)',[name , salary]);
        res.send(
            {
            id: rows.insertId,
            name: name,
            salary: salary
            });
    } catch (error) {
        return res.status(500).json ({
            message: 'something goes weong'
        })  
    }
   
};
