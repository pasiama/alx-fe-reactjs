
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// A wrapper to extract the recipe ID from the URL
import PropTypes from 'prop-types';

const RecipeDetailsWrapper = ({ match }) => {
  const recipeId = parseInt(match.params.id, 10);
  return <RecipeDetails recipeId={recipeId} />;
};

RecipeDetailsWrapper.propTypes = {
  match: PropTypes.object.isRequired,
};

export default App;
