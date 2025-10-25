import { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/recipes/', { title, description })
      .then(() => {
        setTitle('');
        setDescription('');
        window.location.reload(); // Перезагрузка для обновления списка
      })
      .catch(error => console.error('Error creating recipe:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;