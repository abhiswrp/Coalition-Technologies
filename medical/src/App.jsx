import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PatientDetails from './components/PatientDetails';
import VitalStats from './components/VitalStats';
import ChartComponent from './components/ChartComponent';
import DiagnosticList from './components/DiagnosticList';
import LabResults from './components/LabResults';

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: '#F8FAFC',
    }}>
      <Navbar />

      <div style={{
        display: 'flex',
        flex: 1,
      }}>
        <div style={{
          width: '250px',
          background: '#1E3A8A',
          color: '#FFF',
          height: '100vh',
          padding: '20px',
        }}>
          <Sidebar />
        </div>

        <div style={{
          flex: 1,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          overflowY: 'auto',
        }}>
          <ChartComponent />
          <VitalStats />
          <DiagnosticList />
        </div>

        <div style={{
          top: '10px',
          width: '25%',
          height: '50%',
          background: '#FFF',
          boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.1)',
        }}>
          <PatientDetails />
        </div>
      </div>

      <div style={{
        padding: '20px',
        background: '#FFF',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginTop: '20px',
      }}>
        <LabResults />
      </div>
    </div>
  );
};

export default App;
