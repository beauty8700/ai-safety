import React, { useState } from 'react';

function ReportForm({ addIncident }) {
  const [formData, setFormData] = useState({ title: '', description: '', severity: 'Low' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) return;

    const newIncident = {
      id: Date.now(),
      ...formData,
      reported_at: new Date().toISOString(),
    };
    addIncident(newIncident);
    setFormData({ title: '', description: '', severity: 'Low' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Report New Incident</h2>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <select
        value={formData.severity}
        onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReportForm;
