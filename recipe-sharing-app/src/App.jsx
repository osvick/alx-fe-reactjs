// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';

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
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
            <Route path="/recipes/:id/delete" element={<DeleteRecipeButton />} />
            {/* fallback route could be added */}
            <Route path="/recipe/:id" element={<RecipeDetails />} />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
