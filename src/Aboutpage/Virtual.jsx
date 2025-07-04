import React from 'react';
import operationRoom from '../assets/operation-room.jpg'; // Update the path as needed

const Virtual = () => {
  return (
    <div
      className="virtual-outer"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5fbff 0%, #fff 100%)',
        padding: '40px 0',
        marginLeft: '25px', // for large screens
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <h1
          style={{
            color: '#29405e',
            fontFamily: 'Poppins, Figtree, sans-serif',
            fontWeight: 700,
            fontSize: '2.5rem',
            marginBottom: '28px',
            marginTop: 0,
            letterSpacing: '-0.5px',
            textAlign: 'left',
          }}
        >
          360 Degree Virtual Tour
        </h1>
        <div
          className="virtual-img-container"
          style={{
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(41, 64, 94, 0.07)',
            background: '#fff',
            width: '100%',
            maxWidth: '100%',
            transition: 'margin-left 0.2s',
          }}
        >
          <img
            src={operationRoom}
            alt="Operation Room"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '32px',
              transition: 'box-shadow 0.2s',
            }}
          />
        </div>
      </div>
      {/* Responsive style to move image left and remove bottom space/minHeight on small screens */}
      <style>
        {`
          @media (max-width: 600px) {
            .virtual-outer {
              padding-bottom: 20px !important;
              min-height: unset !important;
            }
            .virtual-img-container {
              margin-left: -14px !important;
              width: calc(100% + 24px) !important;
              border-radius: 24px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Virtual;
