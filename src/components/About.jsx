export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Portrait — place your photo at public/portrait.jpg */}
          <div className="about-portrait reveal">
            <img
              src="/potrait.jpg"
              alt="Advocate Satya Prakash Rajak"
              className="portrait-img"
            />
            <div className="portrait-inner" />
            <div className="portrait-text">Advocate · Jabalpur</div>
          </div>

          {/* Biography */}
          <div className="about-content">
            <div className="about-eyebrow reveal">About the Advocate</div>
            <h2 className="about-heading reveal">
              A practice built on the principle that every accused deserves uncompromising defence.
            </h2>
            <p className="reveal">
              Satya Prakash Rajak has practised criminal law for over fourteen years before the
              District &amp; Sessions Court, Jabalpur and the Madhya Pradesh High Court, Jabalpur
              Bench. His practice spans the full spectrum of criminal defence — from securing
              bail at the earliest stage to conducting rigorous cross-examination at trial and
              arguing appeals before the High Court.
            </p>
            <p className="reveal">
              Advocate Rajak's approach is founded on meticulous preparation, an intimate
              knowledge of procedural and substantive criminal law, and a deep commitment to
              the constitutional guarantee of personal liberty under Article 21. Each client
              receives direct, one-on-one access to their advocate — never delegated to juniors
              at critical stages.
            </p>
            <ul className="credentials-list reveal">
              <li>
                <span className="bullet">§</span>
                Enrolled with the Bar Council of Madhya Pradesh
              </li>
              <li>
                <span className="bullet">§</span>
                Regular practitioner, District &amp; Sessions Court, Jabalpur
              </li>
              <li>
                <span className="bullet">§</span>
                Regular practitioner, Madhya Pradesh High Court, Jabalpur Bench
              </li>
              <li>
                <span className="bullet">§</span>
                14+ years of dedicated criminal defence practice
              </li>
              <li>
                <span className="bullet">§</span>
                Specialisation in bail, trial, and appellate advocacy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
