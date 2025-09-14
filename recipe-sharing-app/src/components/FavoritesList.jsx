// src/components/FavoritesList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const { favorites = [], recipes = [], toggleFavorite } = useRecipeStore();

  const favoriteRecipes = recipes.filter(r => favorites.includes(r.id));

  if (favoriteRecipes.length === 0) {
    return <p>No favourite recipes yet.</p>;
  }

  return (
    <div>
      <h2>My Favourites</h2>
      <ul>
        {favoriteRecipes.map(r => (
          <li key={r.id}>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
            <button 
              style={{ marginLeft: '10px' }} 
              onClick={() => toggleFavorite(r.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
