const mongoose=require("mongoose")

const customerSchema = new mongoose.Schema({
  username: {
    type: String,
    required:true,
    unique:true
  },
  email: {
    type:String,
    required:true,
    unique: true
  },
  password: {
    type:String,
    required:true,
    unique:true
  },
  phone: {
    type:Number,
    required:true,
    unique:true
  },
  payments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Payment'
  }],
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
});

const Customer = mongoose.model("Customer",customerSchema);
module.exports = Customer;