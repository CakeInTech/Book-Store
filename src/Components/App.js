import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './Books/Books';
import Categories from './Categories/Categories';
import Header from './Header/Header';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
