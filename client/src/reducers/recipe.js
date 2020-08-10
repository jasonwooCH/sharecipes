import { GET_RECIPES, RECIPE_ERROR, GET_RECIPE } from '../actions/types';

const initialState = {
  currRecipe: null,
  recipes: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
        loading: false,
      };
    case GET_RECIPE:
      return {
        ...state,
        currRecipe: payload,
        loading: false,
      };
    case RECIPE_ERROR:
      return {
        ...state,
        currRecipe: null,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
