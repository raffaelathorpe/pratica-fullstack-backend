const mongoose = require("mongoose");

const feiticoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  escola: {
    type: String,
    enum: ["Fogo", "Gelo", "Arcano", "Sombra", "Luz"],
    default: "Arcano"
  },
  nivel: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  dano: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Feitico", feiticoSchema);