import { create } from 'zustand';

// load saved recipes safely from localStorage
let savedRecipes = [];
try {
  const raw = localStorage.getItem('recipes');
  savedRecipes = raw ? JSON.parse(raw) : [];
} catch (err) {
  console.error('Failed to parse recipes from localStorage', err);
}

export const useRecipeStore = create((set, get) => ({
  recipes: savedRecipes,

  addRecipe: (newRecipe) => {
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      try {
        localStorage.setItem('recipes', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to persist recipes', err);
      }
      return { recipes: updated };
    });
  },

  setRecipes: (recipes) => {
    try {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    } catch (err) {
      console.error('Failed to persist recipes', err);
    }
    set({ recipes });
  },

  deleteRecipe: (id) => {
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      try {
        localStorage.setItem('recipes', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to persist recipes', err);
      }
      return { recipes: updated };
    });
  },

  updateRecipe: (id, updates) => {
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      );
      try {
        localStorage.setItem('recipes', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to persist recipes', err);
      }
      return { recipes: updated };
    });
  },
}));

export default useRecipeStore;
