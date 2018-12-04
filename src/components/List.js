import React from 'react';

import { names } from '../fakeData.js';

import ListItem from './ListItem';

const List = ({ type }) => (
  <div>
    <img src={`https://unsplash.it/400/300?${type}`} alt="Obrazek" className="photo"/>
    {
      names.map((name, idx) => (
        <ListItem name={name} key={idx}/>
      ))
    }
  </div>
);

export default List;
