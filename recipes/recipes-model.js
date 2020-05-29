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
    return db('instructions').where({ recipe_id: Number(id) })
}

function getIngredients(id){
    //return the list of instructions
    return db('ingredients').where({ id: Number(id) })
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getIngredients
}