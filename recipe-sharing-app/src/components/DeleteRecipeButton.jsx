// src/components/DeleteRecipeButton.jsx
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ id, onAfter }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm('Delete this recipe?')) {
      deleteRecipe(id);
      if (onAfter) onAfter();
      else navigate('/');
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
