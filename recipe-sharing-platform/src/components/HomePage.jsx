import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import recipesData from '../data.json'

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
            <div className='max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {recipesData.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;