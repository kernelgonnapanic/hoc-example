import React from 'react';
import './App.css';

import DummyPage from './DummyPage';
import PageWithHoc from './PageWithHoc';
import PageWithRenderCallback from './PageWithRenderCallback';

const App = () => (
  <div className="appContainer">
    <DummyPage />
    {/* <PageWithHoc /> */}
    {/* <PageWithRenderCallback /> */}
  </div>
);

export default App;
