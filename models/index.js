const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.student = require("./student.model");
db.role = require("./role.model");
db.teacher = require("./teacher.model");
db.consignment = require("./teacher.model");

db.ROLES = ["student", "admin"];

module.exports = db;