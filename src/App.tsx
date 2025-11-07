import Dashboard from './pages/Dashboard';
import TeamMemberTable from './pages/TeamMemberTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EngagementForm from './pages/CreateEngagement';
import LandingPage from './pages/LandingPage';
import Header from './layout/Header';
import MUIHeader from './layout/MuiHeader';
import Footer from './layout/Footer';
import NotFoundPage from './components/NotFoundPage';

function App() {
  // return <EngagementForm />;
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team-members" element={<TeamMemberTable />} />
        <Route path='/engagement' element={<EngagementForm />} />
        <Route path='/header' element={<Header />} />
        <Route path='/mui-header' element={<MUIHeader />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/not-found' element={<NotFoundPage />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
