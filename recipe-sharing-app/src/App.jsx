
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import PropTypes from 'prop-types';
// import SearchBar from './components/SearchBar';


function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        {/* <SearchBar /> */}
        <FavoritesList />
      <RecommendationsList />
        <Routes>
          <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// A wrapper to extract the recipe ID from the URL


const RecipeDetailsWrapper = ({ match }) => {
  const recipeId = parseInt(match.params.id, 10);
  return <RecipeDetails recipeId={recipeId} />;
};

RecipeDetailsWrapper.propTypes = {
  match: PropTypes.object.isRequired,
};

export default App;


