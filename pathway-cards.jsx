// pathway-cards.jsx — landing section: "Two ways to engage with Zero-X" — Partners + Research

function Pathways() {
  const partners = window.ZX_PATHWAYS?.partners;
  const research = window.ZX_PATHWAYS?.research;

  const cards = [
    {
      key: 'partners',
      eyebrow: 'STRATEGIC PARTNER',
      title: 'Deploy the X-150 at your site.',
      body: 'For industrial operators, waste aggregators, municipal authorities, and green-energy investors. Turn your waste streams into clean energy + carbon credit revenue.',
      bullets: ['Multi-stream revenue', 'Modular deployment', 'Pilot funding available'],
      cta: 'Open partnership inquiry',
      href: 'partners.html',
      icon: 'target',
      accent: partners?.primary || '#ffcc32',
      accentRgb: partners?.primaryRgb || '255, 204, 50',
      gradient: partners?.gradient,
      gradientText: partners?.gradientText,
    },
    {
      key: 'research',
      eyebrow: 'RESEARCH COLLABORATOR',
      title: 'Co-author the future of thermochemical conversion.',
      body: 'For faculty, post-docs, doctoral candidates, and consortium leads. Access 3,000+ hours of empirical data, joint EU/BMWK grant structuring, and a fully instrumented 150 kg/h testbed.',
      bullets: ['3,000+ hrs test data', 'Joint EU grant applications', 'TU Zittau · COMETHA consortium'],
      cta: 'Submit a research proposal',
      href: 'research.html',
      icon: 'activity',
      accent: research?.primary || '#1ebec8',
      accentRgb: research?.primaryRgb || '30, 190, 200',
      gradient: research?.gradient,
      gradientText: research?.gradientText,
    },
  ];

  return (
    <section id="engage" className="zx-section" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse, rgba(30,190,200,0.12), transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 56, alignItems: 'end', marginBottom: 56 }} className="zx-pwc-head">
          <div>
            <Eyebrow>Engage with Zero-X</Eyebrow>
            <h2 className="zx-h1">
              Two ways to <GradText>partner.</GradText>
            </h2>
          </div>
          <div>
            <p className="zx-lede">
              We're actively building two consortiums right now: an international academic research network and a global commercial partner network.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
          {cards.map((c, i) => <PathwayCard key={c.key} c={c} index={i} />)}
        </div>
      </div>

      <style>{`@media (max-width: 920px) { .zx-pwc-head { grid-template-columns: 1fr !important; gap: 24px !important; } }`}</style>
    </section>
  );
}

function PathwayCard({ c, index }) {
  const [hover, setHover] = React.useState(false);
  const isExternal = c.href && c.href.startsWith('http');
  return (
    <a href={c.href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener' : undefined} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          background: 'rgba(255,255,255,0.025)',
          border: `1px solid ${hover ? `rgba(${c.accentRgb}, 0.5)` : 'rgba(255,255,255,0.08)'}`,
          transition: 'all 320ms var(--zx-ease)',
          cursor: 'pointer',
          minHeight: 480,
          display: 'flex', flexDirection: 'column',
          transform: hover ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hover ? `0 30px 60px -20px rgba(0,0,0,0.6), 0 0 60px -20px rgba(${c.accentRgb}, 0.45)` : '0 1px 2px rgba(0,0,0,0.2)',
        }}
      >
        {/* Color top */}
        <div style={{
          position: 'relative',
          padding: '36px 28px 28px',
          background: `linear-gradient(180deg, rgba(${c.accentRgb}, 0.18), rgba(${c.accentRgb}, 0.04) 60%, transparent)`,
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-40%', right: '-20%',
            width: 320, height: 320,
            background: `radial-gradient(circle, rgba(${c.accentRgb}, 0.4), transparent 65%)`,
            filter: 'blur(60px)', pointerEvents: 'none',
            transition: 'all 500ms var(--zx-ease)',
            transform: hover ? 'scale(1.2) translateX(-10%)' : 'scale(1)',
          }} />

          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: c.gradient, color: '#02191d', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 24px -8px rgba(${c.accentRgb}, 0.6), inset 0 1px 0 rgba(255,255,255,0.25)` }}>
              <Icon name={c.icon} size={26} />
            </div>
            <span style={{ font: '700 10.5px var(--zx-font-mono)', color: c.accent, letterSpacing: '0.18em' }}>0{index + 1} / 02</span>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ font: '700 11px var(--zx-font-mono)', color: c.accent, letterSpacing: '0.18em', marginBottom: 12 }}>{c.eyebrow}</div>
            <h3 style={{
              font: '700 clamp(24px, 2.4vw, 32px)/1.15 var(--zx-font-body)',
              letterSpacing: '-0.02em',
              margin: 0,
              background: c.gradientText,
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>{c.title}</h3>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '20px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <p style={{ font: '400 14px/1.6 var(--zx-font-body)', color: 'rgba(255,255,255,0.6)', margin: 0, marginBottom: 20, flex: 1 }}>{c.body}</p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {c.bullets.map(b => (
              <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, font: '500 13px var(--zx-font-body)', color: 'rgba(255,255,255,0.75)' }}>
                <span style={{ color: c.accent, flexShrink: 0 }}><Icon name="check" size={14} /></span>
                {b}
              </li>
            ))}
          </ul>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.06)',
            color: c.accent,
            font: '600 13.5px var(--zx-font-body)',
          }}>
            <span>{c.cta}</span>
            <Icon name={isExternal ? 'arrowUpRight' : 'arrow'} size={16} />
          </div>
        </div>
      </div>
    </a>
  );
}

window.Pathways = Pathways;
