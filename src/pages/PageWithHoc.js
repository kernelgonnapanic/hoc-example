import React from 'react';

import Header from '../components/Header';
import List from '../components/List';
import withAnimatedHeader from '../enhancers/withAnimatedHeader';

const PageWithHoc = ({ opacity }) => (
  <div>
    <Header
      blue
      opacity={opacity}
      text="Page with HOC"
    />
    <List/>
  </div>
);

export default withAnimatedHeader(PageWithHoc);
