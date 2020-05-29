
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_names').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_names').insert([
        {id: 1, recipe_name: 'Grilled Cheese'},
        {id: 2, recipe_name: 'BLT'},
        {id: 3, recipe_name: 'Turkey Club'}
      ]);
    });
};
