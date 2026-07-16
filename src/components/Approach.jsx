import React from 'react';

const steps = [
  {
    num: '01',
    stage: 'Stage One',
    title: 'Initial Consultation',
    desc: 'A thorough, privileged meeting to understand the facts, assess the charges, examine the FIR and available documents, and advise on the immediate course of action.',
  },
  {
    num: '02',
    stage: 'Stage Two',
    title: 'Bail & Immediate Relief',
    desc: 'Where personal liberty is at stake, the first priority is securing bail — regular, anticipatory, or default — before the appropriate court.',
  },
  {
    num: '03',
    stage: 'Stage Three',
    title: 'Case Strategy & Investigation',
    desc: "Detailed analysis of the prosecution's evidence, identification of procedural lapses, engagement of private investigation where necessary, and formulation of a comprehensive defence strategy.",
  },
  {
    num: '04',
    stage: 'Stage Four',
    title: 'Trial Representation',
    desc: 'Rigorous cross-examination, presentation of defence witnesses, arguments on charge, and strategic engagement at every stage of the trial process.',
  },
  {
    num: '05',
    stage: 'Stage Five',
    title: 'Appeal & Post-Conviction Relief',
    desc: 'If the trial outcome is adverse, pursuing appeals, revision petitions, or sentence review before the High Court with meticulous preparation of grounds.',
  },
];

function Approach() {
  return (
    <section id="approach" className="approach">
      <div className="container">
        <div className="approach-header reveal">
          <span className="section-eyebrow">The Process</span>
          <h2 className="section-heading">How a Defence Proceeds</h2>
          <p className="section-subtitle">
            A disciplined, stage-wise approach to each criminal matter — from the first consultation to the final argument.
          </p>
        </div>

        <div className="approach-list">
          {steps.map((step) => (
            <div className="approach-step reveal" key={step.num}>
              <div className="step-tag">
                <span className="step-num">{step.num}</span>
                {step.stage}
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
