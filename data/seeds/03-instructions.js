
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step: 1, instruction: 'rowValue1', recipe_id: '1'},
        {step: 2, instruction: 'rowValue2', recipe_id: '1'},
        {step: 3, instruction: 'rowValue3', recipe_id: '1'},
        {step: 1, instruction: '1', recipe_id: '2'},
        {step: 2, instruction: 'rowValue3', recipe_id: '2'},
        {step: 3, instruction: 'rowValue3', recipe_id: '2'},
        {step: 1, instruction: 'rowValue3', recipe_id: '3'},
        {step: 2, instruction: 'rowValue3', recipe_id: '3'},
        {step: 3, instruction: 'rowValue3', recipe_id: '3'}

      ]);
    });
};
