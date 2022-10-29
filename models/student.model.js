const mongoose = require("mongoose");

const User = mongoose.model(
  "user",
  new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    favourite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
