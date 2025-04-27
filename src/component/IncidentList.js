import React, { useState } from 'react';

function IncidentList({ incidents }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="incident-list">
      {incidents.map((incident) => (
        <div key={incident.id} className="incident">
          <h3>{incident.title}</h3>
          <p><strong>Severity:</strong> {incident.severity}</p>
          <p><strong>Date:</strong> {new Date(incident.reported_at).toLocaleDateString()}</p>
          <button onClick={() => toggleExpand(incident.id)}>
            {expandedId === incident.id ? 'Hide Details' : 'View Details'}
          </button>
          {expandedId === incident.id && <p className="description">{incident.description}</p>}
        </div>
      ))}
    </div>
  );
}

export default IncidentList;

