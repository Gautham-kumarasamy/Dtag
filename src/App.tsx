import Dashboard from './pages/Dashboard';
import TeamMemberTable from './pages/TeamMemberTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EngagementForm from './pages/CreateEngagement';
import LandingPage from './pages/LandingPage';

function App() {
  // return <EngagementForm />;
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team-members" element={<TeamMemberTable />} />
        <Route path='/engagement' element={<EngagementForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
