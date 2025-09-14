import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: 900, margin: '32px auto', padding: '0 16px' }}>
        <header style={{ marginBottom: 24 }}>
          <h1 style={{ margin: 0 }}>Recipe Sharing App</h1>
          <nav style={{ marginTop: 8 }}>
            <Link to="/" style={{ marginRight: 12 }}>Home</Link>
            <Link to="/add" style={{ marginRight: 12 }}>Add Recipe</Link>
            <Link to="/favourites" style={{ marginRight: 12 }}>Favourites</Link>
            <Link to="/recommendations">Recommendations</Link>
          </nav>
        </header>

        <main>
          <SearchBar />
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/favourites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationsList />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
