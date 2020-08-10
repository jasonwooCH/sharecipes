import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRecipes } from '../../actions/recipe';
import RecipePost from '../recipe/RecipePost';

const Landing = ({ getRecipes, recipe: { recipes } }) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <Fragment>
      <div className="recipes">
        {recipes.length > 0 ? (
          recipes.map((recipe) => <RecipePost key={recipe._id} recipe={recipe} />)
        ) : (
          <h4>No Recipes found...</h4>
        )}
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, { getRecipes })(Landing);
