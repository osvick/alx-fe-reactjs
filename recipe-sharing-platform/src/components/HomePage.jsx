import React from 'react';
import recipesData from '../data.json'
import RecipeCard from './RecipeCard';

const HomePage = () => {
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