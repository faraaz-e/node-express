const express = require("express");
const taskModel = require("../models/taskModel");
const taskValidationSchema = require("../validation/taskValidation");

const getTasks = async (req, res) => {
  try {
    const data = await taskModel.find().sort({ taskCreated: -1 }); //desc order based on taskCreated
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const data = await taskModel.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTask = async (req, res) => {
  const subtaskAssigneeData = (subtaskAssignees) => {
    var subtaskAssigneeArr = [];

    subtaskAssignees.forEach((subtaskAssignee) => {
      subtaskAssigneeArr.push({
        subtaskAssigneeId: subtaskAssignee.subtaskAssigneeId,
        subtaskAssigneeName: subtaskAssignee.subtaskAssigneeName,
      });
    });
    return subtaskAssigneeArr;
  };

  const subtaskData = (subtasks) => {
    var subtaskArr = [];

    subtasks.forEach((subtask) => {
      subtaskArr.push({
        subtaskTitle: subtask.subtaskTitle,
        subtaskDesc: subtask.subtaskDesc,
        subtaskOwner: subtask.subtaskOwner,
        subtaskAssignee: subtaskAssigneeData(subtask.subtaskAssignee),
        subtaskPriority: subtask.subtaskPriority,
        subtaskStartDate: subtask.subtaskStartDate,
        subtaskDueDate: subtask.subtaskDueDate,
        subtaskStatus: subtask.subtaskStatus,
      });
    });
    return subtaskArr;
  };

  const taskAssigneeData = (taskAssignees) => {
    var taskAssigneeArr = [];

    taskAssignees.forEach((taskAssignee) => {
      taskAssigneeArr.push({
        taskAssigneeId: taskAssignee.taskAssigneeId,
        taskAssigneeName: taskAssignee.taskAssigneeName,
      });
    });

    return taskAssigneeArr;
  };

  const data = new taskModel({
    taskTitle: req.body.taskTitle,
    taskDesc: req.body.taskDesc,
    taskOwner: req.body.taskOwner,
    taskAssignee: taskAssigneeData(Object.values(req.body.taskAssignee)),
    taskPriority: req.body.taskPriority,
    taskStartDate: req.body.taskStartDate,
    taskDueDate: req.body.taskDueDate,
    taskStatus: req.body.taskStatus,
    subtask: subtaskData(Object.values(req.body.subtask)),
  });

  const { validationError } = taskValidationSchema.validate(data);
  console.log(validationError);

  if (validationError) {
    res.status(400).json({ message: validationError.message });
  } else {
    try {
      const taskData = await data.save();
      res.status(200).json(taskData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await taskModel.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await taskModel.findByIdAndDelete(id);
    res.send("Data with id: " + result.id + " has been deleted.");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getTask, getTasks, addTask, updateTask, deleteTask };
