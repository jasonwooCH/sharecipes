const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  ingredients: [
    {
      item: {
        type: String,
        required: true,
      },
      amount: {
        type: String,
      },
    },
  ],
  instructions: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  publisehd: {
    type: Boolean,
    default: false,
  },
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);
