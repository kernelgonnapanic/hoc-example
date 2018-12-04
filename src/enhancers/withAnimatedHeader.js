import React, { Component } from 'react';

const withAnimatedHeader = (WrappedComponent) => {
  return class extends Component {
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
            <WrappedComponent {...this.props} opacity={this.calculateOpacity()} />
          </div>
        </div>
      );
    }
  };
}

export default withAnimatedHeader;