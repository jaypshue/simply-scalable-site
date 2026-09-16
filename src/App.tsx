type ArrowProps = {
  direction?: 'up-right' | 'right'
}

function Arrow({ direction = 'up-right' }: ArrowProps) {
  return (
    <svg className="arrow-icon" viewBox="0 0 20 20" aria-hidden="true">
      {direction === 'right' ? (
        <>
          <path d="M3 10h13" />
          <path d="m11 5 5 5-5 5" />
        </>
      ) : (
        <>
          <path d="M5 15 15 5" />
          <path d="M7 5h8v8" />
        </>
      )}
    </svg>
  )
}

function CapabilityIcon({ type }: { type: 'agents' | 'prototype' | 'engineering' }) {
  if (type === 'agents') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="7" y="8" width="18" height="16" rx="3" />
        <path d="M12 4v4M20 4v4M11 14h.01M21 14h.01M12 20h8M4 13h3M25 13h3" />
      </svg>
    )
  }

  if (type === 'prototype') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="m18 4 10 10-13 13H5V17L18 4Z" />
        <path d="m15 7 10 10M11 21h.01" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M5 8h22M5 16h22M5 24h13" />
      <circle cx="23" cy="24" r="4" />
      <path d="M23 22v2l1.5 1" />
    </svg>
  )
}

const capabilities = [
  {
    number: '01',
    icon: 'agents' as const,
    title: 'AI-Native Product Development',
    description:
      'Experienced software engineering judgment combined with AI coding agents to move from problem to working software rapidly—while retaining human ownership of architecture, quality, and verification.',
  },
  {
    number: '02',
    icon: 'prototype' as const,
    title: 'Product & Workflow Prototyping',
    description:
      'We turn real user friction into working prototypes. Instead of debating screenshots or requirements documents, we build the experience and test it.',
  },
  {
    number: '03',
    icon: 'engineering' as const,
    title: 'Software Engineering',
    description:
      'Architecture, APIs, distributed systems, cloud applications, and production software built with modern engineering practices.',
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Simply Scalable home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span className="brand-name">Simply Scalable<span className="brand-inc"> Inc.</span></span>
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#capabilities">What we do</a>
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#contact">
          Let&apos;s talk <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero section-frame" aria-labelledby="hero-title">
          <div className="hero-grid-mark" aria-hidden="true">
            <span>01</span>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Software / Product Engineering</p>
            <h1 id="hero-title">Software built around <em>how people</em> work.</h1>
            <p className="hero-summary">
              We investigate real software problems, rapidly prototype better solutions, and build practical software using modern AI-native engineering.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Let&apos;s Talk <Arrow /></a>
              <a className="text-link" href="#work">See Our Work <Arrow direction="right" /></a>
            </div>
          </div>
          <div className="hero-note" aria-label="Our approach">
            <span className="note-label">The useful middle</span>
            <p>Between the messy reality of a workflow and the clean promise of a product.</p>
            <span className="note-rule" />
            <div className="note-footer"><span>Human judgment</span><span>AI-native velocity</span></div>
          </div>
        </section>

        <section className="capabilities section-frame" id="capabilities" aria-labelledby="capabilities-title">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> What we do</p>
            <h2 id="capabilities-title">Make the hard parts <em>clearer.</em></h2>
          </div>
          <div className="capability-list">
            {capabilities.map((capability) => (
              <article className="capability" key={capability.number}>
                <div className="capability-topline">
                  <span className="capability-number">{capability.number}</span>
                  <span className="capability-icon"><CapabilityIcon type={capability.icon} /></span>
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work section-frame" id="work" aria-labelledby="work-title">
          <div className="section-heading section-heading-inline">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> Selected work</p>
              <h2 id="work-title">Ideas, made <em>tangible.</em></h2>
            </div>
            <p className="section-aside">A couple of explorations in making complex work feel more natural.</p>
          </div>
          <div className="project-grid">
            <article className="project-card project-card-dark">
              <div className="project-visual engine-visual" aria-hidden="true">
                <div className="engine-window">
                  <div className="window-bar"><span /><span /><span /><b>engine / workspace</b></div>
                  <div className="engine-layout"><span className="layout-rail" /><div><span className="layout-line short" /><span className="layout-line" /><span className="layout-block" /><span className="layout-line half" /></div></div>
                </div>
                <span className="visual-caption">Observe / reason / build</span>
              </div>
              <div className="project-copy">
                <div className="project-meta"><span>Exploration</span><span>01</span></div>
                <h3>EngineOS</h3>
                <p>AI-assisted engineering platform exploring how software development changes when experienced engineers work directly with capable coding agents.</p>
                <span className="project-link">Explore the idea <Arrow direction="right" /></span>
              </div>
            </article>

            <article className="project-card project-card-warm">
              <div className="project-visual interview-visual" aria-hidden="true">
                <div className="interview-orbit orbit-one" />
                <div className="interview-orbit orbit-two" />
                <div className="interview-core"><span className="core-dot" /><span className="core-wave" /></div>
                <div className="transcript transcript-one"><i /> “Tell me about a time…”</div>
                <div className="transcript transcript-two"><i /> Context found</div>
                <span className="visual-caption">Listen / understand / assist</span>
              </div>
              <div className="project-copy">
                <div className="project-meta"><span>Prototype</span><span>02</span></div>
                <h3>InterviewAssist</h3>
                <p>Real-time AI interview copilot that listens to live interview conversations, identifies questions, and provides contextual assistance.</p>
                <span className="project-link">Explore the idea <Arrow direction="right" /></span>
              </div>
            </article>
          </div>
        </section>

        <section className="idea section-frame" aria-labelledby="idea-title">
          <div className="idea-intro">
            <p className="eyebrow"><span className="eyebrow-line" /> The idea</p>
            <h2 id="idea-title">Better software doesn&apos;t always require <em>replacing</em> the system underneath it.</h2>
          </div>
          <div className="idea-detail">
            <p>We look for valuable workflows trapped inside complicated software and explore ways to make those workflows dramatically easier.</p>
            <div className="process" aria-label="Our process">
              {['Find', 'Investigate', 'Diagnose', 'Prototype', 'Demonstrate'].map((step, index) => (
                <div className="process-step" key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about section-frame" id="about" aria-labelledby="about-title">
          <div className="about-marker" aria-hidden="true">SS<span>/</span>01</div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> About Simply Scalable</p>
            <h2 id="about-title">Practical experience for <em>real-world</em> software.</h2>
            <p>Simply Scalable Inc. is led by an experienced software engineer and architect with more than 20 years of enterprise software development experience across healthcare, insurance, banking, and retail.</p>
            <p>We bring practical engineering experience and product development thinking to the work—staying close to the people, constraints, and decisions that make software useful.</p>
          </div>
          <div className="about-statement">Build what<br /><em>matters.</em></div>
        </section>

        <section className="contact section-frame" id="contact" aria-labelledby="contact-title">
          <div className="contact-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> Start here</p>
            <h2 id="contact-title">Have a software workflow <em>worth improving?</em></h2>
          </div>
          <div className="contact-action">
            <p>Tell us what is getting in the way. We&apos;ll start by understanding the work.</p>
            <a className="contact-email" href="mailto:jshue@simplyscalableinc.com">jshue@simplyscalableinc.com <Arrow /></a>
            <a className="button button-light" href="mailto:jshue@simplyscalableinc.com">Start a Conversation <Arrow /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-frame">
        <a className="brand footer-brand" href="#top" aria-label="Simply Scalable home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span className="brand-name">Simply Scalable<span className="brand-inc"> Inc.</span></span>
        </a>
        <span>Georgia, USA</span>
        <span className="footer-copyright">© {new Date().getFullYear()} Simply Scalable Inc.</span>
      </footer>
    </div>
  )
}

export default App
