import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CreateNewsFeedPage from './pages/CreateNewsFeedPage';
import ManageNewsFeedsPage from './pages/ManageNewsFeedsPage';
import PerformanceReportsPage from './pages/PerformanceReportsPage';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/create" element={<CreateNewsFeedPage />} />
        <Route path="/manage" element={<ManageNewsFeedsPage />} />
        <Route path="/reports" element={<PerformanceReportsPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
