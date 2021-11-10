import React, { useContext } from 'react';

import { Container } from './styles';

import { LayoutContext } from '../../App';

export default function Header() {

  const {onToggleTheme, selectedTheme} = useContext(LayoutContext);
  
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}