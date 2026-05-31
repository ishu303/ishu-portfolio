'use client'

import Link from 'next/link'

export default function CVPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .cv-root{font-family:'Inter',sans-serif;color:#111827;background:#fff;font-size:13px;line-height:1.6}
        .cv-root *{margin:0;padding:0;box-sizing:border-box}
        .cv-root :root{--gold:#D97706;--cyan:#0891B2;--text:#111827;--muted:#6B7280;--border:#E5E7EB;--bg:#FFFFFF;--surface:#F9FAFB}
        .print-bar{background:linear-gradient(135deg,#040812,#0d1630);padding:.9rem 2rem;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:100}
        .print-bar-text{color:#94A3B8;font-family:'JetBrains Mono',monospace;font-size:.75rem;letter-spacing:.08em}
        .print-btn{background:linear-gradient(135deg,#F59E0B,#D97706);color:#040812;border:none;padding:.55rem 1.4rem;border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:.8rem;font-weight:500;cursor:pointer;letter-spacing:.04em;transition:opacity .2s}
        .print-btn:hover{opacity:.85}
        .back-link{color:#94A3B8;font-family:'JetBrains Mono',monospace;font-size:.75rem;letter-spacing:.08em;text-decoration:none;display:flex;align-items:center;gap:.5rem}
        .back-link:hover{color:#F59E0B}
        .page{max-width:780px;margin:2rem auto;padding:3rem;background:#fff;border:1px solid #E5E7EB;border-radius:8px}
        .cv-header{border-bottom:2px solid #111827;padding-bottom:1.2rem;margin-bottom:1.6rem;display:flex;justify-content:space-between;align-items:flex-end;gap:1rem}
        .cv-name{font-size:2.2rem;font-weight:700;letter-spacing:-.03em;line-height:1}
        .cv-title{font-size:.95rem;color:#D97706;font-weight:600;margin-top:.3rem}
        .cv-contact{text-align:right;font-size:.78rem;color:#6B7280;line-height:2}
        .cv-contact a{color:#0891B2;text-decoration:none}
        .cv-contact a:hover{text-decoration:underline}
        .section{margin-bottom:1.6rem}
        .section-title-cv{font-size:.65rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#6B7280;border-bottom:1px solid #E5E7EB;padding-bottom:.3rem;margin-bottom:.9rem}
        .summary{color:#111827;font-size:.85rem;line-height:1.75}
        .entry{margin-bottom:1.1rem}
        .entry-header{display:flex;justify-content:space-between;align-items:baseline;gap:1rem;margin-bottom:.3rem}
        .entry-role{font-weight:600;font-size:.9rem}
        .entry-date{font-family:'JetBrains Mono',monospace;font-size:.72rem;color:#6B7280;white-space:nowrap}
        .entry-org{color:#D97706;font-size:.82rem;font-weight:500;margin-bottom:.3rem}
        .entry-desc{color:#6B7280;font-size:.82rem;line-height:1.7}
        .entry-desc li{margin-left:1.1rem;margin-bottom:.15rem}
        .skills-row{display:flex;flex-wrap:wrap;gap:.6rem 1.4rem;margin-bottom:.5rem}
        .skill-group{display:flex;gap:.4rem;align-items:baseline}
        .skill-cat{font-weight:600;font-size:.78rem;color:#111827;white-space:nowrap}
        .skill-list{font-size:.78rem;color:#6B7280}
        .tag{display:inline-block;padding:.15rem .55rem;border-radius:4px;font-size:.7rem;font-family:'JetBrains Mono',monospace;background:#F9FAFB;border:1px solid #E5E7EB;color:#6B7280;margin:.1rem}
        .hack-entry{margin-bottom:.8rem}
        .hack-name{font-weight:600;font-size:.88rem}
        .hack-org{font-size:.78rem;color:#D97706;font-weight:500}
        .hack-desc{font-size:.8rem;color:#6B7280;margin-top:.2rem;line-height:1.65}
        .cv-footer-bar{margin-top:2rem;padding-top:1rem;border-top:1px solid #E5E7EB;text-align:center;font-size:.72rem;color:#6B7280;font-family:'JetBrains Mono',monospace}
        @media print{
          .print-bar{display:none!important}
          .page{border:none;border-radius:0;margin:0;padding:1.5cm 2cm;max-width:100%}
          .cv-root{font-size:11px}
          .cv-name{font-size:1.8rem}
          a{color:#0891B2!important;text-decoration:none}
        }
        @media(max-width:600px){
          .cv-header{flex-direction:column;align-items:flex-start}
          .cv-contact{text-align:left}
          .page{padding:1.5rem;margin:0}
        }
      `}</style>

      <div className="cv-root">
        <div className="print-bar">
          <Link href="/" className="back-link">← Portfolio</Link>
          <span className="print-bar-text">{'// ishu-singh — curriculum vitae'}</span>
          <button className="print-btn" onClick={() => window.print()}>
            ⬇ Save as PDF
          </button>
        </div>

        <div className="page">
          {/* HEADER */}
          <div className="cv-header">
            <div>
              <div className="cv-name">Ishu Singh</div>
              <div className="cv-title">Full Stack Developer &amp; Tech Lead</div>
            </div>
            <div className="cv-contact">
              <a href="mailto:ishupatel9454@gmail.com">ishupatel9454@gmail.com</a><br />
              <a href="https://www.linkedin.com/in/ishu-singh-26520a207" target="_blank" rel="noopener noreferrer">linkedin.com/in/ishu-singh-26520a207</a><br />
              <a href="https://github.com/ishu303" target="_blank" rel="noopener noreferrer">github.com/ishu303</a><br />
              Varanasi, Uttar Pradesh, India
            </div>
          </div>

          {/* SUMMARY */}
          <div className="section">
            <div className="section-title-cv">Profile</div>
            <div className="summary">
              BCA final-year student at SMS College, Varanasi, with 3+ years of hands-on experience designing,
              building, and shipping real products. Served as Tech Lead at Glosseo (Apr 2024 – May 2025),
              leading end-to-end full-stack development across AI/ML, mobile, and IoT domains. Passionate
              about solving practical problems with technology and exploring the intersection of AI with
              India&apos;s grassroots economy.
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="section">
            <div className="section-title-cv">Experience</div>

            <div className="entry">
              <div className="entry-header">
                <div className="entry-role">Tech Lead</div>
                <div className="entry-date">Apr 2024 – May 2025</div>
              </div>
              <div className="entry-org">Glosseo · Varanasi, UP</div>
              <div className="entry-desc">
                <ul>
                  <li>Led a team of 2–3 developers to design and ship product features end-to-end.</li>
                  <li>Architected full-stack infrastructure, defined coding standards, and conducted code reviews.</li>
                  <li>Maintained CI/CD deployment pipelines and collaborated with stakeholders on technical strategy.</li>
                </ul>
              </div>
            </div>

            <div className="entry">
              <div className="entry-header">
                <div className="entry-role">BCA Student &amp; Independent Builder</div>
                <div className="entry-date">2023 – Present</div>
              </div>
              <div className="entry-org">SMS College · Varanasi, UP</div>
              <div className="entry-desc">
                <ul>
                  <li>Self-taught across multiple stacks — React, Flutter, Firebase, ML/AI tooling.</li>
                  <li>Shipped real products alongside academics; led college tech projects and entrepreneurial ventures.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="section">
            <div className="section-title-cv">Selected Projects</div>

            <div className="entry">
              <div className="entry-header">
                <div className="entry-role">Studymates — Study-Partner Matching App</div>
                <div className="entry-date">2026</div>
              </div>
              <div className="entry-desc">
                Real-time study-partner matching app for competitive-exam aspirants. Session management, peer matching.
                <br /><span className="tag">Flutter</span><span className="tag">Firebase</span>
              </div>
            </div>

            <div className="entry">
              <div className="entry-header">
                <div className="entry-role">janSetu — Public Grievance Platform</div>
                <div className="entry-date">2026 · SMSOTSAV 2026</div>
              </div>
              <div className="entry-desc">
                Civic platform connecting citizens to resolution. Built at SMSOTSAV 2026 Hackathon.
                <br /><span className="tag">MongoDB</span><span className="tag">Express</span><span className="tag">React</span><span className="tag">Node.js</span>
              </div>
            </div>

            <div className="entry">
              <div className="entry-header">
                <div className="entry-role">Letask — Mentorship Platform</div>
                <div className="entry-date">2024</div>
              </div>
              <div className="entry-desc">
                Two-tier mentorship platform: free Pre-Mentorship + paid Pro-Mentorship with chat & video. Role-based access.
                <br /><span className="tag">React</span><span className="tag">Firebase</span><span className="tag">Firestore</span><span className="tag">Node.js</span>
              </div>
            </div>

            <div className="entry">
              <div className="entry-header">
                <div className="entry-role">Timetable Automation App</div>
                <div className="entry-date">2024–25</div>
              </div>
              <div className="entry-desc">
                Greedy constraint-based scheduler for SMS College — auto-resolves faculty, room &amp; subject conflicts.
                <br /><span className="tag">React</span><span className="tag">Scheduling Algorithm</span>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="section">
            <div className="section-title-cv">Technical Skills</div>
            <div className="skills-row">
              <div className="skill-group"><span className="skill-cat">Frontend &amp; Mobile:</span><span className="skill-list">React.js, Next.js 14, React Native, Flutter, HTML/CSS, Tailwind</span></div>
            </div>
            <div className="skills-row">
              <div className="skill-group"><span className="skill-cat">Backend &amp; Database:</span><span className="skill-list">Node.js, Firebase, Firestore, MySQL, REST APIs</span></div>
            </div>
            <div className="skills-row">
              <div className="skill-group"><span className="skill-cat">AI / ML &amp; LLMs:</span><span className="skill-list">Ollama, LangChain, TF-IDF / NLP, Whisper, LM Studio</span></div>
            </div>
            <div className="skills-row">
              <div className="skill-group"><span className="skill-cat">Languages &amp; Tools:</span><span className="skill-list">JavaScript, Python, Dart, C++, PHP, Git / GitHub</span></div>
            </div>
          </div>

          {/* HACKATHONS */}
          <div className="section">
            <div className="section-title-cv">Hackathons &amp; Competitions</div>
            <div className="hack-entry">
              <div className="entry-header">
                <div className="hack-name">First Prize — Business Model Contest 9.0</div>
                <div className="entry-date">Apr 2025</div>
              </div>
              <div className="hack-org">SMS College, Varanasi (CEISD)</div>
            </div>
            <div className="hack-entry">
              <div className="entry-header">
                <div className="hack-name">2nd Position — Vibe Coding (Abhyuday&apos;26)</div>
                <div className="entry-date">Feb 2026</div>
              </div>
              <div className="hack-org">Ashoka Institute of Technology &amp; Management, Varanasi</div>
            </div>
            <div className="hack-entry">
              <div className="entry-header">
                <div className="hack-name">Second Prize — WebDX Brain Storming</div>
                <div className="entry-date">Feb 2026</div>
              </div>
              <div className="hack-org">SMS College, Varanasi (LiveWire)</div>
            </div>
            <div className="hack-entry">
              <div className="entry-header">
                <div className="hack-name">Third Prize — Jan Samadhan 4.0</div>
                <div className="entry-date">Feb 2025</div>
              </div>
              <div className="hack-org">SMS College, Varanasi · Public Policy Hackathon</div>
              <div className="hack-desc">Proposed civic solutions for waste management and urban drainage in Varanasi.</div>
            </div>
            <div className="hack-entry">
              <div className="entry-header">
                <div className="hack-name">Second Prize — Business Plan Contest 8.0</div>
                <div className="entry-date">May 2024</div>
              </div>
              <div className="hack-org">SMS College, Varanasi (CEISD)</div>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="section">
            <div className="section-title-cv">Certifications &amp; Participation</div>
            <div className="entry-desc" style={{ lineHeight: '1.9' }}>
              <span className="tag">Techno Camp 2023 — PHP &amp; MySQL</span>
              <span className="tag">Interactive Web Dev JS &amp; React (DigiPodium, 2025)</span>
              <span className="tag">Data Analysis with Python (SMS, Oct 2024)</span>
              <span className="tag">TechBiz Fest — KIT (Sep 2025)</span>
              <span className="tag">SMSOTSAV 2026 — Hackathon (SMS Lucknow)</span>
              <span className="tag">TECHCON-2025 — National Conference (SMS)</span>
              <span className="tag">NextGen AI — Paper Presenter (National Conference, 2025)</span>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="section">
            <div className="section-title-cv">Education</div>
            <div className="entry">
              <div className="entry-header">
                <div className="entry-role">Bachelor of Computer Applications (BCA)</div>
                <div className="entry-date">2023 – 2026</div>
              </div>
              <div className="entry-org">School of Management Sciences (SMS College) · Varanasi, UP</div>
              <div className="entry-desc">Relevant coursework: DSA, DBMS, Software Engineering, Computer Networks, OOP, AI Fundamentals</div>
            </div>
          </div>

          <div className="cv-footer-bar">Ishu Singh · ishupatel9454@gmail.com · Varanasi, India · 2026</div>
        </div>
      </div>
    </>
  )
}
