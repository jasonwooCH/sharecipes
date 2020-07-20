const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Recipe = require('../../models/Recipe');

// @route   GET api/recipe
// @desc    Get all recipes
// @access  Public
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/recipe
// @desc    Create recipe
// @access  Public
router.post('/', [check('title', 'Recipe Title is required').not().isEmpty()], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, author, ingredients, instructions, date } = req.body;

  const recipeFields = {};
  recipeFields.title = title;
  recipeFields.author = author;
  recipeFields.ingredients = ingredients;
  recipeFields.instructions = instructions;
  recipeFields.date = date;

  try {
    let recipe = new Recipe(recipeFields);
    await recipe.save();
    return res.json(recipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
