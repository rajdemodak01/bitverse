import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  mentorId: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor", required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
