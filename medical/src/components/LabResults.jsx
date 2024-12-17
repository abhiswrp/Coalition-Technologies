import React from 'react';
import { FaDownload } from 'react-icons/fa';

const LabResults = () => {
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      {/* Slider */}
      <div style={{
        position: 'fixed',
        top: '0',
        right: '0',
        width: '300px',
        height: '100%',
        background: '#FFF',
        boxShadow: '-4px 0 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        borderRadius: '8px',
        transform: 'translateX(100%)',  // Initially off-screen
        transition: 'transform 0.3s ease-in-out',
      }}>
        <h3 style={{ color: '#333', marginBottom: '20px' }}>Lab Results</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {['Blood Tests', 'CT Scans', 'Radiology Reports', 'X Rays', 'Urine Test'].map((item, index) => (
            <li key={index} style={{
              background: '#F8FAFC',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span>{item}</span>
              <FaDownload style={{ cursor: 'pointer', fontSize: '18px', color: '#1E3A8A' }} />
            </li>
          ))}
        </ul>
      </div>

      {/* Invisible div to trigger hover effect */}
      <div style={{
        position: 'fixed',
        top: '0',
        right: '0',
        width: '50px',
        height: '100%',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        const slider = e.target.nextElementSibling;
        slider.style.transform = 'translateX(0)'; // Show the slider on hover
      }}
      onMouseLeave={(e) => {
        const slider = e.target.nextElementSibling;
        slider.style.transform = 'translateX(100%)'; // Hide the slider when mouse leaves
      }} />
    </div>
  );
};

export default LabResults;
