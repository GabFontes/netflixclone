import InitialPage from './pages/InitialPage';
import SearchPage from './pages/Search';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function PageRouter() {
  return (
    <div>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<InitialPage />} />
        {/* <Route path="*" element={NotFound} /> */}
      </Routes>
    </div>
  )
};

export default PageRouter;
