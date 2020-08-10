import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipeById } from '../../actions/recipe';

const RecipePage = ({ getRecipeById, match, recipe: { currRecipe } }) => {
  useEffect(() => {
    getRecipeById(match.params.id);
  }, [getRecipeById]);

  return (
    <Fragment>
      {currRecipe !== null ? <h1>{currRecipe.title}</h1> : <h5>This recipe does not exist</h5>}
    </Fragment>
  );
};

RecipePage.propTypes = {
  getRecipeById: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, { getRecipeById })(RecipePage);
