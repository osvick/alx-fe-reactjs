import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id.toString() === id)
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p><strong>ID:</strong> {recipe.id}</p>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;
