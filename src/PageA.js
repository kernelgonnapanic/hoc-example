import React, { Component } from 'react';

import Header from './Header';
import ComponentA from './ComponentA';

class PageA extends Component {
  constructor() {
    super();
    this.state = {
      scrollPos: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll(scrollPos) {
    this.setState({ scrollPos });
  }
  render() {
    return (
      <div className="container">
        <Header scrollPos={this.state.scrollPos} />
        <ComponentA onScroll={this.handleScroll} />
      </div>
    );
  }
}

export default PageA;
