import React from 'react';
import './App.css';

import DummyPage from './pages/DummyPage';
import PageWithHoc from './pages/PageWithHoc';
import PageWithRenderCallback from './pages/PageWithRenderCallback';

const App = () => (
  <div className="appContainer">
    <DummyPage />
    <PageWithHoc />
    <PageWithRenderCallback />
  </div>
);

export default App;
