import React, { PureComponent } from 'react';

import './styles.css';
import { names } from './fakeData.js';

import ListItem from './ListItem';

class ComponentA extends PureComponent {
  render() {
    return (
      <div className="container">
        {
          names.map(name => (
            <ListItem name={name} />
          ))
        }
      </div>
    );
  }
}

export default ComponentA;
