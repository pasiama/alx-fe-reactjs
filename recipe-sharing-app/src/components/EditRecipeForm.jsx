import { useState } from 'react';
import { useRecipeStore } from './recipeStore'
import PropTypes from 'prop-types';

  

const EditRecipeForm = ({ recipe }) => {
      const [title, setTitle] = useState(recipe.title);
      const updateRecipe = useRecipeStore((state) => state.updateRecipe);

      const [description, setDescription] = useState(recipe.description);

      const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({ ...recipe, title, description });
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <button type="submit">Update Recipe</button>
        </form>
      );
    };// Rest of the code...



EditRecipeForm.propTypes = {
      recipe: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            // Add other required props for recipe object
      }).isRequired,
};


 

export default EditRecipeForm;

