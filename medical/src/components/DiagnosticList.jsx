import React from 'react';

const DiagnosticList = () => {
  return (
    <div style={{
      background: '#fff',
      padding: '20px',
      borderRadius: '10px',
      marginTop: '20px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h3>Diagnostic List</h3>
      <table style={{ width: '100%', marginTop: '10px' }}>
        <thead>
          <tr>
            <th>Problem</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hypertension</td>
            <td>Chronic high blood pressure</td>
            <td>Under Observation</td>
          </tr>
          <tr>
            <td>Type 2 Diabetes</td>
            <td>Insulin resistance</td>
            <td>Cured</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticList;
