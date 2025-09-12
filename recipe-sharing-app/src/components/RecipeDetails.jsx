// src/components/RecipeDetails.jsx
import { Link, useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (confirm('Delete this recipe?')) {
      deleteRecipe(id);
      navigate('/');
    }
  };

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: 12 }}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/">← Back to recipes</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
