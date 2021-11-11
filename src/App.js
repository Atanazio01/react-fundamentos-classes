import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import themes from './styles/themes';
class App extends React.Component {
  state = {
    changed: false,
  };

  // Executa quando o componente é montado
  componentDidMount() {
    console.log('componentDidMount executed');
  }

  // Executa após a rerenderização do componente
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate ', {
      currentState: this.state,
      prevState,
      prevProps,
    });
  }

  // Pega erros e info do erro
  componentDidCatch(error, info) {
    console.log('componentDidCatch ', { error, info });
  }

  // Executa antes da rerenderização do componente
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate ', {
      currentState: this.state,
      nextState,
      nextProps,
    });

    // Return true se quiser que a rederização avance normalmente e false se quiser bloquera a renderização
    return true;
  }

  render() {
    console.log('rendered');
    return (
      <ThemeProvider>
        <button onClick={() => this.setState({ changed: true })}>
          Change state
        </button>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              {theme === 'dark' && <Layout />}
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;