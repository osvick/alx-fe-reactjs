// src/store/recipeStore.js
import { create } from 'zustand';

let savedRecipes = [];
try {
  const raw = localStorage.getItem('recipes');
  savedRecipes = raw ? JSON.parse(raw) : [];
} catch (err) {
  console.error('Failed to parse recipes from localStorage', err);
}

const useRecipeStore = create((set, get) => ({
  recipes: savedRecipes,
  searchTerm: '',
  filteredRecipes: savedRecipes,

  addRecipe: (newRecipe) => {
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      localStorage.setItem('recipes', JSON.stringify(updated));
      return { recipes: updated, filteredRecipes: updated };
    });
  },

  setRecipes: (recipes) => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
    set({ recipes, filteredRecipes: recipes });
  },

  deleteRecipe: (id) => {
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      localStorage.setItem('recipes', JSON.stringify(updated));
      return { recipes: updated, filteredRecipes: updated };
    });
  },

  updateRecipe: (id, updates) => {
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      );
      localStorage.setItem('recipes', JSON.stringify(updated));
      return { recipes: updated, filteredRecipes: updated };
    });
  },

  // 🔍 New search-related actions
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term);
  },

  filterRecipes: (term) => {
    const search = term?.toLowerCase() || get().searchTerm.toLowerCase();
    const filtered = get().recipes.filter((r) =>
      r.title.toLowerCase().includes(search) ||
      r.description?.toLowerCase().includes(search)
    );
    set({ filteredRecipes: filtered });
  },
}));

export default useRecipeStore;
