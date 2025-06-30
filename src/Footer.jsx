import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from './assets/logo_1.png';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Font families
  const poppins = "'Poppins', sans-serif";
  const figtree = "'Figtree', sans-serif";

  // Newsletter box styles
  const subscribeBoxStyles = {
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 32px #93c5fd33',
    maxWidth: '910px',
    margin: '0 auto',
    marginTop: isMobile ? '20px' : '40px',
    marginBottom: isMobile ? '40px' : '-100px',
    padding: isMobile ? '32px 16px' : '48px 60px',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'flex-start' : 'center',
    justifyContent: 'space-between',
    gap: isMobile ? '30px' : '0',
    position: 'relative',
    zIndex: 2,
    marginLeft:'240px',
  };

  const subscribeLeftStyles = {
    flex: 1,
    minWidth: isMobile ? '100%' : '320px',
    marginBottom: isMobile ? '14px' : 0,
  };

  const subscribeTitleStyles = {
    color: '#1e293b',
    fontWeight: 600,
    fontSize: isMobile ? '20px' : '30px',
    marginBottom: '14px',
    fontFamily: figtree,
    lineHeight: 1.2,
  };

  const subscribeDescStyles = {
    color: '#64748b',
    fontSize: isMobile ? '12px' : '12px',
    fontFamily: poppins,
    marginTop: '0',
    marginBottom: '0',
    fontWeight: 400,
  };

  // Email label above the box
  const emailLabelStyles = {
    color: '#334155',
    fontFamily: poppins,
    fontSize: '12px',
    fontWeight: 500,
    marginBottom: '2px',
    marginLeft: '8px',
  };

  // Input group: border extends past the button, button is inside box, left-aligned
  const inputGroupStyles = {
    display: 'flex',
    alignItems: 'center',
    border: '1.5px solid #cbd5e1',
    borderRadius: '20px',
    background: '#f8fafc',
    width: isMobile ? '100%' : '380px',
    padding: '8px',
    boxSizing: 'border-box',
    position: 'relative',
  };

  const inputStyles = {
    padding: isMobile ? '10px 14px' : '12px 20px',
    fontSize: '15px',
    fontFamily: poppins,
    border: 'none',
    outline: 'none',
    flex: 1,
    color: '#334155',
    background: 'transparent',
    borderRadius: '30px',
  };

  const buttonStyles = {
    background: '#307bc4',
    color: '#fff',
    border: 'none',
    padding: isMobile ? '10px 20px' : '12px 28px',
    fontSize: '15px',
    fontWeight: 600,
    fontFamily: poppins,
    boxShadow: '307bc4',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
    borderRadius: '24px',
    marginLeft: '0px',
    // Make the button appear inside the box, not flush right
    position: 'relative',
    left: '0',
    minWidth: '90px',
  };

  const footerStyles = {
    backgroundColor: '#3b82c4',
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
    gap: isMobile ? '32px' : '12rem',
    paddingLeft: isMobile ? '0' : '40px',
    paddingRight: isMobile ? '0' : '40px',
    paddingTop: isMobile ? '0' : '2rem',
    alignItems: 'flex-start',
  };

  const logoImgStyles = {
marginBottom:'-10px',
    objectFit: 'contain',
    boxShadow: 'none',
    width: '250px',
      marginLeft: isMobile ? '-10px' : '-20px', // <-- THIS LINE moves the logo left
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
    fontSize: isMobile ? '13px' : '14px',
    lineHeight: 2,
     fontSize: '12px',
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
    fontSize: isMobile ? '14px' : '15px',
    fontFamily: poppins,
    transition: 'opacity 0.18s',
    fontSize: '12px',
  };

  const iconStyle = {
    fontSize: isMobile ? '18px' : '20px',
    cursor: 'pointer',
    opacity: 0.85,
    background: '#fff2',
    borderRadius: '50%',
    padding: '6px',
    transition: 'background 0.18s, opacity 0.18s',
    fontSize: '25px',
  };

  const copyrightStyles = {
    textAlign: 'center',
    borderTop: '2px solid rgba(255,255,255,0.13)',
    marginTop: isMobile ? '2.5rem' : '2.8rem',
    paddingTop: '1.2rem',
    fontSize: isMobile ? '13px' : '15px',
    opacity: 0.7,
    fontFamily: poppins,
    fontSize: '12px',
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
        <form style={{ flex: 1, minWidth: isMobile ? '100%' : '340px', display: 'flex', flexDirection: 'column', gap: '8px' }} onSubmit={e => e.preventDefault()}>
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
            <div style={{ fontFamily: poppins, fontSize: '12px',marginBottom:'2px', }}>Sakthi Hospital & Research Centre</div>
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

export default Footer;
