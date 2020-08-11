import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRecipe } from '../../actions/recipe';
import edit from '../../icons/edit.svg';
import trash from '../../icons/trash.svg';

const CreateRecipe = ({ createRecipe, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    ingredients: [],
    instructions: [],
  });
  const { title, author, ingredients, instructions } = formData;

  const [ingredient, setIngredient] = useState({
    item: '',
    amount: '',
  });
  const { item, amount } = ingredient;

  const [instruction, setInstruction] = useState('');

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleIngredientUpdate = (e) => {
    setIngredient({ ...ingredient, [e.target.name]: e.target.value });
  };

  const handleAddNewIngredient = (e) => {
    const newList = formData.ingredients.concat(ingredient);
    setFormData({ ...formData, ingredients: newList });
    setIngredient({
      item: '',
      amount: '',
    });
  };

  const handleAddNewInstruction = () => {
    const newList = formData.instructions.concat(instruction);
    setFormData({ ...formData, instructions: newList });
    setInstruction('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createRecipe(formData, history);
  };

  return (
    <Fragment>
      <h1>Create Your Recipe</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label for="recipeTitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="recipeTitle"
            placeholder="Title for your Recipe"
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label for="recipeAuthor">Author</label>
          <input
            type="text"
            className="form-control"
            id="recipeAuthor"
            placeholder="Author of the Recipe"
            name="author"
            value={author}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="form-group">
          <label for="recipeIngredient">List of Ingredients</label>
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="recipeIngredient"
              name="item"
              value={item}
              placeholder="Flour ..."
              onChange={(e) => handleIngredientUpdate(e)}
            />
            <input
              type="text"
              className="form-control"
              id="ingredientAmount"
              name="amount"
              value={amount}
              placeholder="1/4 Cup ..."
              onChange={(e) => handleIngredientUpdate(e)}
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" onClick={(e) => handleAddNewIngredient(e)}>
                Add Ingredient
              </button>
            </div>
          </div>
          <ul className="list-group mx-3 mb-3">
            {ingredients.map((entry, idx) => {
              return (
                <li className="list-group-item clearfix">
                  {entry.amount} {entry.item}
                  <span className="float-right">
                    <button className="btn btn-outline-light btn-sm">
                      <img src={edit} alt="Edit" style={{ height: 20, width: 20 }} />
                    </button>
                    <button className="btn btn-outline-light btn-sm">
                      <img src={trash} alt="Delete" style={{ height: 20, width: 20 }} />
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="form-group">
          <label for="recipeInstructions">Step-by-Step Instructions</label>
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="recipeInstructions"
              value={instruction}
              placeholder="Bring a pot of water to a boil ..."
              onChange={(e) => setInstruction(e.target.value)}
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" onClick={() => handleAddNewInstruction()}>
                Add Step
              </button>
            </div>
          </div>
          <ol className="list-group-flush mx-3">
            {instructions.map((entry, idx) => {
              return (
                <li className="list-group-item clearfix">
                  {idx + 1}. {entry}
                  <span className="float-right">
                    <button className="btn btn-outline-light btn-sm">
                      <img src={edit} alt="Edit" style={{ height: 20, width: 20 }} />
                    </button>
                    <button className="btn btn-outline-light btn-sm">
                      <img src={trash} alt="Delete" style={{ height: 20, width: 20 }} />
                    </button>
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        <input type="submit" className="btn btn-secondary my-1" />
      </form>
    </Fragment>
  );
};

CreateRecipe.propTypes = {
  createRecipe: PropTypes.func.isRequired,
};

export default connect(null, { createRecipe })(CreateRecipe);
