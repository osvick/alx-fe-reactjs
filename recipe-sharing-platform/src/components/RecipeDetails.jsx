
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); 
  
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 3. useEffect to fetch data when the component mounts or the ID changes
  useEffect(() => {
    const recipeId = parseInt(id, 10); 
    
    // Find the specific recipe in the mock data array
    const foundRecipe = recipesData.find(r => r.id === recipeId);

    // Simulate network delay before setting state
    setTimeout(() => {
        setRecipe(foundRecipe);
        setIsLoading(false);
    }, 500); 

  }, [id]); 
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-blue-600 bg-gray-50">
        Loading Recipe Details...
      </div>
    );
  }

  // --- Error State (Recipe Not Found) ---
  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-red-600 bg-gray-50">
        Error 404: Recipe not found! 😔
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-8">
        
        {/* Title and Summary */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-2">{recipe.title}</h1>
          <p className="text-xl text-gray-600 italic">{recipe.summary}</p>
        </header>

        {/* Image */}
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-auto object-cover rounded-lg shadow-md mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Ingredients Section */}
          <div>
            <h2 className="text-3xl font-semibold border-b-2 border-blue-200 pb-2 mb-4 text-gray-800">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="pl-4">{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-3xl font-semibold border-b-2 border-blue-200 pb-2 mb-4 text-gray-800">
              Cooking Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="pl-4">{step}</li>
              ))}
            </ol>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;