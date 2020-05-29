const db = require('../data/db-config')

function getRecipes() {
    return db('recipe_names')
}

function getShoppingList(id){
    //return all ingredients and quantities for a given recipe
    return db.select('quantity', 'ingredient_name').from('recipes').innerJoin('ingredients', 'ingredients.id', 'recipes.ingredients_id').where({ recipe_id: Number(id) })
}

function getInstructions(id){
    //return the list of instructions
    return db.select('step', 'instruction', 'recipe_name').from('instructions').innerJoin('recipe_names', 'recipe_names.id', 'instructions.recipe_id').where({ recipe_id: Number(id) })
}

function getIngredients(id){
    //all recipes in the system that utilize a single ingredient 
    return db.select('recipe_name').from('recipes').innerJoin('recipe_names', 'recipe_names.id', 'recipes.recipe_id').where({ ingredients_id: Number(id) })
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getIngredients
}