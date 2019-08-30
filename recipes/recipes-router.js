const express = require('express')

const Recipes = require('./recipes-model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(err => {
        res.status(500).json({
            message: 'there was an error retrieving the recipes'
        })
    })
})

router.get('/:id/shoppinglist', (req, res) => {
    Recipes.getShoppingList()
    .then(shoppingList => {
        res.status(200).json(shoppingList)
    })
    .catch(err => {
        res.status(500).json({
            message: 'could not get the shoppig list'
        })
    })
})

router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions()
    .then(instructions => {
        res.status(200).json(instructions)
    })
    .catch(err => {
        res.status(500).json({
            message: 'there was an error getting the instructions'
        })
    })
})