import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './store/themeSlice';

function App() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);

  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return 'light';
  };

  useEffect(() => {
    const initialTheme = getInitialTheme();
    dispatch(setTheme(initialTheme));
  }, [dispatch]);

  return (
    <div className={themeMode === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900" />
    </div>
  );
}

export default App;
