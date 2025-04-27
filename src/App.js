import React, { useState } from 'react';
import IncidentList from './component/IncidentList';
import ReportForm from './component/ReportForm';
import './App.css';

const initialIncidents = [
  { id: 1, title: 'Biased Recommendation Algorithm', description: 'Algorithm consistently favored certain demographics...', severity: 'Medium', reported_at: '2025-03-15T10:00:00Z' },
  { id: 2, title: 'LLM Hallucination in Critical Info', description: 'LLM provided incorrect safety procedure information...', severity: 'High', reported_at: '2025-04-01T14:30:00Z' },
  { id: 3, title: 'Minor Data Leak via Chatbot', description: 'Chatbot inadvertently exposed non-sensitive user metadata...', severity: 'Low', reported_at: '2025-03-20T09:15:00Z' },
];

function App() {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');

  const addIncident = (newIncident) => {
    setIncidents([newIncident, ...incidents]);
  };

  const filteredIncidents = incidents
    .filter((i) => filter === 'All' || i.severity === filter)
    .sort((a, b) =>
      sortOrder === 'Newest'
        ? new Date(b.reported_at) - new Date(a.reported_at)
        : new Date(a.reported_at) - new Date(b.reported_at)
    );

  return (
    <div className="container">
      <h1>AI Safety Incident Dashboard</h1>


      <div className="controls">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>


      <IncidentList incidents={filteredIncidents} />

    
      <ReportForm addIncident={addIncident} />
    </div>
  );
}

export default App;
