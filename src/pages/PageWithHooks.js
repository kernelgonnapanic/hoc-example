import React from 'react';
import Header from '../components/Header';
import List from '../components/List';
import useOpacityFromScroll from '../enhancers/useOpacityFromScrollHook';

const PageWithHooks = () => {
  const { opacity, handleScroll } = useOpacityFromScroll();
  return (
    <div className="relativeContainer">
      <div
        className="container"
        onScroll={handleScroll}
      >
        <Header
          opacity={opacity}
          text="Page with hooks"
          yellow
        />
        <List type="hooks" />
      </div>
    </div>
  );
}

export default PageWithHooks;