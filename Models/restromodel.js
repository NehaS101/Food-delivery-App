const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zip: String
    },
    menu: [{
      name: String,
      description: String,
      price: Number,
      image: String
    }]
  
})

const RestroModel = mongoose.model("Restro", schema);

module.exports = {RestroModel};