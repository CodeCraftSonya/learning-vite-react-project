// src/App.jsx
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navigation} from "./components/Navigation";
import Ex1 from "./pages/Ex1";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/exercise1" element={<Ex1 />} />
                {/*<Route path="/exercise2" element={<Ex2 />} />*/}
                {/*<Route path="/exercise3" element={<Ex3 />} />*/}
                {/*<Route path="/exercise4" element={<Ex4 />} />*/}
            </Routes>
        </Router>
    );
}

export default App;

