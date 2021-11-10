import React, { useMemo, createContext } from 'react';
import useLocalState from './components/CustomHooks/useLocalState'
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

export const LayoutContext = createContext({});

function App() {
  const [theme, setTheme] = useLocalState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <LayoutContext.Provider 
        value={{
          onToggleTheme: handleToggleTheme,
          selectedTheme: theme,
        }}
      >
        <Layout/>
      </LayoutContext.Provider>
    </ThemeProvider>
  );
};

export default App;