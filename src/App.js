import React from 'react';
import './App.css';

import DummyPage from './pages/DummyPage';
import PageWithHoc from './pages/PageWithHoc';
import PageWithRenderCallback from './pages/PageWithRenderCallback';
import PageWithHooks from './pages/PageWithHooks';

const App = () => (
  <div className="appContainer">
    <DummyPage />
    <PageWithHoc />
    <PageWithRenderCallback />
    <PageWithHooks />
  </div>
);

export default App;
