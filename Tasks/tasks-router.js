const express = require("express");
const Schemes = require("../data/db-scheme.js");
const router = express.Router();

router.get("/", (req, res) => {
  Schemes.findTasks()
    .then((tasks) => {
      res.status(200).json({ tasks });
    })
    .catch((error) => {
      res.status(500).json({ error: "Could not display list of tasks" });
    });
});

router.post("/", (req, res) => {
  Schemes.addTask(req.body)
    .then((newTask) => {
      res.status(200).json({ newTask });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Could not create new task" });
    });
});
module.exports = router;
