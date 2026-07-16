const practiceAreas = [
  {
    citation: 'CrPC § 437 / 439',
    title: 'Bail Applications',
    description:
      'Regular, anticipatory, and default bail motions before Sessions and High Court, with emphasis on personal liberty under Article 21.',
  },
  {
    citation: 'IPC § 302 / 304',
    title: 'Murder & Homicide',
    description:
      'Defence in murder, culpable homicide, and attempt cases — from investigation stage through trial and sentencing.',
  },
  {
    citation: 'NDPS Act, 1985',
    title: 'Narcotics Defence',
    description:
      'Challenging procedural lapses in search, seizure, and sampling under the NDPS Act. Focus on mandatory compliance.',
  },
  {
    citation: 'IT Act, 2000',
    title: 'Cyber Crime',
    description:
      'Defence against charges under the Information Technology Act, including data theft, hacking, and electronic fraud.',
  },
  {
    citation: 'POCSO Act, 2012',
    title: 'POCSO Defence',
    description:
      'Sensitive and rigorous defence in matters under the Protection of Children from Sexual Offences Act.',
  },
  {
    citation: 'CrPC § 374 / 378',
    title: 'Criminal Appeals',
    description:
      'Appeals against conviction, sentence enhancement, and revision petitions before the High Court.',
  },
  {
    citation: 'IPC § 406 / 420',
    title: 'White-Collar Crime',
    description:
      'Defence in fraud, criminal breach of trust, forgery, and economic offences with complex financial evidence.',
  },
  {
    citation: 'CrPC § 125 / DV Act',
    title: 'Matrimonial Defence',
    description:
      'Defending against charges under Section 498A IPC, Domestic Violence Act, and dowry-related allegations.',
  },
  {
    citation: 'IPC / BNS',
    title: 'General Criminal Practice',
    description:
      'Comprehensive defence across the spectrum of criminal law — from the new Bharatiya Nyaya Sanhita to special statutes.',
  },
];

function PracticeAreas() {
  return (
    <section id="practice" className="practice-areas">
      <div className="container">
        <div className="practice-areas-header reveal">
          <span className="section-eyebrow">Areas of Practice</span>
          <h2 className="section-heading">Focused Criminal Defence</h2>
          <p className="section-subtitle">
            Each practice area demands specific knowledge of substantive law,
            procedural safeguards, and evidentiary rules.
          </p>
        </div>

        <div className="practice-grid reveal-stagger">
          {practiceAreas.map((area) => (
            <div key={area.title} className="practice-card reveal">
              <span className="citation">{area.citation}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PracticeAreas;
