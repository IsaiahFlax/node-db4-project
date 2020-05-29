
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: '1', ingredients_id: '4', quantity: 3},
        {recipe_id: '1', ingredients_id: '6', quantity: 2},
        {recipe_id: '2', ingredients_id: '1', quantity: 5},
        {recipe_id: '2', ingredients_id: '2', quantity: 1},
        {recipe_id: '2', ingredients_id: '3', quantity: 1},
        {recipe_id: '2', ingredients_id: '6', quantity: 2},
        {recipe_id: '3', ingredients_id: '1', quantity: 1},
        {recipe_id: '3', ingredients_id: '2', quantity: 1},
        {recipe_id: '3', ingredients_id: '3', quantity: 1},
        {recipe_id: '3', ingredients_id: '4', quantity: 1},
        {recipe_id: '3', ingredients_id: '5', quantity: 1},
        {recipe_id: '3', ingredients_id: '6', quantity: 2},

      ]);
    });
};
