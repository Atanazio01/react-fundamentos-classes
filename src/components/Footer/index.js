import React, { Component } from 'react';

import { Container } from './styles';

export default class Footer extends Component {
  render() {
    const { onToggleTheme, selectedTheme } = this.props;
    return (<Container>
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
}

// export default function Footer() {

//   const {onToggleTheme, selectedTheme} = useContext(LayoutContext);

//   return (
//     <Container>
//       <span>JStack's Blog. Todos os direitos reservados</span>
//       <button
//         type="button"
//         onClick={onToggleTheme}
//       >
//         {selectedTheme === 'dark' ? '🌞' : '🌚'}
//       </button>
//     </Container>
//   );
// }