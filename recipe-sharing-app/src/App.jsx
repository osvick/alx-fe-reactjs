// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import useRecipeStore from './components/recipeStore';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: 900, margin: '32px auto', padding: '0 16px' }}>
        <header style={{ marginBottom: 24 }}>
          <h1 style={{ margin: 0 }}>Recipe Sharing App</h1>
          <nav style={{ marginTop: 8 }}>
            <Link to="/" style={{ marginRight: 12 }}>Home</Link>
            <Link to="/add">Add Recipe</Link>
          </nav>
        </header>

        <main>
          <>
          <SearchBar />
          </>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            {/* fallback route could be added */}
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
