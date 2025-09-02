import mongoose from "mongoose";

const StreakSchema = new mongoose.Schema({
  current: { type: Number, default: 0 },
  lastUpdate: { type: Date, default: Date.now },
});

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
