const mongoose = require("mongoose");

const subtaskSchema = new mongoose.Schema({
  subtaskTitle: String,
  subtaskDesc: String,
  subtaskOwner: { subtaskOwnerId: String, subtaskOwnerName: String }, //subtask creator
  subtaskAssignee: [{ subtaskAssigneeId: String, subtaskAssigneeName: String }], // subtask assigned to multiple user to work
  subtaskPriority: String,
  subtaskStartDate: Date,
  subtaskDueDate: Date,
  subtaskStatus: String,
  subtaskCreated: { type: Date, default: Date.now },
  subtaskUpdated: { type: Date, default: Date.now },
});

const taskSchema = new mongoose.Schema({
  taskTitle: String,
  taskDesc: String,
  taskOwner: { taskOwnerId: String, taskOwnerName: String }, // task creator
  taskAssignee: [{ taskAssigneeId: String, taskAssigneeName: String }], // task assigned to multiple user to manage
  taskPriority: String,
  taskStartDate: Date,
  taskDueDate: Date,
  taskStatus: String,
  subtask: [subtaskSchema],
  taskCreated: { type: Date, default: Date.now },
  taskUpdated: { type: Date, default: Date.now },
});

const taskModel = mongoose.model("taskModel", taskSchema);
module.exports = taskModel;
