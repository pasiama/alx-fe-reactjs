import { useRecipeStore } from './recipeStore'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();
  const handleDelete = () => {
      deleteRecipe(recipeId);
      navigate('/'); // Redirect to the homepage or another route after deletion
    };
  
  return (
    <button onClick={() => handleDelete(recipeId)}>Delete Recipe</button>
  );
};

DeleteRecipeButton.propTypes = {
      recipeId: PropTypes.string.isRequired,
};

export default DeleteRecipeButton;


