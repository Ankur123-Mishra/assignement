import { configureStore } from '@reduxjs/toolkit';
import repoReducer from './slices/repoSlice';
import favoritesReducer from './slices/favoritesSlice';

const store = configureStore({
  reducer: {
    repositories: repoReducer,
    favorites: favoritesReducer,
  },
});

export default store;