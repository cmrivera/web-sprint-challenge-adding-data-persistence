
exports.up = function(knex) {
  
  //create projects table with columns for  requirements id, project_name, description and completed or not
  await knex.schema.createTable('Projects', tbl =>{
    tbl.increments();
    tbl.string('project_name', 255).notNullable();
    tbl.string('description');
    tbl
    .boolean('completed')
    .notNullable()
    .defaultTo(false);
})

//create a tasks for projects  table with cloumns for ids with cascading on update and delete, description of task , task_name , any additional_notes and noolean completed or not.
.createTable('Tasks', tbl => {
    tbl.increments();
    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    tbl.string('description').notNullable();
    tbl.string('task_name', 255).notNullable();
    tbl.string('additional_notes', 255);
    tbl.boolean('completed').notNullable().defaultTo(false);
})

//create resources table for resources to complete tasks in projects with colum for id, name od rresource and a description of the resource
.createTable('Resources', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable().unique();
    tbl.string('description');
})

//create a table with resources of the projects.  columns for projectId, projects table information and cascading on uodate and delete.   also include resource id name of resources form resource table and cascading effect again
.createTable('project_resources', tbl => {
    tbl.increments();
    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    tbl.integer('resource_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('resources')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
})
};


//down function to drop created tables if a table is found to xist. 
exports.down = function(knex) {
  await knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects');
};
