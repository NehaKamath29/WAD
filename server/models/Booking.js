const mongoose=require("mongoose")

const bookingSchema = new mongoose.Schema({
  // username: {
  //   type: String,
  //   required: true
  // },
  // checkInDate: {
  //   type: Date,
  //   required: true
  // },
  // checkOutDate: {
  //   type: Date,
  //   required: true
  // },
  guest: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  // room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;

