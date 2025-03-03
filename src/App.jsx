import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AppHelp from './components/AppHelp';
import FeedbackButton from './components/FeedbackButton';
import GetStartedGuide from './components/GetStartedGuide';
import questConfig from './config/questConfig';
import './App.css';

function App() {
  return (
    <QuestProvider 
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiUrl={questConfig.API_URL}
      token={questConfig.TOKEN}
    >
      <Router>
        <div className="flex">
          <Navbar />
          <main className="flex-1 ml-64 bg-gray-50 min-h-screen">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/get-started" element={<GetStartedGuide />} />
              <Route path="/projects" element={<div className="p-8">Projects page coming soon...</div>} />
              <Route path="/time" element={<div className="p-8">Time tracking page coming soon...</div>} />
              <Route path="/settings" element={<div className="p-8">Settings page coming soon...</div>} />
            </Routes>
          </main>
          <AppHelp />
          <FeedbackButton />
        </div>
      </Router>
    </QuestProvider>
  );
}

export default App;