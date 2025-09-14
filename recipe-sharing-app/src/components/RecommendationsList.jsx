// src/components/RecommendationsList.jsx
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const { recommendations, recipes } = useRecipeStore();

  // Get recommended recipes and sort them by views (highest first)
  const recommendedRecipes = recipes
    .filter((r) => recommendations.includes(r.id))
    .sort((a, b) => (b.views || 0) - (a.views || 0));

  if (recommendedRecipes.length === 0) {
    return <p>No recommendations yet — view some recipes to get suggestions!</p>;
  }

  return (
    <div>
      <h2>Recommended Recipes (Most Viewed)</h2>
      <ul>
        {recommendedRecipes.map((r) => (
          <li key={r.id}>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link> — Views: {r.views || 0}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsList;
