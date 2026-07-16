import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <svg width="28" height="28" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="26" fill="none" stroke="#6e1f2a" strokeWidth="2" />
              <circle cx="28" cy="28" r="20" fill="none" stroke="#a3792f" strokeWidth="1" />
              <circle cx="28" cy="28" r="3" fill="#6e1f2a" />
            </svg>
            <span className="footer-copy">© 2025 Satya Prakash Rajak, Advocate. All rights reserved.</span>
          </div>

          <p className="footer-disclaimer">
            As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This website is solely for the purpose of providing information about the advocate and does not constitute solicitation or advertisement.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
