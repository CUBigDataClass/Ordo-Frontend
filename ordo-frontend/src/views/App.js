import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import MovieList from './MovieList';
import MovieDesc from './MovieDesc';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation/Navigation';


function App() {
  return (
    <>
      <Navigation />
      <div style={{ margin: '0 10% 0 10%' }}>
        <Router>
          <Routes>
            <Route exact path='/' element={<MovieList />} />
            <Route exact path='/desc' element={<MovieDesc />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}
export default App;
