const db = require("../data/dbConfig");

module.exports = {
  getResources,
  addResources,
  removeResources,
};

//function for router.get to get resources of projects and then display db of resources
function getResources() {
  return db("resources");
}

//function to for router.post to add a resource to project and then return resources
function addResources(newResource) {
  return db("resources").insert(newResource);
}

//function for router.delete found with id then delete resource and display on resource list
function removeResources(id) {
  return db("resources").where("id", id).del();
}
