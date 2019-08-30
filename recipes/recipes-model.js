const db = require('../data/db-config.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

// returns list of all recipes from database
function getRecipes() {
    return db(recipes)
}

// return list of items needed for each recipe
function getShoppingList(recipe_id) {
    const id = recipe_id;
    return db('recipes')
        .join('rec_ingred', 'recipes.id', 'rec_ingred.recipe_id')
        .join('ingredients', 'ingredients.id', 'rec_ingred.ingredient.id')
        .select('recipes.name', 'ingredients.name', 'rec_ingred.quantity')
        .where({'recipes.id': id})
}

// returns detailed list of instructions for each recipe
function getInstructions(recipe_id) {
    const id = recipe_id
    return db('recipes')
        .join('instructions as i', 'r.id', 'i.recipe_id')
        .select('recipes.name', 'i.instrucstions_number', 'i.instructions')
        .where({'recipes.id': id})
        .orderBy('i.instructions_number')
}