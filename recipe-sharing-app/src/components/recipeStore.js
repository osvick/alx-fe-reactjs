// src/store/recipeStore.js
import { create } from 'zustand';

// Utility to load data from localStorage
const load = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

// Utility to save data
const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const useRecipeStore = create((set, get) => ({
  recipes: load('recipes'),
  favorites: load('favorites'),
  recommendations: load('recommendations'),
  searchTerm: '',
  filteredRecipes: load('recipes'),

  addRecipe: (newRecipe) => {
    set((state) => {
      const updated = [...state.recipes, { ...newRecipe, views: 0 }];
      save('recipes', updated);
      return { recipes: updated, filteredRecipes: updated };
    });
  },

  updateRecipe: (id, updates) => {
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      );
      save('recipes', updated);
      return { recipes: updated, filteredRecipes: updated };
    });
  },

  deleteRecipe: (id) => {
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      save('recipes', updated);
      return { recipes: updated, filteredRecipes: updated };
    });
  },

  toggleFavorite: (id) => {
    set((state) => {
      const updated = state.favorites.includes(id)
        ? state.favorites.filter((f) => f !== id)
        : [...state.favorites, id];
      save('favorites', updated);
      return { favorites: updated };
    });
  },

  // Auto-update recommendations when a recipe is viewed
  incrementViewCount: (id) => {
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === id ? { ...r, views: (r.views || 0) + 1 } : r
      );

      // Calculate top 5 most-viewed recipes
      const topViewed = [...updatedRecipes]
        .filter((r) => r.views > 0)
        .sort((a, b) => b.views - a.views)
        .slice(0, 5)
        .map((r) => r.id);

      save('recipes', updatedRecipes);
      save('recommendations', topViewed);

      return { recipes: updatedRecipes, recommendations: topViewed };
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
