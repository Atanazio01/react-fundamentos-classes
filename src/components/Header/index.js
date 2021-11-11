import React, { Component } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

// Render props
export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button
              type="button"
              onClick={value.handleToggleTheme}
            >
              {value.theme === 'dark' ? '🌞' : '🌚'}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}
