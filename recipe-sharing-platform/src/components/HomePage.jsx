import {useEffect, useState} from 'react'
import data from "../data.json";

function HomePage() {
      const [recipes, setRecipes] = useState([]);

      useEffect(() => {
        fetch('/data.json',)
         .then(response => response.json())
         .then(data => setRecipes(data))
         .catch((error) => console.error('Error fetching data:', error));

         setRecipes(data);
      }, []);
      
      if (!recipes.length) return <div>Loading...</div>;
      return (
            <div className="container mx-auto p-4">
              <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                  <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-neutral-700 transition-shadow duration-300">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
                    <p className="text-gray-600 mt-2">{recipe.summary}</p>
                    <a
                      href={`/recipes/${recipe.id}`}
                      className="text-blue-500 hover:underline mt-4 block"
                    >
                      View Recipe
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
}

export default HomePage