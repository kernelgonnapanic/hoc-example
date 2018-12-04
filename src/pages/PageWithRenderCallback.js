import React from 'react';

import Header from '../components/Header';
import List from '../components/List';
import ScrollViewWithAnimatedHeader from '../enhancers/ScrollViewWithAnimatedHeader';

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
          <List type="render callback" />
        </div>
      )
    }
  </ScrollViewWithAnimatedHeader>
);

export default PageWithRenderCallback;