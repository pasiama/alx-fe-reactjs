
import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom';

const RecipeList = () => {
      const recipes = useRecipeStore((state) => state.recipes);
    
      if (!recipes || recipes.length === 0) {
        return <div>No recipes available.</div>; // Handle empty or undefined recipes array
      }
    
      return (
        <div>
          {recipes.map((recipe) => (
            <div key={recipe.id}>
             <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link> {/* Link to recipe details */}
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      );
    };
export default RecipeList;
