const express = require('express')

const recipes = require('./recipes-model.js')

const router = express.Router()

router.get('/recipes', (req, res) => {
    recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });

  router.get('/recipes/:id/shoppinglist', (req, res) => {
    const { id } = req.params
    recipes.getShoppingList(id)
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get shopping list' });
    });
  });

  router.get('/recipes/:id/instructions', (req, res) => {
    const { id } = req.params
    recipes.getInstructions(id)
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get shopping list' });
    });
  });

  router.get('/ingredients/:id', (req, res) => {
    const { id } = req.params
    recipes.getIngredients(id)
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes list' });
    });
  });

  module.exports = router