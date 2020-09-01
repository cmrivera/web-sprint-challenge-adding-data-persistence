const express = require("express");

const db = require("./project-model");

const router = express.Router();

//router.get to get projects from db and then display projects
router.get("/", (req, res) => {
  db.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to get project" });
    });
});

//router.post to post a new project requiring body of the dat. add projects to data then display is succesful, if not send error
router.post("/", (req, res) => {
  const data = req.body;

  db.addProjects(data)
    .then((newProjects) => {
      res.status(201).json(newProjects);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new project" });
    });
});

//router.delete requiring id in order to remove projects then displaying removed project.  if not succesfull give error message
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.removeProjects(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete project" });
    });
});

module.exports = router;
