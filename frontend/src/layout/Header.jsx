import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
   <header class="bg-[#562F1A] p-4">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-white font-bold text-xl border-2 border-[#BECAD4] p-2">Recipe</div>

    <nav class="hidden md:flex space-x-4 border-2 border-[#BECAD4] p-2">
      <Link to="/" class="text-gray-300 hover:text-white">Главная</Link>
      <Link to="/list" class="text-gray-300 hover:text-white">Рецепты</Link>
      <Link to="/form" class="text-gray-300 hover:text-white">Форма</Link>
    </nav>

    <div class="md:hidden">
      <button class="text-white focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </div>
</header>

  );
}

export default Header;
