import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
      const newErrors = {};
      if (!title) newErrors.title = "Recipe title is required";
      if (!ingredients) newErrors.ingredients = "Ingredients are required";
      if (!steps) newErrors.steps = "Preparation steps are required";
      return newErrors;
    };

 const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setTitle("");
  setIngredients("");
  setSteps("");
  setErrors({});

  console.log({ title, ingredients, steps });
};

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add a New Recipe</h2>

      {/* Title Input */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">
          Recipe Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      {/* Ingredients Textarea */}
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-700">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      {/* Preparation Steps Textarea */}
      <div className="mb-4">
        <label htmlFor="steps" className="block text-gray-700">
          Preparation Steps
        </label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 focus:ring focus:ring-blue-300 transition duration-200"
      >
        Submit Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
