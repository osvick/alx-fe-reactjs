import React, { useEffect, useState } from 'react';
import recipesData from '../data.json'

const RecipeCard = ({ recipe }) => {
    return (
        <div className='bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]'>
            
            <img 
                className='w-full h-48 object-cover' 
                src={recipe.image} 
                alt={recipe.title} 
            />
            
            <div className='p-4'>
                <h2 className='text-xl font-bold text-gray-800 mb-2'>{recipe.title}</h2>
                <p className='text-gray-600 text-sm mb-4 line-clamp-3'>{recipe.summary}</p>
                
                <a 
                    href={`/recipe/${recipe.id}`} 
                    className='inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded-full hover:bg-blue-700 transition duration-150'
                >
                    View Recipe
                </a>
            </div>
        </div>
    );
};


const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
        setRecipes(recipesData);
        setIsLoading(false);
    }, 500);
 }, []);

 if (isLoading) {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
            <p className='text-xl text-blue-600'>Loading delicious recipes...</p>
        </div>
    );
 }
    
    return (
        <div className='min-h-screen bg-gray-50 py-10'>
            <header className='text-center mb-10 px-4'>
                <h1 className='text-4xl font-extrabold text-gray-800 mb-2'>
                    Delicious Recipes
                </h1>
                <p className='text-xl text-gray-500'>
                    Discover your favourite recipes
                </p>
            </header>
            <div className='max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {recipesData.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;