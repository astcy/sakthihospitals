import React from 'react';
import phoneIcon from '../assets/phone.png';
import emailIcon from '../assets/email.png';
import locationIcon from '../assets/location.png';

export default function Map() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 1100,
        margin: '0 auto',
        padding: '40px 16px',
        boxSizing: 'border-box',
        borderRadius: 16,
        background: '#f8fafc',
        boxShadow: '0 4px 24px rgba(30,41,59,0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: 40,
          color: '#274760',
          marginBottom: 32,
          letterSpacing: 0.5,
              marginRight: 800, // shifted slightly to the left
        }}
      >
        Find Us Here
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 34,
          justifyContent: 'center',
          marginBottom: 32,
          width: '100%',
        }}
      >
        <div
          style={{
            flex: '1 1 200px',
            minWidth: 200,
            background: '#e6f2fa',
            borderRadius: 12,
            padding: '20px 28px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            boxShadow: '0 2px 8px rgba(30,41,59,0.04)',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              background: '#dbeafe',
              borderRadius: '50%',
              color: '#3b82c4',
              fontSize: 22,
            }}
          >
            <img src={phoneIcon} alt="Phone Icon" style={{ width: 32, height: 32 }} />
          </span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, color: '#33526a', fontFamily: "'Poppins', sans-serif" }}>
              Phone
            </div>
            <div style={{ fontSize: 12, color: '#33526a', marginTop: 2, fontFamily: "'Figtree', sans-serif" }}>
              +91-44-2851 7999
            </div>
          </div>
        </div>
        <div
          style={{
            flex: '1 1 200px',
            minWidth: 220,
            background: '#e6f2fa',
            borderRadius: 12,
            padding: '20px 28px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            boxShadow: '0 2px 8px rgba(30,41,59,0.04)',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              background: '#dbeafe',
              borderRadius: '50%',
              color: '#3b82c4',
              fontSize: 22,
            }}
          >
            <img src={emailIcon} alt="Email Icon" style={{ width: 42, height: 42 }} />
          </span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, color: '#33526a', fontFamily: "'Poppins', sans-serif" }}>
              Email
            </div>
            <div style={{ fontSize: 12, color: '#33526a', marginTop: 2, fontFamily: "'Figtree', sans-serif" }}>
              hello@sakthihospitals.com
            </div>
          </div>
        </div>
        <div
          style={{
            flex: '1 1 200px',
            minWidth: 220,
            background: '#e6f2fa',
            borderRadius: 12,
            padding: '20px 28px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            boxShadow: '0 2px 8px rgba(30,41,59,0.04)',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              background: '#dbeafe',
              borderRadius: '50%',
              color: '#3b82c4',
              fontSize: 22,
            }}
          >
            <img src={locationIcon} alt="Location Icon" style={{ width: 42, height: 42 }} />
          </span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, color: '#33526a', fontFamily: "'Poppins', sans-serif" }}>
              Location
            </div>
            <div style={{ fontSize: 12, color: '#33526a', marginTop: 2, fontFamily: "'Figtree', sans-serif" }}>
              175 Big St, Police Quarters, Triplicane, Chennai, TN 600005
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          minHeight: 360,
          borderRadius: 18,
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(30,41,59,0.10)',
          background: '#e0e7ef',
          marginTop: 8,
        }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=175,+Big+St,+Police+Quarters,+Triplicane,+Chennai,+Tamil+Nadu+600005&output=embed"
          width="100%"
          height="380"
          style={{ border: 0, minHeight: 360, borderRadius: 18 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
