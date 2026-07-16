import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column */}
          <div className="contact-details">
            <p className="section-eyebrow reveal">Contact</p>
            <h2 className="section-heading reveal">Privileged &amp; Confidential</h2>
            <p className="section-subtitle reveal">
              Every communication with Advocate Rajak is protected by solicitor-client privilege. Reach out to discuss your matter in strict confidence.
            </p>

            <dl className="contact-info reveal">
              <dt>Email</dt>
              <dd>office.sprajak@gmail.com</dd>

              <dt>Phone</dt>
              <dd>+91 94250 99998</dd>

              <dt>Location</dt>
              <dd>Jabalpur, Madhya Pradesh, India</dd>

              <dt>Courts</dt>
              <dd>District &amp; Sessions Court, Jabalpur — Madhya Pradesh High Court, Jabalpur Bench</dd>
            </dl>
          </div>

          {/* Right Column */}
          <div className="contact-form-wrapper">
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Full Name" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="+91" />
              </div>

              <div className="form-group">
                <label htmlFor="matter">Nature of Matter</label>
                <select id="matter" name="matter">
                  <option value="">--Select--</option>
                  <option value="bail">Bail Application</option>
                  <option value="murder">Murder / Homicide</option>
                  <option value="ndps">NDPS / Narcotics</option>
                  <option value="cyber">Cyber Crime</option>
                  <option value="pocso">POCSO Defence</option>
                  <option value="appeal">Appeal / Revision</option>
                  <option value="white-collar">White-Collar Crime</option>
                  <option value="other">Other Criminal Matter</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="details">Brief Details</label>
                <textarea id="details" name="details" placeholder="Provide a brief overview…"></textarea>
              </div>

              <button type="submit" className="form-submit">Send Enquiry</button>

              <p className="form-note">
                Note: This form is for display purposes. A server-side backend (Node.js, PHP, etc.) is required to process email submissions.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
