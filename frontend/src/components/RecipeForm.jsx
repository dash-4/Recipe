// src/pages/FormPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function FormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    ingredients: [""],
    steps: [""],
    cookingTime: "",
    servings: "",
    difficulty: "easy"
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`http://127.0.0.1:8000/api/recipes/${id}/`)
        .then(res => res.json())
        .then(data => {
          setForm({
            title: data.title || "",
            description: data.description || "",
            ingredients: data.ingredients || [""],
            steps: data.steps || [""],
            cookingTime: data.cooking_time || "",
            servings: data.servings || "",
            difficulty: data.difficulty || "easy"
          });
          setLoading(false);
        })
        .catch(() => {
          alert("Рецепт не найден");
          setLoading(false);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, value, field) => {
    const newArray = [...form[field]];
    newArray[index] = value;
    setForm({ ...form, [field]: newArray });
  };

  const addField = (field) => {
    setForm({ ...form, [field]: [...form[field], ""] });
  };

  const removeField = (index, field) => {
    setForm({ ...form, [field]: form[field].filter((_, i) => i !== index) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const url = id
      ? `http://127.0.0.1:8000/api/recipes/${id}/`
      : "http://127.0.0.1:8000/api/recipes/";

    const method = id ? "PUT" : "POST";

    const body = {
      ...form,
      cooking_time: form.cookingTime ? Number(form.cookingTime) : null,
      servings: form.servings ? Number(form.servings) : null,
      ingredients: form.ingredients.filter(i => i.trim()),
      steps: form.steps.filter(s => s.trim())
    };

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(res => {
        if (!res.ok) throw new Error();
        navigate("/list");
      })
      .catch(() => {
        alert("Ошибка сохранения");
        setLoading(false);
      });
  };

  if (loading) return <p className="text-center py-10">Загрузка...</p>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {id ? "Редактировать рецепт" : "Добавить рецепт"}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-6">
        {/* Название */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Название *</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Например: Паста карбонара"
          />
        </div>

        {/* Описание */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Описание</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Краткое описание рецепта..."
          />
        </div>

        {/* Ингредиенты */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ингредиенты</label>
          {form.ingredients.map((ing, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input
                type="text"
                value={ing}
                onChange={(e) => handleArrayChange(i, e.target.value, "ingredients")}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="200г спагетти"
              />
              {form.ingredients.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeField(i, "ingredients")}
                  className="px-3 text-red-600 hover:text-red-800"
                >
                  Удалить
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("ingredients")}
            className="text-amber-600 hover:text-amber-700 text-sm font-medium"
          >
            + Добавить ингредиент
          </button>
        </div>

        {/* Шаги */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Шаги приготовления</label>
          {form.steps.map((step, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <textarea
                value={step}
                onChange={(e) => handleArrayChange(i, e.target.value, "steps")}
                rows={2}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                placeholder={`Шаг ${i + 1}: Отварите пасту...`}
              />
              {form.steps.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeField(i, "steps")}
                  className="px-3 text-red-600 hover:text-red-800"
                >
                  Удалить
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("steps")}
            className="text-amber-600 hover:text-amber-700 text-sm font-medium"
          >
            + Добавить шаг
          </button>
        </div>

        {/* Дополнительно */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Время (мин)</label>
            <input
              type="number"
              name="cookingTime"
              value={form.cookingTime}
              onChange={handleChange}
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Порций</label>
            <input
              type="number"
              name="servings"
              value={form.servings}
              onChange={handleChange}
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Сложность</label>
            <select
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="easy">Легко</option>
              <option value="medium">Средне</option>
              <option value="hard">Сложно</option>
            </select>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Сохранение..." : id ? "Сохранить изменения" : "Добавить рецепт"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/list")}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;