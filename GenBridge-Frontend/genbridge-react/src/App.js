import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import RolePage from './RolePage';
import FormPage from './FormPage';
import MatchPage from './MatchPage';
import EnterCalendlyLinkPage from './EnterCalendlyLinkPage';
import DisplayCalendlyPage from './DisplayCalendlyPage';
import WaitingRoom from './WaitingRoom';
import './style.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/role" element={<RolePage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/match" element={<MatchPage />} />
                <Route path="/enter-calendly" element={<EnterCalendlyLinkPage />} />
                <Route path="/display-calendly" element={<DisplayCalendlyPage />} />
                <Route path="/waiting-room" element={<WaitingRoom />} />

            </Routes>
        </Router>
    );
};

export default App;
