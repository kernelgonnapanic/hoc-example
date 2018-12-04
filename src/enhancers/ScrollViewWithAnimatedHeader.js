import React, { Component } from 'react';

class ScrollViewWithAnimatedHeader extends Component {
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
          {this.props.children(this.calculateOpacity())}
        </div>
      </div>
    );
  }
};

export default ScrollViewWithAnimatedHeader;