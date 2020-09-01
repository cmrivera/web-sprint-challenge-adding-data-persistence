const db = require("../data/dbConfig");

module.exports = {
  getTasks,
  addTasks,
  removeTasks,
};

//function for router.get to get tasks of resources of projects . map over tasks and then display whether completed or not.
function getTasks() {
  return db("tasks").then((tasks) =>
    tasks.map((task) => {
      return { ...task, completed: !!task.completed };
    })
  );
}

//function for router.post to add tasks to resources of project. then return tasks
function addTasks(newTask) {
  return db("tasks").insert(newTask);
}

//function to remove tasks requirng id, then return tasks. find using id. then delete.
function removeTasks(id) {
  return db("tasks").where("id", id).del();
}
