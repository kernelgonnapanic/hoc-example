import React, { Component } from 'react';

import Header from './Header';
import ComponentA from './ComponentA';

class DummyPage extends Component {
  constructor() {
    super();
    this.state = {
      scrollPos: 0,
    };
    this.scrollView = null;
    this.handleScroll = this.handleScroll.bind(this);
    this.calculateOpacity = this.calculateOpacity.bind(this);
  }
  calculateOpacity() {
    if(!this.state.scrollPos) return 0;
    if (this.state.scrollPos > 200) return 1;
    return this.state.scrollPos / 200;
  }
  handleScroll() {
    if(!this.scrollView) return;
    const scrollPos = this.scrollView.scrollTop;
    this.setState({ scrollPos });
  }
  render() {
    return (
      <div
        className="container"
        onScroll={this.handleScroll}
        ref={ref => this.scrollView = ref}
      >
        <Header
          opacity={this.calculateOpacity()}
          text="Dummy page"
        />
        <ComponentA  />
      </div>
    );
  }
}

export default DummyPage;
