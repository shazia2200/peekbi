import { useState } from 'react';
import UploadData from './components/UploadData';
import DashboardCharts from './components/DashboardCharts';
import StatCards from './components/StatCards';
import Navbar from './components/Navbar';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

export default function App() {
  const [parsedData, setParsedData] = useState([]);
  const [insights, setInsights] = useState(null);

  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white min-h-screen p-6">
        <h2 className="text-2xl font-bold mb-6">📊 Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:bg-gray-700 p-2 rounded">🏠 Home</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">📈 Analytics</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">📄 Reports</a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <main className="p-6">
          <h1 className="text-2xl font-bold text-white dark:text-white mb-4">
            <span role="img" aria-label="brain">🧠</span> ✨ Hello, Insight Seeker! <span role="img" aria-label="magnifying-glass">🔍</span>
          </h1>
          <p className="text-gray-400 mb-6">
            Welcome to the BI Dashboard — your playground of patterns and possibilities.
          </p>

          {/* Section: Upload */}
          <section className="mt-10">
            <UploadData setParsedData={setParsedData} setInsights={setInsights} />
          </section>
        </main>
      </div>
    </div>
  );
}
