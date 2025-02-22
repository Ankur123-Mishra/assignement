import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { loadFavorites } from './src/utils/storage';
import { setFavorites } from './src/redux/slices/favoritesSlice';
import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigation';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    loadFavorites().then(favorites => dispatch(setFavorites(favorites)));
  }, []);

  return <AppNavigator />;
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
