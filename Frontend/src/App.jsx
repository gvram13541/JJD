import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Buyer from './components/buyer/buyer';
import Seller from './components/seller/seller';
import PageNotFound from './pages/pagenotfound';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="pagenotfound" element={< PageNotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
