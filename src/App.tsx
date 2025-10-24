import Dashboard from './pages/Dashboard';
import TeamMemberTable from './pages/TeamMemberTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EngagementForm from './pages/CreateEngagement';

function App() {
  // return <EngagementForm />;
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team-members" element={<TeamMemberTable />} />
        <Route path='/engagement' element={<EngagementForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
