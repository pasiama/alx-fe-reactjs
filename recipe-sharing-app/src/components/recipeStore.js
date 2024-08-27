import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to set the search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    }));
  },

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe].filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

      // Action to update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Action to delete a recipe
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
    // Ensure this is always initialized as an empty array
    favorites: [],
    addFavorite: (recipeId) =>
      set((state) => ({ favorites: [...state.favorites, recipeId] })),
    removeFavorite: (recipeId) =>
      set((state) => ({
        favorites: state.favorites.filter((id) => id !== recipeId),
      })),
    recommendations: [],
    generateRecommendations: () =>
      set((state) => {
        const recommended = state.recipes.filter(
          (recipe) =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
      }),

  // Action to set or initialize the recipes
  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(set.searchTerm.toLowerCase())
      ),
    }),
}));

export {useRecipeStore};



