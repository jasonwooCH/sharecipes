import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipePost = ({ recipe: { _id, title, author, date, ingredients, instructions } }) => {
  return (
    <div className="card bg-light mb-3">
      <div className="card-body">
        <h4>
          <Link to={`/recipe/${_id}`} className="card-title">
            {title}
          </Link>
        </h4>
        <p className="card-text">By: {author}</p>
        <p className="card-text">Published: {date}</p>
      </div>
    </div>
  );
};

RecipePost.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipePost;
