import React from 'react';
import { FaBirthdayCake, FaVenusMars, FaPhoneAlt, FaShieldAlt } from 'react-icons/fa';

const PatientDetails = () => {
  return (
    <div style={{
      width: '90%',
      height: '91%',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'relative',
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <img
          src="Layer_2.png"
          alt="Patient"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <p style={{ marginBottom: '20px', fontSize: '18px', marginLeft: '121px' }}>
        <div style={{ marginTop: '5px', fontWeight: 'bold' }}>Jessica Taylor</div>
      </p>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaBirthdayCake style={{ marginRight: '8px' }} />
        <span style={{ fontWeight: 'normal' }}>Date of Birth:</span>
      </div>
      <div style={{ marginLeft: '25px', fontWeight: 'bold' }}>August 23, 1996</div>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaVenusMars style={{ marginRight: '8px' }} />
        <span style={{ fontWeight: 'normal' }}>Gender:</span>
      </div>
      <div style={{ marginLeft: '25px', fontWeight: 'bold' }}>Female</div>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaPhoneAlt style={{ marginRight: '8px' }} />
        <span style={{ fontWeight: 'normal' }}>Contact:</span>
      </div>
      <div style={{ marginLeft: '25px', fontWeight: 'bold' }}>(415) 555-1234</div>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaPhoneAlt style={{ marginRight: '8px' }} />
        <span style={{ fontWeight: 'normal' }}>Emergency:</span>
      </div>
      <div style={{ marginLeft: '25px', fontWeight: 'bold' }}>(415) 555-5678</div>
      <br/>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaShieldAlt style={{ marginRight: '8px' }} />
        <span style={{ fontWeight: 'normal' }}>Insurance:</span>
      </div>
      <div style={{ marginLeft: '25px', fontWeight: 'bold' }}>Sunrise Health Assurance</div>

      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#4dc694',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: 'center',
        fontWeight: 'bold',
        width: 'fit-content',
      }}>
        Show All Information
      </div>
    </div>
  );
};

export default PatientDetails;
