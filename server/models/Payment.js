const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({
    amount: {
        type:Number,
        required:true
    },
    customer: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    },
    hotel: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hotel'
    }
});

const Payment = mongoose.model("Payment",hotel_schema);
module.exports = Payment;