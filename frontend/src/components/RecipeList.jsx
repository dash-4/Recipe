import { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/recipes/')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id} className="mb-2">
            {recipe.title} - {recipe.created_at}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;