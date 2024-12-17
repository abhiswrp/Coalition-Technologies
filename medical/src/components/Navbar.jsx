import React from 'react';

const Navbar = () => {
  return (
    <div style={{
      width: '100%',
      height: '80px',
      background: '#fff',
      padding: '10px 20px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
    }}>
      <h2 style={{ color: '#333', fontWeight: 'bold', margin: 0, flex: 1 }}>
        Tech.Care
      </h2>

      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        gap: '30px',
        justifyContent: 'center',
        flex: 2,
      }}>
        {['Overview', 'Patients', 'Schedule', 'Message', 'Transactions'].map((item, index) => (
          <li key={index} style={{
            color: '#333',
            cursor: 'pointer',
            fontWeight: '500',
          }}>
            {item}
          </li>
        ))}
      </ul>

      <div style={{ flex: 1 }}></div>
    </div>
  );
};

export default Navbar;
