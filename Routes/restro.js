const express = require('express');
const {RestroModel} = require('../Models/restromodel');

const RestroRouter = express.Router();

//adding details of restaurant
RestroRouter.post("/",async(req,res)=>{
try {
    const data = await RestroModel(req.body);
    await data.save();
    res.send(data).status(201);
} catch (error) {
    req.send(`error while creating restaurant : ${error.message}`);
}
})

//getting all the restaurant
RestroRouter.get("/",async(req,res)=>{
try {
    let data = await RestroModel.find();
    res.send(data).status(200);
} catch (error) {
    res.send(`error while getting restaurant:${error.message}`);
}
})

//getting details of the restaurant w.r.t id
RestroRouter.get("/:id",async(req,res)=>{
    let id = req.params.id;
   try {
    let data = await RestroModel.findById({"_id":id});
    res.send(data).status(200);
   } catch (error) {
    res.send(`error while getting restaurant:${error.message}`);

   } 
});

//adding new items in menu
RestroRouter.put("/:id/menu",async(req,res)=>{
    let id = req.params.id;
   try {
   
    const restro = await RestroModel.find({"_id":id});
    // res.send(restro[0].menu);
    restro[0].menu=restro[0].menu.push(req.body);
    await RestroModel.findByIdAndUpdate({"_id":id},restro[0])
    res.send("new item added successfully").status(201);
   } catch (error) {
    res.send(`error while adding new item: ${error.message}`);
   } 
});

//deleting menu items 
RestroRouter.delete("/:id/menu/:id",async (req,res)=>{

    try {
        
    } catch (error) {
        res.send(`error while deleting menu items: ${error.message}`);
    }
})
module.exports = {RestroRouter};