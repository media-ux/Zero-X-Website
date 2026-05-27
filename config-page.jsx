// config-page.jsx — shared template used by volt.html / heat.html / chill.html
// Renders a full epic product page for one X-150 configuration.

function ConfigPage({ config }) {
  const onNav = React.useCallback((id) => {
    if (id === 'top') { window.location.href = 'index.html'; return; }
    window.location.href = 'index.html#' + id;
  }, []);

  // Inject config color tokens for this page (used by gradients & glows)
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--cfg-primary', config.primary);
    root.style.setProperty('--cfg-primary-rgb', config.primaryRgb);
    root.style.setProperty('--cfg-accent', config.accent);
    root.style.setProperty('--cfg-secondary', config.secondary);
    document.title = `${config.code} · ${config.tagline} · Zero-X`;
  }, [config]);

  return (
    <>
      <Navbar onNav={onNav} />
      <main>
        <ConfigHero config={config} />
        <ConfigProblem config={config} />
        <ConfigProcess config={config} />
        <ConfigSpecs config={config} />
        <ConfigTargets config={config} />
        <ConfigBenefits config={config} />
        <ConfigFunding config={config} />
        <ConfigSiblings config={config} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// ============== HERO ==============
function ConfigHero({ config }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 140, paddingBottom: 80 }}>
      <ConfigMesh config={config} />
      <GridBg />

      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: 56, alignItems: 'center' }} className="cfg-hero-grid">
          {/* Left: copy */}
          <div className="zx-fade-in">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 999, background: `rgba(${config.primaryRgb}, 0.10)`, border: `1px solid rgba(${config.primaryRgb}, 0.30)`, marginBottom: 28 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: config.primary, boxShadow: `0 0 14px ${config.primary}` }} />
              <span style={{ font: '600 11px var(--zx-font-body)', color: config.primary, letterSpacing: '0.18em', textTransform: 'uppercase' }}>X-150 · {config.name} Configuration</span>
            </div>

            <h1 className="zx-h-display" style={{ fontSize: 'clamp(56px, 8vw, 128px)', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: 20 }}>
              <span style={{ display: 'block', font: '600 0.82em var(--zx-font-display)', letterSpacing: '0.02em', color: 'rgba(255,255,255,0.4)' }}>{config.code}</span>
              <span style={{ background: config.gradientText, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{config.tagline}</span>
            </h1>

            <p style={{ font: '300 clamp(17px, 1.5vw, 22px)/1.55 var(--zx-font-body)', color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 0 36px', textWrap: 'pretty' }}>
              {config.oneline}
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="mailto:ceo@zero-x.co" className="zx-btn zx-btn--lg" style={{ background: config.gradient, color: '#02191d', boxShadow: `0 8px 28px -8px rgba(${config.primaryRgb}, 0.6), inset 0 1px 0 rgba(255,255,255,0.3)` }}>
                Talk to partnerships →
              </a>
              <a href="#process" onClick={(e) => { e.preventDefault(); document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }); }} className="zx-btn zx-btn--lg zx-btn--ghost" style={{ textDecoration: 'none' }}>
                <Icon name="play" size={14} /> How it works
              </a>
            </div>

            {/* KPI row */}
            <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }} className="cfg-hero-kpis">
              {config.kpis.map(([v, u, l], i) => (
                <div key={l} style={{ padding: '22px 14px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 2 }}>
                    <span style={{ font: '600 clamp(28px, 3vw, 40px) var(--zx-font-display)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>{v}</span>
                    {u && <span style={{ font: '500 14px var(--zx-font-display)', color: config.primary }}>{u}</span>}
                  </div>
                  <div className="zx-kpi-label" style={{ marginTop: 6, fontSize: 9.5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <ConfigHeroVisual config={config} />
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .cfg-hero-grid { grid-template-columns: 1fr !important; }
          .cfg-hero-kpis { grid-template-columns: repeat(2, 1fr) !important; }
          .cfg-hero-kpis > div:nth-child(2) { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}

function ConfigMesh({ config }) {
  return (
    <>
      <div style={{
        position: 'absolute', top: '5%', left: '-10%', width: 700, height: 700,
        background: `radial-gradient(circle, rgba(${config.primaryRgb}, 0.30), transparent 65%)`,
        filter: 'blur(100px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '0%', right: '-10%', width: 600, height: 600,
        background: `radial-gradient(circle, rgba(${config.primaryRgb}, 0.18), transparent 65%)`,
        filter: 'blur(120px)', pointerEvents: 'none',
      }} />
    </>
  );
}

function ConfigHeroVisual({ config }) {
  return (
    <div className="zx-fade-in" style={{ animationDelay: '120ms', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: '-10%',
        background: `radial-gradient(ellipse at center, rgba(${config.primaryRgb}, 0.4) 0%, transparent 65%)`,
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        borderRadius: 28,
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
        border: '1px solid rgba(255,255,255,0.10)',
        padding: 18,
        boxShadow: `0 40px 100px -20px rgba(0,0,0,0.8), 0 0 100px -30px rgba(${config.primaryRgb}, 0.4)`,
      }}>
        {/* Topbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 10px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 28, height: 28, borderRadius: 8, background: `linear-gradient(135deg, ${config.primary}, ${config.accent})`, color: '#02191d', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={config.icon} size={15} />
            </span>
            <span className="zx-mono" style={{ color: '#fff', fontSize: 10.5 }}>{config.code}</span>
          </div>
          <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10 }}>UNIT-001 · ONLINE</div>
        </div>

        <div style={{
          position: 'relative', aspectRatio: '4 / 3',
          borderRadius: 18, overflow: 'hidden',
          background: `radial-gradient(ellipse at center, rgba(${config.primaryRgb}, 0.15), rgba(1,14,16,0.6))`,
        }}>
          <img src="assets/x150-perspective-cutout.png" alt="X-150" style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'contain',
            mixBlendMode: 'screen', filter: 'brightness(1.05) contrast(1.05)',
          }} />

          {/* Output ray — animated */}
          <ConfigOutputRay config={config} />

          {/* Floating chips */}
          <div style={{ position: 'absolute', bottom: 18, left: 18, padding: '10px 14px', borderRadius: 12, background: 'rgba(1,14,16,0.78)', backdropFilter: 'blur(12px)', border: `1px solid rgba(${config.primaryRgb}, 0.4)` }}>
            <div className="zx-mono" style={{ color: config.primary, fontSize: 9.5, marginBottom: 2 }}>INPUT</div>
            <div style={{ font: '600 13px var(--zx-font-body)', color: '#fff' }}>Mixed waste</div>
          </div>
          <div style={{ position: 'absolute', top: 18, right: 18, padding: '10px 14px', borderRadius: 12, background: 'rgba(1,14,16,0.78)', backdropFilter: 'blur(12px)', border: `1px solid rgba(${config.primaryRgb}, 0.4)` }}>
            <div className="zx-mono" style={{ color: config.primary, fontSize: 9.5, marginBottom: 2 }}>OUTPUT</div>
            <div style={{ font: '600 13px var(--zx-font-body)', color: '#fff' }}>{config.outputLabel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfigOutputRay({ config }) {
  // Decorative output emission — a glowing ray from the right side
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 400 300" preserveAspectRatio="none">
      <defs>
        <radialGradient id={`ray-${config.id}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={config.primary} stopOpacity="0.8" />
          <stop offset="0.5" stopColor={config.primary} stopOpacity="0.3" />
          <stop offset="1" stopColor={config.primary} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="320" cy="120" rx="80" ry="40" fill={`url(#ray-${config.id})`} style={{ animation: 'cfgPulse 3s ease-in-out infinite' }} />
      <style>{`@keyframes cfgPulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }`}</style>
    </svg>
  );
}

// ============== PROBLEM / SOLUTION ==============
function ConfigProblem({ config }) {
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 56, alignItems: 'start' }} className="cfg-two">
          <div>
            <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>THE PROBLEM</div>
            <h2 className="zx-h1" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.1, color: 'rgba(255,255,255,0.55)' }}>
              {config.problemHead}
            </h2>
            <p className="zx-lede" style={{ marginTop: 20 }}>{config.problemBody}</p>
          </div>
          <div style={{ padding: 36, borderRadius: 24, background: `linear-gradient(135deg, rgba(${config.primaryRgb}, 0.08), transparent)`, border: `1px solid rgba(${config.primaryRgb}, 0.25)`, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '-30%', background: `radial-gradient(circle, rgba(${config.primaryRgb}, 0.15), transparent 60%)`, filter: 'blur(40px)' }} />
            <div style={{ position: 'relative' }}>
              <div className="zx-mono" style={{ color: config.primary, marginBottom: 12 }}>THE {config.name} SOLUTION</div>
              <h3 className="zx-h1" style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.1, marginBottom: 18 }}>
                {config.solutionHead}
              </h3>
              <p className="zx-lede" style={{ color: 'rgba(255,255,255,0.75)' }}>{config.solutionBody}</p>

              <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <ProblemPill icon="check" label="Disposal eliminated" color={config.primary} />
                <ProblemPill icon="check" label={`${config.outputLabel} on-site`} color={config.primary} />
                <ProblemPill icon="check" label="Carbon credits" color={config.primary} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .cfg-two { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function ProblemPill({ icon, label, color }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', font: '500 12px var(--zx-font-body)', color: 'rgba(255,255,255,0.85)' }}>
      <span style={{ color }}><Icon name={icon} size={13} /></span>
      {label}
    </span>
  );
}

// ============== PROCESS ==============
function ConfigProcess({ config }) {
  const steps = [
    { n: '01', t: 'Input', sub: 'INPUT', d: 'Mixed unrecyclable waste & biomass enters the line — wood, sludge, MSW, ag residue, RDF.', icon: 'recycle' },
    { n: '02', t: 'Pre-processing', sub: 'PREP', d: 'Drier → Shredder → Pelletizer. Feedstock is sized, dried, and pelletized for stable gasifier feed.', icon: 'layers' },
    { n: '03', t: 'X-150 Gasifier', sub: 'CONVERSION', d: 'Single-stage downdraft gasification + 950 °C catalytic tar reformer. Output: clean producer gas.', icon: 'flame' },
    { n: '04', t: config.conversionDevice, sub: 'OUTPUT', d: config.conversionDesc, icon: config.outputIcon },
  ];
  return (
    <section id="process" className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <div className="zx-mono" style={{ color: config.primary, marginBottom: 12 }}>HOW {config.name} WORKS</div>
          <h2 className="zx-h1">Four stages. <span style={{ background: config.gradientText, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>One container.</span></h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* connecting line */}
          <div style={{ position: 'absolute', top: 38, left: '12%', right: '12%', height: 1, background: `linear-gradient(to right, transparent, rgba(${config.primaryRgb}, 0.5), rgba(${config.primaryRgb}, 0.5), transparent)`, zIndex: 0 }} className="cfg-flow-line" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, position: 'relative' }}>
            {steps.map((s, i) => (
              <div key={s.n} className="zx-card" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                  <span style={{ font: '600 12px var(--zx-font-mono)', color: `rgba(${config.primaryRgb}, 0.85)`, letterSpacing: '0.1em' }}>{s.sub} · {s.n}</span>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: `linear-gradient(135deg, rgba(${config.primaryRgb}, 0.25), rgba(${config.primaryRgb}, 0.08))`, border: `1px solid rgba(${config.primaryRgb}, 0.3)`, color: config.primary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={s.icon} size={18} />
                  </div>
                </div>
                <h3 className="zx-h2" style={{ fontSize: 20, marginBottom: 10 }}>{s.t}</h3>
                <p className="zx-body" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .cfg-flow-line { display: none; } }`}</style>
    </section>
  );
}

// ============== SPECS ==============
function ConfigSpecs({ config }) {
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '30%', right: '-15%', width: 600, height: 600, background: `radial-gradient(circle, rgba(${config.primaryRgb}, 0.18), transparent 70%)`, filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: 56, alignItems: 'center' }} className="cfg-two">
          <div>
            <div className="zx-mono" style={{ color: config.primary, marginBottom: 12 }}>OUTPUT SPECIFICATIONS</div>
            <h2 className="zx-h1" style={{ marginBottom: 20 }}>
              Drop-in spec. <br />
              <span style={{ background: config.gradientText, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Container-form.</span>
            </h2>
            <p className="zx-lede" style={{ marginBottom: 28 }}>
              The {config.name} configuration ships as a 20-ft ISO container. Crane it in, hook it up, start converting on day one.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <FactRow icon="box" label="Footprint" value="20-ft ISO · plug & play" />
              <FactRow icon="check" label="Validated" value="COMETHA Phase 2 · Paris" />
              <FactRow icon="globe" label="Deployment" value="48-hour install · turnkey" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {config.specs.map((s, i) => {
              const highlight = i < 2;
              return (
                <div key={s.label} style={{
                  padding: 22,
                  borderRadius: 18,
                  background: highlight ? `linear-gradient(135deg, rgba(${config.primaryRgb}, 0.10), rgba(${config.primaryRgb}, 0.02))` : 'rgba(255,255,255,0.025)',
                  border: highlight ? `1px solid rgba(${config.primaryRgb}, 0.3)` : '1px solid rgba(255,255,255,0.07)',
                }}>
                  <div className="zx-mono" style={{ color: highlight ? config.primary : 'rgba(255,255,255,0.45)', fontSize: 9.5, marginBottom: 10 }}>{s.label}</div>
                  <div style={{ font: '600 22px var(--zx-font-display)', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 4 }}>{s.value}</div>
                  <div style={{ font: '400 12px var(--zx-font-body)', color: 'rgba(255,255,255,0.5)' }}>{s.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .cfg-two { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function FactRow({ icon, label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderRadius: 12, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
      <span style={{ color: 'var(--cfg-primary)', flexShrink: 0 }}><Icon name={icon} size={18} /></span>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1, gap: 12 }}>
        <span className="zx-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</span>
        <span style={{ font: '600 14px var(--zx-font-body)', color: '#fff', textAlign: 'right' }}>{value}</span>
      </div>
    </div>
  );
}

// ============== TARGETS / BUILT FOR ==============
function ConfigTargets({ config }) {
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <div className="zx-mono" style={{ color: config.primary, marginBottom: 12 }}>BUILT FOR</div>
          <h2 className="zx-h1">Anyone with waste and a <span style={{ background: config.gradientText, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{config.outputLabel.toLowerCase()}</span> bill.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {config.targets.map((t, i) => (
            <div key={t.t} className="zx-card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, rgba(${config.primaryRgb}, 0.2), rgba(${config.primaryRgb}, 0.06))`, border: `1px solid rgba(${config.primaryRgb}, 0.25)`, color: config.primary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={t.icon} size={20} />
                </div>
                <span className="zx-mono" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>0{i + 1}</span>
              </div>
              <h3 className="zx-h3" style={{ fontSize: 17 }}>{t.t}</h3>
              <p className="zx-body" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13.5 }}>{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============== BENEFITS ==============
function ConfigBenefits({ config }) {
  const benefits = window.ZX_CONFIG_SHARED.benefits;
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)', gap: 56, alignItems: 'start' }} className="cfg-two">
          <div style={{ position: 'sticky', top: 100 }}>
            <div className="zx-mono" style={{ color: config.primary, marginBottom: 12 }}>ADDED BENEFITS</div>
            <h2 className="zx-h1">More than {config.outputLabel.toLowerCase()}.</h2>
            <p className="zx-lede" style={{ marginTop: 20 }}>
              Every {config.code} deployment stacks four revenue streams on top of the primary output — making the economics work even without subsidies.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }} className="cfg-benefits-grid">
            {benefits.map((b, i) => (
              <div key={b.t} className="zx-card" style={{ minHeight: 180 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, rgba(${config.primaryRgb}, 0.22), rgba(${config.primaryRgb}, 0.06))`, border: `1px solid rgba(${config.primaryRgb}, 0.25)`, color: config.primary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon name={b.icon} size={20} />
                </div>
                <h3 className="zx-h3" style={{ fontSize: 16, marginBottom: 8 }}>{b.t}</h3>
                <p className="zx-body" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) { .cfg-two { grid-template-columns: 1fr !important; } }
        @media (max-width: 540px) { .cfg-benefits-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ============== FUNDING BANNER ==============
function ConfigFunding({ config }) {
  const s = window.ZX_CONFIG_SHARED;
  return (
    <section className="zx-section--tight" style={{ paddingTop: 64, paddingBottom: 64, position: 'relative' }}>
      <div className="zx-wrap">
        <div style={{
          padding: 'clamp(32px, 5vw, 56px)',
          borderRadius: 28,
          background: `linear-gradient(135deg, rgba(${config.primaryRgb}, 0.12), rgba(255,204,50,0.04))`,
          border: `1px solid rgba(${config.primaryRgb}, 0.3)`,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: 500, height: 500, background: `radial-gradient(circle, rgba(${config.primaryRgb}, 0.30), transparent 60%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)', gap: 40, alignItems: 'center', position: 'relative' }} className="cfg-two">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'rgba(255,204,50,0.12)', border: '1px solid rgba(255,204,50,0.35)', marginBottom: 16 }}>
                <Icon name="award" size={14} color="#ffcc32" />
                <span style={{ font: '600 10.5px var(--zx-font-body)', color: 'var(--zx-yellow)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Funding available · Pilot projects</span>
              </div>
              <h2 className="zx-h1" style={{ fontSize: 'clamp(28px, 3.2vw, 44px)', marginBottom: 16 }}>{s.fundingHead}</h2>
              <p className="zx-lede" style={{ color: 'rgba(255,255,255,0.7)' }}>{s.fundingBody}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={`mailto:ceo@zero-x.co?subject=Pilot funding inquiry · ZERO-X-${config.name}`} className="zx-btn zx-btn--lg" style={{ background: config.gradient, color: '#02191d', justifyContent: 'center', textDecoration: 'none' }}>
                Apply for pilot funding →
              </a>
              <a href="tel:+493419288129" className="zx-btn zx-btn--lg zx-btn--ghost" style={{ justifyContent: 'center', textDecoration: 'none' }}>
                <Icon name="phone" size={14} /> +49 341 92881290
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .cfg-two { grid-template-columns: 1fr !important; gap: 24px !important; } }`}</style>
    </section>
  );
}

// ============== CROSS-SELL (sibling configs) ==============
function ConfigSiblings({ config }) {
  const others = Object.values(window.ZX_CONFIGS).filter(c => c.id !== config.id);
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <div style={{ marginBottom: 48, maxWidth: 720 }}>
          <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>ALSO IN THE X-150 FAMILY</div>
          <h2 className="zx-h1">Different output. <span style={{ color: 'rgba(255,255,255,0.4)' }}>Same container.</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
          {others.map(o => (
            <a key={o.id} href={`${o.id}.html`} style={{ textDecoration: 'none', display: 'block' }}>
              <div className="zx-card" style={{
                padding: 32,
                border: `1px solid rgba(${o.primaryRgb}, 0.18)`,
                background: `linear-gradient(135deg, rgba(${o.primaryRgb}, 0.04), rgba(255,255,255,0.01))`,
                transition: 'all 300ms var(--zx-ease)',
                cursor: 'pointer',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `rgba(${o.primaryRgb}, 0.45)`;
                  e.currentTarget.style.background = `linear-gradient(135deg, rgba(${o.primaryRgb}, 0.10), rgba(255,255,255,0.02))`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `rgba(${o.primaryRgb}, 0.18)`;
                  e.currentTarget.style.background = `linear-gradient(135deg, rgba(${o.primaryRgb}, 0.04), rgba(255,255,255,0.01))`;
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: o.gradient, color: '#02191d', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={o.icon} size={24} />
                  </div>
                  <Icon name="arrowUpRight" size={20} color={o.primary} />
                </div>
                <div style={{ font: '600 11px var(--zx-font-mono)', color: o.primary, letterSpacing: '0.15em', marginBottom: 6 }}>{o.code}</div>
                <h3 style={{ font: '700 28px/1 var(--zx-font-body)', color: '#fff', letterSpacing: '-0.02em', margin: '0 0 10px', background: o.gradientText, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{o.tagline}</h3>
                <p style={{ font: '400 14.5px/1.55 var(--zx-font-body)', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                  {o.oneline}
                </p>
                <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 24 }}>
                  {o.kpis.slice(0, 2).map(([v, u, l]) => (
                    <div key={l}>
                      <div style={{ font: '600 22px var(--zx-font-display)', color: '#fff', lineHeight: 1 }}>{v}<span style={{ fontSize: '0.7em', color: o.primary, marginLeft: 2 }}>{u}</span></div>
                      <div className="zx-kpi-label" style={{ marginTop: 4, fontSize: 9.5 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ConfigPage, ConfigHero, ConfigProblem, ConfigProcess, ConfigSpecs, ConfigTargets, ConfigBenefits, ConfigFunding, ConfigSiblings });
