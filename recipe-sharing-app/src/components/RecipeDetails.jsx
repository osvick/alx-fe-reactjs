import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const {
    recipes = [],
    favorites = [],
    toggleFavorite,
    incrementViewCount,
  } = useRecipeStore();

  const recipe = recipes.find((r) => Number(r.id) === recipeId);

  const hasIncremented = useRef(false);
  useEffect(() => {
    if (recipe && incrementViewCount && !hasIncremented.current) {
      incrementViewCount(recipe.id);
      hasIncremented.current = true;
    }
  }, [recipe, incrementViewCount]);

  if (!recipe) return <p>Recipe not found.</p>;

  const isFavorite = favorites.includes(recipeId);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p><strong>ID:</strong> {recipe.id}</p>
      <p>{recipe.description}</p>
      <p><strong>Views:</strong> {recipe.views || 0}</p>

      <div style={{ margin: '1rem 0' }}>
        <button onClick={() => toggleFavorite(recipe.id)}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>

      <h3>Edit This Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <h3>Delete This Recipe</h3>
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
