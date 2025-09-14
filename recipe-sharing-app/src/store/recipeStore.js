

import { create } from 'zustand';

// Load saved recipes
let savedRecipes = [];
try {
  const raw = localStorage.getItem('recipes');
  savedRecipes = raw ? JSON.parse(raw) : [];
} catch (err) {
  console.error('Failed to parse recipes from localStorage', err);
}

// Load saved favorites
let savedFavorites = [];
try {
  const raw = localStorage.getItem('favorites');
  savedFavorites = raw ? JSON.parse(raw) : [];
} catch (err) {
  console.error('Failed to parse favorites from localStorage', err);
}

// Load saved recommendations
let savedRecommendations = [];
try {
  const raw = localStorage.getItem('recommendations');
  savedRecommendations = raw ? JSON.parse(raw) : [];
} catch (err) {
  console.error('Failed to parse recommendations from localStorage', err);
}

const useRecipeStore = create((set, get) => ({
  recipes: savedRecipes,
  searchTerm: '',
  filteredRecipes: savedRecipes,
  favorites: savedFavorites,
  recommendations: savedRecommendations,

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

  addToFavorites: (recipe) => {
    set((state) => {
      if (state.favorites.some((r) => r.id === recipe.id)) return {};
      const updated = [...state.favorites, recipe];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return { favorites: updated };
    });
  },

  removeFromFavorites: (id) => {
    set((state) => {
      const updated = state.favorites.filter((r) => r.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updated));
      return { favorites: updated };
    });
  },

  addToRecommendations: (recipe) => {
    set((state) => {
      if (state.recommendations.some((r) => r.id === recipe.id)) return {};
      const updated = [...state.recommendations, recipe];
      localStorage.setItem('recommendations', JSON.stringify(updated));
      return { recommendations: updated };
    });
  },

  removeFromRecommendations: (id) => {
    set((state) => {
      const updated = state.recommendations.filter((r) => r.id !== id);
      localStorage.setItem('recommendations', JSON.stringify(updated));
      return { recommendations: updated };
    });
  },

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
