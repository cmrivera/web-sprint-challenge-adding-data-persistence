const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("./projects/project-router");
const tasksRouter = require("./tasks/tasks-router");
const resourcesRouter = require("./resources/resources-router");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/projects", projectsRouter);
server.use("/tasks", tasksRouter);
server.use("/resources", resourcesRouter);

server.get("/", (req, res) => {
  res.json("Welcome!!");
});

module.exports = server;
