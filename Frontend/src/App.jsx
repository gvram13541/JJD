import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import UserProfile from './components/profile';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
