const mongoose = require("mongoose");

const consignment = mongoose.model(
  "consignment",
  new mongoose.Schema({
    id: String,
    name:String,
    subject: String,

    path:Object
  },  { collection: "teacher" }),

);

module.exports = consignment;
// {"_id":{"$oid":"632c3f1c7bf032dfb0cc412a"},
//    "batchNumber": "String",
//     "productNumber": "rfheuihfuiehgivuds",
//     "quantity": 12,
//     "assignmentNumber": 155,
//     "initiationDate": 1663843643,
//     "currentStatus": {
//       "lastLocation": "Ahmedabad",
//       "lastUpdated": 1663844221
//     },
//     "path":{
//       "0": "Ahmedabad",
//       "1": "Mumbai",
//       "2": "Pune"
//     }
// }