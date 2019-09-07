exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("chefs")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("chefs").insert([
        {
          id: 1,
          name: "Chef Hassan",
          city: "Charlotte",
          state: "NC",
          email: "hassancooks@yahoo.com"
        },
        {
          id: 2,
          name: "Jon Traverso",
          city: "Rock Hill",
          state: "SC",
          email: "jonTravers@google.com",
          phone: 1234567890
        }
      ]);
    });
};
