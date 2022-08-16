const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = new Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    document: { type: Number, required: true },
    tel: { type: Number, required: true },
    address: { type: String, required: true },
    adressAlt: { type: String, required: true },
    departament: { type: String, required: true },
    city: { type: String, required: true },
    priorityType: { type: String, required: true },
    valuationType: { type: String, required: true },
    symptom: { type: String, required: true },
    date: { type: Date, required: true},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Cita", clientSchema);
