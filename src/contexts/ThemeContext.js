import React, { Component, createContext, useState } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    let theme = 'dark';

    try {
      theme = JSON.parse(localStorage.getItem('theme'));
    } catch (err) {
      console.log(err);
    }

    this.state = {
      theme,
    };
  }

  // Executa quando o componente é montado
  componentDidMount() { }

  // Monitorando alterações em variáveis com o componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      console.log('tema Mudou...');
    }
  }

  // O setState pode receber uma callback como segundo argumento para utilizar o valor atualizado
  handleToggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }), () => {
      localStorage.setItem('theme', JSON.stringify(this.state.theme));
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}