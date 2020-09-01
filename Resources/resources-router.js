const express = require("express");

const db = require("./resources-model");

const router = express.Router();

//router.get to pull resources of projects from db then display. if does not work display error
router.get("/", (req, res) => {
  db.getResources()
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to get resource" });
    });
});

//router.post to post a new resource for a project requiring body input.  then display is succesful. if not display message.
router.post("/", (req, res) => {
  const data = req.body;

  db.addResources(data)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

//router.delete to delete resource from a project requiring project id.  then display that it was deleted. if not succesful display error message.
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.removeResources(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find resource with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to resource task" });
    });
});

module.exports = router;
