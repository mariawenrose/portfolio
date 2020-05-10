import React from 'react';
import '../src/style/App.css'
import Footer from './components/Footer'
import PopupWindow from './components/PopupWindow'
import {BrowserRouter as Router, Link} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='App'>
        <Link to='/web'>Web</Link>
        {' | '}
        <Link to='/design'>Design</Link>
        <PopupWindow />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
