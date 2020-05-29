
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'Bacon'},
        {id: 2, ingredient_name: 'Lettuce'},
        {id: 3, ingredient_name: 'Tomato'},
        {id: 4, ingredient_name: 'Cheddar'},
        {id: 5, ingredient_name: 'Turkey'},
        {id: 6, ingredient_name: 'Bread'}
      ]);
    });
};
