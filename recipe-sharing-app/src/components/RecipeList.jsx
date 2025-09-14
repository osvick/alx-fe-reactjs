// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (!filteredRecipes || filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      <h2>All Recipes</h2>
      {filteredRecipes.map((r) => (
        <div key={r.id} style={{ marginBottom: '16px' }}>
          <Link to={`/recipe/${r.id}`}>
            <h3>{r.title}</h3>
          </Link>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
