import React, { PureComponent } from 'react';

import { names } from './fakeData.js';

import ListItem from './ListItem';

class ComponentA extends PureComponent {
  constructor() {
    super();
    this.scrollView = null;
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll() {
    const scrollPos = this.scrollview.scrollTop;
    this.props.onScroll(scrollPos);
  }
  render() {
    return (
      <div
        className="container"
        onScroll={this.handleScroll}
        ref={ref => this.scrollview = ref}
      >
        <img src="https://unsplash.it/400/300" alt="obrazunio" />
        {
          names.map((name, idx) => (
            <ListItem name={name} key={idx}/>
          ))
        }
      </div>
    );
  }
}

export default ComponentA;
