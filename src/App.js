import React, { useState, useMemo } from 'react';
import useLocalState from './components/CustomHooks/useLocalState';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'dark',
    };
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={() => {
            this.setState(prevState => ({ theme: prevState.theme === 'dark' ? 'light' : 'dark' }));
          }}
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }
}

// function App() {
//   const [theme, setTheme] = useLocalState('dark');

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToggleTheme() {
//     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
//   }

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <LayoutContext.Provider 
//         value={{
//           onToggleTheme: handleToggleTheme,
//           selectedTheme: theme,
//         }}
//       >
//         <Layout/>
//       </LayoutContext.Provider>
//     </ThemeProvider>
//   );
// };

export default App;