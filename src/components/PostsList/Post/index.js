import React, { Component } from 'react';

import { Container } from './styles';

export default class Post extends Component {
  render() {
    const {title, description} = this.props;
    return (
      <Container>
        <h2>{title}</h2>
        <small>{description}</small>
      </Container>
    );
  }
}

// export default function Post({ title, description }) {
//   return (
//     <Container>
//       <h2>{title}</h2>
//       <small>{description}</small>
//     </Container>
//   );
// }