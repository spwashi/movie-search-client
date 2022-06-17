import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import React from 'react';

export function ConnectedApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
      </Routes>
    </BrowserRouter>
  );
}