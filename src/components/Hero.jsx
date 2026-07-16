export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Text Content */}
          <div className="hero-text">
            <div className="hero-eyebrow reveal">Criminal Defence Advocate</div>
            <h1 className="hero-heading reveal">
              Satya Prakash Rajak{' '}
              <em>defends the accused</em>, not just the case.
            </h1>
            <p className="hero-subtitle reveal">
              With over fourteen years of courtroom experience across the District &amp; Sessions
              Court, Jabalpur and the Madhya Pradesh High Court, Advocate Rajak provides
              rigorous, principled criminal defence.
            </p>
            <div className="hero-buttons reveal">
              <a href="#contact" className="btn-primary">
                Request Consultation
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#practice" className="btn-ghost">
                View Practice Areas
              </a>
            </div>
          </div>

          {/* Seal Graphic */}
          <div className="hero-seal reveal">
            <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="textCircle" d="M 210,210 m -170,0 a 170,170 0 1,1 340,0 a 170,170 0 1,1 -340,0" fill="none" />
              </defs>

              {/* Outer ring */}
              <circle cx="210" cy="210" r="205" fill="none" stroke="#6e1f2a" strokeWidth="2" opacity="0.6" />
              <circle cx="210" cy="210" r="195" fill="none" stroke="#6e1f2a" strokeWidth="1" opacity="0.3" />

              {/* Middle ring */}
              <circle cx="210" cy="210" r="175" fill="none" stroke="#a3792f" strokeWidth="1.5" opacity="0.5" />

              {/* Circular Text */}
              <text fill="#6e1f2a" fontSize="13" fontFamily="'IBM Plex Mono', monospace" letterSpacing="6" fontWeight="500">
                <textPath href="#textCircle" startOffset="0%">
                  SATYA PRAKASH RAJAK &nbsp;•&nbsp; ADVOCATE &nbsp;•&nbsp; JABALPUR M.P. &nbsp;•&nbsp;
                </textPath>
              </text>

              {/* Inner decorative rings */}
              <circle cx="210" cy="210" r="140" fill="none" stroke="#6e1f2a" strokeWidth="1" opacity="0.2" />
              <circle cx="210" cy="210" r="130" fill="none" stroke="#a3792f" strokeWidth="0.75" opacity="0.25" />

              {/* Scale of Justice motif */}
              <g transform="translate(210, 210)" opacity="0.55">
                {/* Central pillar */}
                <line x1="0" y1="-70" x2="0" y2="70" stroke="#6e1f2a" strokeWidth="2" />

                {/* Top ornament */}
                <circle cx="0" cy="-70" r="6" fill="none" stroke="#a3792f" strokeWidth="1.5" />
                <circle cx="0" cy="-70" r="2" fill="#6e1f2a" />

                {/* Base */}
                <line x1="-30" y1="70" x2="30" y2="70" stroke="#6e1f2a" strokeWidth="2" />
                <line x1="-20" y1="76" x2="20" y2="76" stroke="#a3792f" strokeWidth="1" />

                {/* Balance beam */}
                <line x1="-65" y1="-50" x2="65" y2="-50" stroke="#6e1f2a" strokeWidth="1.5" />

                {/* Left pan strings */}
                <line x1="-65" y1="-50" x2="-55" y2="-10" stroke="#a3792f" strokeWidth="0.75" />
                <line x1="-65" y1="-50" x2="-75" y2="-10" stroke="#a3792f" strokeWidth="0.75" />

                {/* Left pan */}
                <path d="M -85,-10 Q -65,10 -45,-10" fill="none" stroke="#6e1f2a" strokeWidth="1.5" />

                {/* Right pan strings */}
                <line x1="65" y1="-50" x2="55" y2="-10" stroke="#a3792f" strokeWidth="0.75" />
                <line x1="65" y1="-50" x2="75" y2="-10" stroke="#a3792f" strokeWidth="0.75" />

                {/* Right pan */}
                <path d="M 45,-10 Q 65,10 85,-10" fill="none" stroke="#6e1f2a" strokeWidth="1.5" />
              </g>

              {/* Inner circle */}
              <circle cx="210" cy="210" r="100" fill="none" stroke="#6e1f2a" strokeWidth="0.75" opacity="0.15" />

              {/* Corner ornaments */}
              <g opacity="0.2">
                <circle cx="210" cy="60" r="3" fill="#a3792f" />
                <circle cx="210" cy="360" r="3" fill="#a3792f" />
                <circle cx="60" cy="210" r="3" fill="#a3792f" />
                <circle cx="360" cy="210" r="3" fill="#a3792f" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
