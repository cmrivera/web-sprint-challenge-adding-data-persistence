exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      name: "Become a Streamer",
      description: "Live stream games!",
      completed: true,
    },
    {
      name: "Develop a home server",
      description: "Your own server for data and apps",
      completed: false,
    },
    {
      name: "Continue Learning",
      description: "Never stop educating yourself",
      completed: true,
    },
  ]);
};
