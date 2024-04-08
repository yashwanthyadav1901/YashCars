const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    rentPerHour: {
      type: Number,
      required: true,
      trim: true,
    },
    fuelType: {
      type: String,
      required: true,
      trim: true,
    },
    bookedTimeSlots: {
      type: Array,
      trim: true,
    },
    capacity: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("car", CarSchema);
