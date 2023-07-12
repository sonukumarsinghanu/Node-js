const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    //validation
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [20, "name can not more than 20 character"],
  },
  completed: {
    //validation
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Tasks", TaskSchema);
