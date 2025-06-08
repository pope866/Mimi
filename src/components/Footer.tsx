import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="nav-logo" style={{ marginBottom: '1rem' }}>
              <Zap className="logo-icon" />
              <span style={{ color: 'white' }}>ModernWeb</span>
            </div>
            <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
              Creating beautiful, modern web experiences with cutting-edge technology
              and thoughtful design. Your digital success is our mission.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#web-development">Web Development</a></li>
              <li><a href="#ui-design">UI/UX Design</a></li>
              <li><a href="#mobile-apps">Mobile Apps</a></li>
              <li><a href="#consulting">Consulting</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af' }}>
                <Mail size={16} />
                <span>hello@modernweb.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af' }}>
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af' }}>
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 ModernWeb. All rights reserved. Built with passion and precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;