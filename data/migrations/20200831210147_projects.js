exports.up = async function (knex) {
  await knex.schema.createTable("project", (table) => {
    table.increments("id");
    table.text("name").notNullable().unique();
    table.text("description");
    table.boolean("completed").notNullable().default(false);
  });

  await knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.text("description").notNullable();
    table.text("notes");
    table.boolean("completed").notNullable().default(false);
    table
      .integer("projects_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments("id");
    table.text("name").notNullable().unique();
    table.text("description");
  });

  await knex.schema.createTable("projects_resources", (table) => {
    table
      .integer("projects_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE");
    table
      .integer("resources_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources")
      .onUpdate("CASCADE");
    table.primary(["projects_id", "resources_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("projects_resources");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("project");
};
