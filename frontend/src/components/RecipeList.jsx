import { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = ({ token }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/recipes/', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, [token]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Мои рецепты</h1>
        <a href="/form" className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700">
          + Добавить
        </a>
      </div>

      {recipes.length === 0 ? (
        <p className="text-center text-gray-500 py-10">Пока нет рецептов. Добавьте первый!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map(recipe => (
            <div key={recipe.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
              <div className="flex justify-between">
                <a href={`/form?id=${recipe.id}`} className="text-amber-600 hover:underline">
                  Редактировать
                </a>
                <button className="text-red-600 hover:underline">
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;