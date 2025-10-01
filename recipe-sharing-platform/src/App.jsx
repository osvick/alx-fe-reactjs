
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/recipe/:id" element={<RecipeDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;