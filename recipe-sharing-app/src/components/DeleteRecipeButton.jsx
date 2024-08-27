import { useRecipeStore } from './recipeStore';
import PropTypes from 'prop-types';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)}>Delete Recipe</button>
  );
};

DeleteRecipeButton.propTypes = {
      recipeId: PropTypes.string.isRequired,
};

export default DeleteRecipeButton;
