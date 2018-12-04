import React, { Component } from 'react';

import Header from '../components/Header';
import List from '../components/List';

class DummyPage extends Component {
  constructor() {
    super();
    this.state = {
      scrollPos: 0,
    };
  }
  calculateOpacity = () => {
    if (!this.state.scrollPos) return 0;
    if (this.state.scrollPos > 200) return 1;
    return this.state.scrollPos / 200;
  }
  handleScroll = (event) => {
    const scrollPos = event.target.scrollTop;
    this.setState({ scrollPos });
  }
  render() {
    return (
      <div className="relativeContainer">
        <div
          className="container"
          onScroll={this.handleScroll}
        >
          <Header
            opacity={this.calculateOpacity()}
            text="Dummy page"
          />
          <List type="dummy" />
        </div>
      </div>
    );
  }
}

export default DummyPage;
