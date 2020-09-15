exports.seed = async function (knex) {
  await knex("tasks").insert([
    {
      description: "Create a community theme",
      notes: "Be yourself, but always consider your presentation",
      completed: true,
      projects_id: 1,
    },
    {
      description: "Setup everything!",
      notes: "Lots of online resources, but technical skills are a must",
      completed: true,
      projects_id: 1,
    },
    {
      description: "Go live!",
      notes: "Launch your stream on your prefered platform",
      completed: true,
      projects_id: 1,
    },
    {
      description: "Choose Hardware & Software",
      notes: "Reach out to SysAdmin friends who have a home lab",
      completed: true,
      projects_id: 2,
    },
    {
      description: "Assemble the system",
      completed: false,
      projects_id: 2,
    },
    {
      description: "Chose a topic you're interested in",
      notes: "Find multiple rsources on that topic",
      completed: false,
      projects_id: 3,
    },
  ]);
};
