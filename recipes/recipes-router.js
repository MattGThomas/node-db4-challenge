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

router.get('/:id/shoppinglist', async (req, res) => {
    const { id } = req.params

    try {
        const shoppingList = await Recipes.getShoppingList(id)

        if(shoppingList && shoppingList.length > 0) {
            res.status(200).json(shoppingList)
        } else {
            res.status(404).json({
                message: 'can not get shopping list with given id'
            })
        }
    } catch (err) {
        res.status(500).json({
            message: 'there was an error retrieving the shopping list'
        })
    }
    // Recipes.getShoppingList(id)
    // .then(shoppingList => {
    //     if (shoppingList) {
    //         res.json(shoppingList)
    //     } else {
    //         res.status(404).json({
    //             message: 'could not find shopping list with the given id'
    //         })
    //     }
    // })
    // .catch(err => {
    //     res.status(500).json({
    //         message: 'could not get the shopping list'
    //     })
    // })
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

module.exports = router