const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("./Projects/project-router");
const tasksRouter = require("./Tasks/tasks-router");
const resourcesRouter = require("./Resources/resources-router");

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
