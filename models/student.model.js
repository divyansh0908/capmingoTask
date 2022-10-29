const mongoose = require("mongoose");

const User = mongoose.model(
  "user",
  new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    favourite: mongoose.Schema.Types.ObjectId,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
