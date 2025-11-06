import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#592922] p-4"> 
      <div className="container mx-auto flex justify-between items-center "> 
        <div className="text-white font-bold text-xl border-2 border-[#BECAD4] p-2">Recipe</div> 

        <nav className="hidden md:flex space-x-4 border-2 border-[#BECAD4] p-2"> 
          <Link to="/" className="text-gray-300 hover:text-white">Главная</Link>
          <Link to="/list" className="text-gray-300 hover:text-white">Рецепты</Link>
          <Link to="/form" className="text-gray-300 hover:text-white">Форма</Link>
        </nav>

        <div className="md:hidden"> 
          <button className="text-white focus:outline-none"> 
            <svg
              className="w-6 h-6" 
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;