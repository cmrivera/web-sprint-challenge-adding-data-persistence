const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("./projects/projects-router");
const tasksRouter = require("./tasks/tasks-router");
const resourcesRouter = require("./resources/resources-router");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/projects", projectsRouter);
server.use("/tasks", tasksRouter);
server.use("/resources", resourcesRouter);

server.use("/", (req, res) => {
  res.json("Welcome!!");
});

module.exports = server;
