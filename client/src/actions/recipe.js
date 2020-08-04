import axios from 'axios';

import { GET_RECIPES, RECIPE_ERROR } from './types';

export const getRecipes = () => async (dispatch) => {
  try {
    console.log("Making GET Recipes API");
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
