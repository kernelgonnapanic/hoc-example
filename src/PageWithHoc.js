import React from 'react';

import Header from './Header';
import ComponentA from './ComponentA';
import withAnimatedHeader from './withAnimatedHeader';

const PageWithHoc = ({ opacity }) => (
  <div>
    <Header
      blue
      opacity={opacity}
      text="Page with HOC"
    />
    <ComponentA/>
  </div>
);

export default withAnimatedHeader(PageWithHoc);
