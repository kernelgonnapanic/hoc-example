import React from 'react';

import { names } from './fakeData.js';

import ListItem from './ListItem';

const ComponentA = () =>(
  <div>
    <img src="https://unsplash.it/400/300" alt="obrazunio" />
    {
      names.map((name, idx) => (
        <ListItem name={name} key={idx}/>
      ))
    }
  </div>
);

export default ComponentA;
