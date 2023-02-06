import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/">{/* url 주소 */}</Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
