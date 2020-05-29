const db = require('../data/db-config')

function getRecipes() {
    return db('recipe_names')
}

function getShoppingList(id){
    //return all ingredients and quantities for a given recipe
    return db('recipes').where({ recipe_id: Number(id) })
}

function getInstructions(id){
    //return the list of instructions
    return db('instructions').where({ recipe_id: Number(id) })
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}