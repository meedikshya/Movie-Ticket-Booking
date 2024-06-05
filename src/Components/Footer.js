import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: 'white' }} className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12 mb-3">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              We are a leading movie ticket booking system, offering the best movie experience with the latest releases and comfortable seating.
            </p>
          </div>
          <div className="col-md-4 col-12 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" style={{ color: 'white' }}>Home</a></li>
              <li><a href="#" style={{ color: 'white' }}>Movies</a></li>
              <li><a href="#" style={{ color: 'white' }}>Contact Us</a></li>
              <li><a href="#" style={{ color: 'white' }}>About</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-12 mb-3">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: 123 Movie St, Film City, CA 45678<br />
              <FontAwesomeIcon icon={faPhone} /> Phone: (123) 456-7890<br />
              <FontAwesomeIcon icon={faEnvelope} /> Email: info@movietickets.com
            </p>
            <div className="social-icons">
              <a href="#" style={{ color: 'white', marginRight: '0.5rem' }}><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" style={{ color: 'white', marginRight: '0.5rem' }}><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" style={{ color: 'white', marginRight: '0.5rem' }}><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" style={{ color: 'white' }}><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-0">&copy; 2024 Movie Ticket Booking System. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
