import React from 'react';

const RecipeCard = ({ recipe }) => {
    return (
        <div className='bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]'>
            <img className='w-full h-48 object-cover' src="{recipe.image}" alt="{recipe.title}" />
            <div className='p-4'>
                <h2 className='text-xl font-bold text-gray-800 mb-2'>{recipe.title}</h2>
                <p className='text-gray-600 text-sm mb-4 line-clamp-3'>{recipe.summary}</p>
                <a href='{`/recipe/${recipe.id}`}' className='inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded-full hover:bg-blue-700 transition duration-150'>View Recipe</a>
            </div>
        </div>
    );
};

export default RecipeCard;