const express = require("express");
const Schemes = require("../data/db-scheme.js");
const router = express.Router();

router.get("/", (req, res) => {
  Schemes.findProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.post("/", (req, res) => {
  Schemes.addProject(req.body)
    .then((project) => {
      res.status(200).json({ project });
    })
    .catch((error) => {
      res.status(500).json({ error: "Could not add new project" });
    });
});

module.exports = router;
