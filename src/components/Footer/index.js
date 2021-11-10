import React, { useContext } from 'react';

import { Container } from './styles';

import { LayoutContext } from '../../App';

export default function Footer() {
  
  const {onToggleTheme, selectedTheme} = useContext(LayoutContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados</span>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}