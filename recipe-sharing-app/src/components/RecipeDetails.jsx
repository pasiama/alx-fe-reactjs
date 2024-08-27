import { useRecipeStore } from './recipeStore'
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams } from 'react-router-dom'; 
import PropTypes from 'prop-types';

const RecipeDetails = () => {
      const { recipeId } = useParams(); // Get the recipeId from the route parameters
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId)) // Find the recipe by ID
  );
        
          if (!recipe) {
            return <p>Recipe not found</p>;
          }
        
          return (
            <div>
              <h1>{recipe.title}</h1>
              <p>{recipe.description}</p>
              <EditRecipeForm recipe={recipe} />
              <DeleteRecipeButton recipeId={recipeId} />
            </div>
          );
      // Your code here
};

RecipeDetails.propTypes = {
      recipeId: PropTypes.string.isRequired,
};

export default RecipeDetails;
