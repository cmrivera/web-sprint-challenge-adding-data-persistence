const db = require("../data/dbConfig");

module.exports = {
  getProjects,
  addProjects,
  removeProjects,
};

//function for router.get. return projects from database then map through and return whether completed or not
function getProjects() {
  return db("Projects").then((projects) =>
    projects.map((project) => {
      return { ...project, completed: !!project.completed };
    })
  );
}

//function for router.post to post a new project to projects database
function addProjects(newProject) {
  return db("projects").insert(newProject);
}

//function for router.delete to remove projects requireing id and found with id.
function removeProjects(id) {
  return db("projects").where("id", id).del();
}
