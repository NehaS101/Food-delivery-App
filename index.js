const express = require('express');
const { connection } = require('./Config/db');
const {UserRouter} = require('./Routes/user');
const {RestroRouter} = require('./Routes/restro');
const {OrderRouter} = require('./Routes/order');
const { authenticate } = require('./middleware/authenticate');
require("dotenv").config();


const app = express();

//routes middleware
app.use(express.json());
app.use("/api",UserRouter);
app.use("/api/restaurants",authenticate,RestroRouter);
app.use("/api/orders",authenticate,OrderRouter)

//home endpoint
app.get('/', (req, res) =>{
    res.send("welcome to Foord Delivery App")
})

//listening port
app.listen(process.env.port,()=>{
    
    try {
        connection
        console.log("connected to db");
        console.log(`listening on port ${process.env.port}`);

    } catch (error) {
        console.log(`error while listening port :  ${error}`)
    }
})