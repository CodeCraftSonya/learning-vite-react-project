// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import './assets/styles/base.css';
import Ex3 from './pages/Ex3.jsx';
import Ex4 from './pages/Ex4.jsx';
import Ex5 from './pages/Ex5.jsx';
import Ex6 from './pages/Ex6.jsx';
import Ex7 from './pages/Ex7.jsx';

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
            <Route path="/exercise5" element={<Ex5 />} />
            <Route
              path="/exercise6"
              element={
                <Ex6 arr={['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']} />
              }
            />
            <Route path="/exercise7" element={<Ex7 />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
