exports.seed = async function (knex) {
  await knex("resources").insert([
    { name: "Personal Computer", description: "High end PC" },
    { name: "Microphone", description: "Not your headset mic!" },
    { name: "Rack/Hardware", description: "Bare rack or off the shelf setup" },
    { name: "Software", description: "Software for admin of the server" },
    { name: "Internet", description: "Unlimited knowledge!" },
  ]);
};
