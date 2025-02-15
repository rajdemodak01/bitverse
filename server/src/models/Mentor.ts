import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profileUrl: { type: String, required: true },
  about: { type: String, required: true },
});

const Mentor = mongoose.model("Mentor", mentorSchema);
export default Mentor;
