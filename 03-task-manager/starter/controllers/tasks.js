const Tasks = require("../models/Tasks");

const asyncWrapper = require("../middleware/async");

// get all the items
const getAllTasks = asyncWrapper(async (req, res) => {
  const task = await Tasks.find({});
  res.status(200).json({ task });
  // res.status(200).json({ task, amount:task.length});
  // res
  //   .status(200)
  //   .json({ status: "succces", data: { task, nbHits: task.length } });
});

//Post method

const createTask = asyncWrapper(async (req, res) => {
  const task = await Tasks.create(req.body);
  res.status(201).json({ task });
});

//get one task

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Tasks.findOne({ _id: taskID });
  if (!task) {
    const error = new Error("Not Found");
    error.status(404);
    // return next(error);
    return res.status(404).json({ msg: `No task with id:${taskID}` });
  }
  res.status(200).json({ task });
});

// delete the task
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Tasks.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `no task with id : ${taskID}` });
    }
    // res.status(200).json({ task });
    res.status(200).json({ task: null, state: "success" });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// update the task
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    // const task = await Tasks.findOneAndUpdate({ _id: taskID }, req.body); it will return old items
    const task = await Tasks.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `no task with Id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
