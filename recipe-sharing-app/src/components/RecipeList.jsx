// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {recipes.map((r) => (
            <li key={r.id} style={{ marginBottom: 16, border: '1px solid #ddd', padding: 12, borderRadius: 6 }}>
              <h3 style={{ margin: '0 0 6px' }}>{r.title}</h3>
              <p style={{ margin: '0 0 8px' }}>{r.description?.slice(0, 120)}{r.description?.length > 120 ? '…' : ''}</p>
              <div>
                <Link to={`/recipes/${r.id}`} style={{ marginRight: 12 }}>View</Link>
                <Link to={`/recipes/${r.id}/edit`}>Edit</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
