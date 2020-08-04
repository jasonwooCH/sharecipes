import { GET_RECIPES, RECIPE_ERROR } from '../actions/types';

const initialState = {
  recipe: null,
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
    default:
      return state;
  }
}
