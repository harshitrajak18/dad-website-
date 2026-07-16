import { useState, useEffect } from 'react'

export default function BCIGate() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (visible) {
      document.body.classList.add('body-locked')
    } else {
      document.body.classList.remove('body-locked')
    }
    return () => document.body.classList.remove('body-locked')
  }, [visible])

  if (!visible) return null

  return (
    <div className="bci-gate" id="bci-gate">
      <div className="bci-gate-inner">
        <svg className="seal-mark" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="26" fill="none" stroke="#6e1f2a" strokeWidth="2" />
          <circle cx="28" cy="28" r="20" fill="none" stroke="#a3792f" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="3" fill="#6e1f2a" />
        </svg>
        <div className="disclaimer-label">Bar Council of India — Disclaimer</div>
        <h2>Important Notice</h2>
        <p>
          As per the rules of the Bar Council of India, advocates are not permitted to
          solicit work or advertise. By accessing this website, the user acknowledges that
          the information provided herein is solely for informational purposes. There has
          been no advertisement, personal communication, solicitation, invitation, or
          inducement of any sort from Advocate Satya Prakash Rajak or his associates to
          create an advocate-client relationship through this website.
        </p>
        <button
          className="bci-enter-btn"
          onClick={() => setVisible(false)}
          id="bci-enter"
        >
          I Understand — Enter Site
        </button>
      </div>
    </div>
  )
}
