import React from 'react';

import Header from './Header';
import ComponentA from './ComponentA';
import ScrollViewWithAnimatedHeader from './ScrollViewWithAnimatedHeader';

const PageWithRenderCallback = ({ opacity }) => (
  <ScrollViewWithAnimatedHeader>
    {
      (opacity) => (
        <div>
          <Header
            green
            opacity={opacity}
            text="Page with render callback"
          />
          <ComponentA/>
        </div>
      )
    }
  </ScrollViewWithAnimatedHeader>
);

export default PageWithRenderCallback;