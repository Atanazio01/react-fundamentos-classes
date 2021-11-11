import React, { Component } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default class Layout extends Component {
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  // Executa quando o componente for desmontar
  componentWillUnmount() {
    console.log('componente vai desmontar...');
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log('scrolled...');
  }
  render() {
    return (
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }
}