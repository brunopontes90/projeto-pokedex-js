import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import EditUser from './Components/Edit/EditUsers';
import CreateUser from './Components/Create/CreateUser';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/create' element={<CreateUser />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
