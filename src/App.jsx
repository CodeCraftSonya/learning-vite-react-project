// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import './assets/styles/base.css';
import Ex3 from './pages/Ex3.jsx';
import Ex4 from './pages/Ex4.jsx';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <div className="app">
          <Routes>
            <Route path="/exercise1" element={<Ex1 />} />
            <Route path="/exercise2" element={<Ex2 />} />
            <Route path="/exercise3" element={<Ex3 />} />
            <Route path="/exercise4" element={<Ex4 />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
