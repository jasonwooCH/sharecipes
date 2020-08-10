import axios from 'axios';

import { GET_RECIPES, RECIPE_ERROR, GET_RECIPE } from './types';

export const getRecipes = () => async (dispatch) => {
  try {
    console.log('Making GET Recipes API');
    const res = await axios.get('/api/recipes');

    dispatch({
      type: GET_RECIPES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RECIPE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getRecipeById = (recipeId) => async (dispatch) => {
  try {
    console.log('Making GET Recipe by Id API');
    const res = await axios.get(`/api/recipes/${recipeId}`);

    dispatch({
      type: GET_RECIPE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RECIPE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createRecipe = (formData, history) => async (dispatch) => {
  try {
    console.log('Making POST create Recipe API');

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/recipes/', formData, config);

    dispatch({
      type: GET_RECIPE,
      payload: res.data,
    });

    history.push(`/recipes/${res.data._id}`);
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({
      type: RECIPE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
