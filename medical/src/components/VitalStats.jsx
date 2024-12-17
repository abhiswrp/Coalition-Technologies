import React from 'react';

const VitalStats = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
      gap: '20px',
    }}>
      {[
        { title: 'Respiratory Rate', value: '20 bpm', image: '/respiratory_rate.jpg', background: '#87CEEB', label: 'Normal' },
        { title: 'Temperature', value: '98.6°F', image: '/temperature.jpg', background: '#FFCCCB', label: 'Normal' },
        { title: 'Heart Rate', value: '78 bpm', image: '/HeartBPM.jpg', background: '#FFB6C1', label: 'Lower than Average' }
      ].map((stat, index) => (
        <div key={index} style={{
          background: stat.background,
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          flex: 1,
          margin: '0 10px'
        }}>
          <div style={{ marginBottom: '10px' }}>
            <img src={stat.image} alt={stat.title} style={{
              width: '50px',
              height: '50px', 
              borderRadius: '50%',
              objectFit: 'cover'
            }} />
          </div>
          <h4>{stat.title}</h4>
          <p style={{ fontWeight: 'bold' }}>{stat.value}</p>
          <p style={{ fontWeight: 'normal', marginTop: '5px' }}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default VitalStats;
