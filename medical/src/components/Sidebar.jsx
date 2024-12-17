import React from 'react';

const Sidebar = () => {
  return (
    <div style={{
      width: '250px',
      background: '#fff',
      height: '100vh',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px'
    }}>
      <h2 style={{ color: '#333', fontWeight: 'bold' }}>Tech.Care</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {['Overview', 'Patients', 'Schedule', 'Message', 'Transactions'].map((item, index) => (
          <li key={index} style={{ margin: '20px 0', color: '#333', cursor: 'pointer' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
