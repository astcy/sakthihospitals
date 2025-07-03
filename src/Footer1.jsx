import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from './assets/logo_1.png';

const Footer1 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Font families
  const poppins = "'Poppins', sans-serif";
  const figtree = "'Figtree', sans-serif";

  // Newsletter box styles - updated for small screen top margin
  const subscribeBoxStyles = {
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 32px #93c5fd33',
    maxWidth: isMobile ? '100%' : '910px',
    width: isMobile ? '100%' : 'auto',
    margin: isMobile ? '8px 0 40px 0' : '0 auto', // reduced top margin for mobile
    marginTop: isMobile ? '8px' : '40px',         // reduced top margin for mobile
    marginBottom: isMobile ? '40px' : '-100px',
    padding: isMobile ? '24px 10px' : '48px 60px',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'stretch' : 'center',
    justifyContent: 'space-between',
    gap: isMobile ? '18px' : '0',
    position: 'relative',
    zIndex: 2,
    marginLeft: isMobile ? 0 : '180px',
    boxSizing: 'border-box',
  };

  const subscribeLeftStyles = {
    flex: 1,
    minWidth: isMobile ? '100%' : '320px',
    marginBottom: isMobile ? '8px' : 0,
  };

  const subscribeTitleStyles = {
    color: '#1e293b',
    fontWeight: 600,
    fontSize: isMobile ? '20px' : '30px',
    marginBottom: '10px',
    fontFamily: figtree,
    lineHeight: 1.2,
  };

  const subscribeDescStyles = {
    color: '#64748b',
    fontSize: isMobile ? '14px' : '12px',
    fontFamily: poppins,
    marginTop: '0',
    marginBottom: '0',
    fontWeight: 400,
  };

  const emailLabelStyles = {
    color: '#334155',
    fontFamily: poppins,
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '2px',
    marginLeft: '8px',
  };

  // For mobile: input and button stack vertically, not inline
  const inputGroupStyles = isMobile
    ? {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
      }
    : {
        display: 'flex',
        alignItems: 'center',
        border: '1.5px solid #cbd5e1',
        borderRadius: '20px',
        background: '#f8fafc',
        width: '100%',
        padding: '8px',
        boxSizing: 'border-box',
        position: 'relative',
      };

  const inputStyles = {
    padding: isMobile ? '10px 14px' : '12px 20px',
    fontSize: '16px',
    fontFamily: poppins,
    border: isMobile ? '1.5px solid #cbd5e1' : 'none',
    outline: 'none',
    flex: 1,
    color: '#334155',
    background: isMobile ? '#f8fafc' : 'transparent',
    borderRadius: '30px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyles = {
    background: '#ff0090',
    color: '#fff',
    border: 'none',
    padding: isMobile ? '12px 0' : '12px 28px',
    fontSize: '16px',
    fontWeight: 600,
    fontFamily: poppins,
    boxShadow: '307bc4',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
    borderRadius: '24px',
    minWidth: isMobile ? '100%' : '90px',
    width: isMobile ? '100%' : 'auto',
  };

  const footerStyles = {
    backgroundColor: '#ff0090',
    color: 'white',
    padding: isMobile ? '4.5rem 1rem 1.5rem' : '7rem 0 1.5rem',
    position: 'relative',
    zIndex: 1,
  };

  const gridStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1.3fr 1fr 1fr 1fr',
    gap: isMobile ? '32px' : '10rem',
    paddingLeft: isMobile ? '0' : '70px',
    paddingRight: isMobile ? '0' : '40px',
    paddingTop: isMobile ? '0' : '2rem',
    alignItems: 'flex-start',
  };

  const logoImgStyles = {
    marginBottom: '-10px',
    objectFit: 'contain',
    boxShadow: 'none',
    width: isMobile ? '200px' : '250px',
    marginLeft: isMobile ? '-10px' : '-20px',
  };

  const hospitalTitleStyles = {
    margin: 0,
    fontSize: isMobile ? '16px' : '20px',
    fontWeight: 700,
    fontFamily: figtree,
    letterSpacing: '1px',
    lineHeight: 1.1,
  };

  const hospitalSubtitleStyles = {
    margin: 0,
    fontSize: isMobile ? '10px' : '12px',
    letterSpacing: '2px',
    opacity: 0.9,
    fontFamily: poppins,
    fontWeight: 400,
    marginTop: '2px',
  };

  const infoLineStyles = {
    fontSize: '12px',
    lineHeight: 2,
    opacity: 0.9,
    fontFamily: poppins,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    opacity: 0.85,
    fontSize: '12px',
    fontFamily: poppins,
    transition: 'opacity 0.18s',
  };

  const iconStyle = {
    fontSize: '25px',
    cursor: 'pointer',
    opacity: 0.85,
    background: '#fff2',
    borderRadius: '50%',
    padding: '6px',
    transition: 'background 0.18s, opacity 0.18s',
  };

  const copyrightStyles = {
    textAlign: 'center',
    borderTop: '2px solid rgba(255,255,255,0.13)',
    marginTop: isMobile ? '2.5rem' : '2.8rem',
    paddingTop: '1.2rem',
    fontSize: '12px',
    opacity: 0.7,
    fontFamily: poppins,
  };

  return (
    <footer style={{ background: 'none', position: 'relative', zIndex: 1 }}>
      {/* Newsletter Box */}
      <div style={subscribeBoxStyles}>
        <div style={subscribeLeftStyles}>
          <div style={subscribeTitleStyles}>Be Our<br />Subscribers</div>
          <p style={subscribeDescStyles}>
            to get the latest news about health<br />from our experts
          </p>
        </div>
        <form
          style={{
            flex: 1,
            minWidth: isMobile ? '100%' : '340px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
          onSubmit={e => e.preventDefault()}
        >
          <label style={emailLabelStyles}>Your Email</label>
          <div style={inputGroupStyles}>
            <input
              type="email"
              placeholder="example@email.com"
              style={inputStyles}
              required
            />
            <button type="submit" style={buttonStyles}>
              Submit →
            </button>
          </div>
        </form>
      </div>
      {/* Footer Grid */}
      <div style={footerStyles}>
        <div style={gridStyles}>
          {/* Hospital Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.2rem' }}>
              <img src={logo} alt="Sakthi Hospital Logo" style={logoImgStyles} />
            </div>
            <div style={{ fontFamily: poppins, fontSize: '12px', marginBottom: '2px' }}>Sakthi Hospital & Research Centre</div>
            <div>
              <div style={infoLineStyles}><FaMapMarkerAlt /> 123 Anywhere St., Any City 12345</div>
              <div style={infoLineStyles}><FaPhoneAlt /> 123-456-7890</div>
              <div style={infoLineStyles}><FaEnvelope /> hello@realemail.com</div>
            </div>
          </div>
          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="#" style={linkStyle}>About Us</a>
            <a href="#" style={linkStyle}>Departments</a>
            <a href="#" style={linkStyle}>Doctors</a>
            <a href="#" style={linkStyle}>Timetable</a>
            <a href="#" style={linkStyle}>Appointment</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="#" style={linkStyle}>Testimonials</a>
            <a href="#" style={linkStyle}>Blog</a>
            <a href="#" style={linkStyle}>Contact Us</a>
            <a href="#" style={linkStyle}>FAQs</a>
          </div>
          {/* Legal + Social */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#" style={linkStyle}>Privacy Policy</a>
              <a href="#" style={linkStyle}>Terms and Conditions</a>
            </div>
            <div>
              <p style={{ fontSize: '12px', marginTop: '2rem', marginBottom: '0.5rem', fontFamily: poppins }}>Follow Us</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <FaFacebook style={iconStyle} />
                <FaYoutube style={iconStyle} />
                <FaInstagram style={iconStyle} />
                <FaTwitter style={iconStyle} />
                <FaLinkedin style={iconStyle} />
              </div>
            </div>
          </div>
        </div>
        <div style={copyrightStyles}>
          Copyright © 2025 Sakthi Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
