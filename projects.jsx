// projects.jsx — Active Projects section. Replaces the prior Cometha section.
// Two projects: COMETHA Paris (live, primary) + Waste-to-Fuel-Cell SOFC (2026 delivery).

function ActiveProjects() {
  return (
    <section id="projects" className="zx-section" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: '0%', right: '-15%', width: 700, height: 700, background: 'radial-gradient(circle, rgba(30,190,200,0.16), transparent 70%)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '0%', left: '-15%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,204,50,0.12), transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 56, alignItems: 'end', marginBottom: 56 }} className="zx-prj-head">
          <div>
            <Eyebrow>Active Projects</Eyebrow>
            <h2 className="zx-h1">
              Two projects defining<br />
              <GradText>our trajectory.</GradText>
            </h2>
          </div>
          <div>
            <p className="zx-lede">
              The first is the largest live deployment of the X-150 platform anywhere in the world. The second is what comes after — solid-oxide fuel cells running directly on mixed waste syngas. Delivery 2026.
            </p>
          </div>
        </div>

        {/* COMETHA — primary feature */}
        <CometaCard />

        {/* Funding strip — partial funding for MFC */}
        <FundingStrip />

        {/* SOFC 2026 — secondary feature */}
        <div style={{ marginTop: 24 }}>
          <SOFCCard />
        </div>
      </div>

      <style>{`@media (max-width: 920px) { .zx-prj-head { grid-template-columns: 1fr !important; gap: 24px !important; } }`}</style>
    </section>
  );
}

// ====================== COMETHA (live, big feature) ======================
function CometaCard() {
  return (
    <div style={{
      position: 'relative',
      borderRadius: 28,
      overflow: 'hidden',
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,204,50,0.20)',
      boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), 0 0 80px -40px rgba(255,204,50,0.25)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)', alignItems: 'stretch' }} className="zx-prj-grid">
        {/* Image side */}
        <div style={{ position: 'relative', minHeight: 480, overflow: 'hidden' }} className="zx-prj-img">
          <img src="assets/cometha-render.png" alt="Project COMETHA · X-150 system" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(1,14,16,0.30) 0%, rgba(1,14,16,0.20) 50%, rgba(1,14,16,0.90) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(1,14,16,0.6) 100%)' }} />

          {/* LIVE chip */}
          <div style={{ position: 'absolute', top: 24, left: 24 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderRadius: 999, background: 'rgba(1,14,16,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(30,190,200,0.4)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: '#1ebec8', boxShadow: '0 0 12px #1ebec8', animation: 'zx-pulse 2.4s ease-in-out infinite' }} />
              <span style={{ font: '700 11px var(--zx-font-body)', color: 'var(--zx-teal)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Live · Operating</span>
            </span>
          </div>

          {/* EU-funded chip */}
          <div style={{ position: 'absolute', top: 24, right: 24 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderRadius: 999, background: 'rgba(1,14,16,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,204,50,0.4)' }}>
              <Icon name="award" size={14} color="#ffcc32" />
              <span style={{ font: '600 11px var(--zx-font-body)', color: 'var(--zx-yellow)', letterSpacing: '0.10em' }}>EU-funded · Horizon</span>
            </span>
          </div>

          {/* Overlay site title */}
          <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
            <div className="zx-mono" style={{ color: 'var(--zx-teal)', marginBottom: 8, fontSize: 11 }}>PROJECT · PARIS, FR · SYCTOM · SIAAP</div>
            <h3 style={{ font: '700 clamp(36px, 5vw, 64px)/0.95 var(--zx-font-body)', color: '#fff', letterSpacing: '-0.03em', margin: 0 }}>
              <span style={{ background: 'linear-gradient(110deg, #fff 0%, #6fe8d6 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>COMETHA</span>
            </h3>
          </div>
        </div>

        {/* Content side */}
        <div style={{ padding: 'clamp(32px, 4vw, 56px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32, background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(30,190,200,0.02))' }}>
          <div>
            <div className="zx-mono" style={{ color: 'rgba(255,204,50,1)', marginBottom: 12, fontSize: 10.5 }}>PROJECT 01 · FLAGSHIP DEPLOYMENT</div>
            <h4 className="zx-h2" style={{ fontSize: 26, marginBottom: 16, lineHeight: 1.2 }}>
              Waste-to-methane chain at <GradText>industrial scale</GradText>
            </h4>
            <p className="zx-body" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 22 }}>
              The largest live deployment of the X-150 platform — converting real municipal solid waste and biomass feedstocks into methane. End-to-end chain: gasifier → Water-Gas Shift Reactor → Biological Methanisation Unit. Independently validated under the EU Horizon COMETHA Phase 2 framework.
            </p>

            {/* KPI row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 22 }}>
              <ProjStat v="2,500" u="+ hrs" l="Continuous runtime" />
              <ProjStat v="86" u="%" l="Cold-gas efficiency" hi />
              <ProjStat v="3" u="streams" l="Validated feedstocks" />
              <ProjStat v="Phase 2" u="" l="COMETHA framework" hi />
            </div>

            {/* Partners */}
            <div>
              <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 10, fontSize: 10 }}>PROJECT PARTNERS</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Fraunhofer IKTS', 'TU Zittau / Görlitz', 'Syctom', 'SIAAP', 'EU Horizon', 'BMWK'].map(p => (
                  <span key={p} style={{
                    padding: '5px 10px', borderRadius: 999,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    font: '500 11.5px var(--zx-font-body)', color: 'rgba(255,255,255,0.75)',
                  }}>{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Chain mini diagram */}
          <ChainDiagram
            stages={[
              { label: 'MSW + biomass', accent: 'mute' },
              { label: 'X-150 gasifier', accent: 'teal' },
              { label: 'WGS reactor', accent: 'teal' },
              { label: 'Bio-methanisation', accent: 'yellow' },
              { label: 'CH₄', accent: 'yellow', leaf: true },
            ]}
          />

          {/* Bottom NPV + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div>
              <div className="zx-mono" style={{ color: 'rgba(255,204,50,1)', fontSize: 9.5, marginBottom: 4 }}>10-YEAR NPV</div>
              <div style={{ font: '600 36px var(--zx-font-display)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
                €56<span style={{ color: 'var(--zx-yellow)', fontSize: '0.6em', marginLeft: 4 }}>M</span>
                <span style={{ font: '500 13px var(--zx-font-body)', color: 'rgba(255,255,255,0.5)', marginLeft: 12 }}>· 7-month payback</span>
              </div>
            </div>
            <a href="mailto:ceo@zero-x.co?subject=Request COMETHA case study" className="zx-btn zx-btn--primary zx-btn--sm" style={{ textDecoration: 'none' }}>
              Request case study
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .zx-prj-grid { grid-template-columns: 1fr !important; }
          .zx-prj-img { min-height: 380px !important; }
        }
      `}</style>
    </div>
  );
}

function ProjStat({ v, u, l, hi }) {
  return (
    <div style={{
      padding: '14px 16px',
      borderRadius: 12,
      background: hi ? 'linear-gradient(135deg, rgba(30,190,200,0.10), rgba(255,204,50,0.04))' : 'rgba(255,255,255,0.025)',
      border: hi ? '1px solid rgba(30,190,200,0.30)' : '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
        <span style={{ font: '600 26px var(--zx-font-display)', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>{v}</span>
        {u && <span style={{ font: '500 12px var(--zx-font-display)', color: hi ? 'var(--zx-teal)' : 'rgba(30,190,200,0.85)' }}>{u}</span>}
      </div>
      <div className="zx-kpi-label" style={{ marginTop: 6, fontSize: 9.5 }}>{l}</div>
    </div>
  );
}

// ====================== SOFC 2026 (upcoming feature) ======================
function SOFCCard() {
  return (
    <div style={{
      position: 'relative',
      borderRadius: 28,
      overflow: 'hidden',
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,204,50,0.25)',
      boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), 0 0 80px -40px rgba(255,204,50,0.25)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)', alignItems: 'stretch' }} className="zx-prj-grid">
        {/* Schematic / visual side */}
        <div style={{ position: 'relative', minHeight: 440, overflow: 'hidden', padding: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(ellipse at center, rgba(255,204,50,0.08), rgba(1,14,16,0.4))' }} className="zx-prj-img">
            {/* Decorative glow grid */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)',
              opacity: 0.7,
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'absolute', top: 24, left: 24 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderRadius: 999, background: 'rgba(1,14,16,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,204,50,0.4)' }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: '#ffcc32', boxShadow: '0 0 12px #ffcc32', animation: 'zx-pulse 2.4s ease-in-out infinite' }} />
                <span style={{ font: '700 11px var(--zx-font-body)', color: '#ffcc32', letterSpacing: '0.18em', textTransform: 'uppercase' }}>In development · 2026</span>
              </span>
            </div>

            {/* SOFC schematic SVG */}
            <SOFCSchematic />

            {/* Footer caption */}
            <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div className="zx-mono" style={{ color: 'rgba(255,204,50,0.85)', fontSize: 10 }}>FIG · 02</div>
                <div style={{ font: '700 13px var(--zx-font-body)', color: '#fff', marginTop: 4 }}>Mixed-syngas SOFC chain</div>
              </div>
              <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, textAlign: 'right' }}>
                Target delivery<br />Q? · 2026
              </div>
            </div>
        </div>

        {/* Content side */}
        <div style={{ padding: 'clamp(32px, 4vw, 56px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28, background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,204,50,0.02))' }}>
          <div>
            <div className="zx-mono" style={{ color: '#ffcc32', marginBottom: 12, fontSize: 10.5 }}>PROJECT 02 · NEXT-GEN POWER</div>
            <h4 className="zx-h2" style={{ fontSize: 26, marginBottom: 16, lineHeight: 1.2 }}>
              Waste-to-Fuel-Cell on{' '}
              <span style={{ background: 'linear-gradient(110deg, #ffe599 0%, #ffcc32 50%, #1ebec8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                mixed syngas
              </span>
            </h4>
            <p className="zx-body" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 22 }}>
              Running a Solid-Oxide Fuel Cell directly on mixed syngas from waste gasification — bypassing combustion entirely. Targeted electrical efficiency above 60%, with the SyngaPure tar reformer protecting the stack from contamination. First commercial integration scheduled for 2026.
            </p>

            {/* Claim grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 22 }}>
              <SofcStat v=">60" u="%" l="Target electrical efficiency" />
              <SofcStat v="2026" u="" l="First commercial delivery" hi />
              <SofcStat v="<8" u="ppm" l="Tar at stack inlet" />
              <SofcStat v="850" u="°C" l="SyngaPure reformer temp" />
            </div>

            {/* Why it matters */}
            <div style={{ padding: 16, borderRadius: 12, background: 'linear-gradient(135deg, rgba(255,204,50,0.08), transparent)', border: '1px solid rgba(255,204,50,0.22)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ color: '#ffcc32', flexShrink: 0, marginTop: 2 }}><Icon name="sparkles" size={16} /></span>
              <div style={{ font: '400 13px/1.55 var(--zx-font-body)', color: 'rgba(255,255,255,0.75)' }}>
                Why it matters: SOFC efficiency on syngas is 60–80%, vs. ~30% for combustion engines. This pathway turns a kilo of waste into roughly twice the useful electricity.
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <a href="research.html" className="zx-btn zx-btn--lg" style={{ background: 'linear-gradient(110deg, #ffcc32, #ffd86b)', color: '#02191d', boxShadow: '0 8px 24px -8px rgba(255,204,50,0.6)', textDecoration: 'none' }}>
              Join research consortium →
            </a>
            <a href="mailto:ceo@zero-x.co?subject=SOFC 2026 — Notify me" className="zx-btn zx-btn--lg zx-btn--ghost" style={{ textDecoration: 'none' }}>
              <Icon name="mail" size={14} /> Notify me at delivery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SofcStat({ v, u, l, hi }) {
  return (
    <div style={{
      padding: '14px 16px',
      borderRadius: 12,
      background: hi ? 'linear-gradient(135deg, rgba(255,204,50,0.14), rgba(255,204,50,0.04))' : 'rgba(255,255,255,0.025)',
      border: hi ? '1px solid rgba(255,204,50,0.35)' : '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
        <span style={{ font: '600 26px var(--zx-font-display)', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>{v}</span>
        {u && <span style={{ font: '500 12px var(--zx-font-display)', color: hi ? '#ffd86b' : 'rgba(255,204,50,0.85)' }}>{u}</span>}
      </div>
      <div className="zx-kpi-label" style={{ marginTop: 6, fontSize: 9.5 }}>{l}</div>
    </div>
  );
}

// =================== SHARED: chain diagram (5-stage process chip strip) ===================
function ChainDiagram({ stages }) {
  const colorFor = (a) => a === 'teal' ? 'var(--zx-teal)' : a === 'yellow' ? 'var(--zx-yellow)' : 'rgba(255,255,255,0.5)';
  const bgFor = (a) => a === 'teal' ? 'rgba(30,190,200,0.10)' : a === 'yellow' ? 'rgba(255,204,50,0.10)' : 'rgba(255,255,255,0.04)';
  const borderFor = (a) => a === 'teal' ? 'rgba(30,190,200,0.30)' : a === 'yellow' ? 'rgba(255,204,50,0.30)' : 'rgba(255,255,255,0.10)';
  return (
    <div style={{
      padding: '14px 16px',
      borderRadius: 14,
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.06)',
      overflowX: 'auto',
    }}>
      <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: 10, fontSize: 9.5 }}>PROCESS CHAIN</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'nowrap' }}>
        {stages.map((s, i) => (
          <React.Fragment key={i}>
            <span style={{
              padding: '7px 12px',
              borderRadius: 8,
              background: bgFor(s.accent),
              border: '1px solid ' + borderFor(s.accent),
              color: colorFor(s.accent),
              font: '600 11.5px var(--zx-font-body)',
              whiteSpace: 'nowrap',
              fontWeight: s.leaf ? 700 : 600,
            }}>{s.label}</span>
            {i < stages.length - 1 && (
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>→</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// =================== SOFC schematic — custom SVG ===================
function SOFCSchematic() {
  return (
    <svg viewBox="0 0 360 280" width="100%" style={{ maxWidth: 420, position: 'relative', zIndex: 1 }}>
      <defs>
        <linearGradient id="sofcWire" x1="0" x2="1">
          <stop offset="0" stopColor="#1ebec8" stopOpacity="0.8" />
          <stop offset="1" stopColor="#ffcc32" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="sofcWire2" x1="0" x2="1">
          <stop offset="0" stopColor="#ffcc32" stopOpacity="0.8" />
          <stop offset="1" stopColor="#ffd86b" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="sofcGlow">
          <stop offset="0" stopColor="#ffcc32" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ffcc32" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow behind SOFC stack */}
      <circle cx="270" cy="140" r="110" fill="url(#sofcGlow)" />

      {/* X-150 box (input) */}
      <g transform="translate(20, 100)">
        <rect width="80" height="80" rx="12" fill="rgba(30,190,200,0.10)" stroke="rgba(30,190,200,0.4)" strokeWidth="1.2" />
        <text x="40" y="40" textAnchor="middle" fill="#1ebec8" fontFamily="var(--zx-font-mono)" fontSize="9" fontWeight="700" letterSpacing="0.1em">X-150</text>
        <text x="40" y="56" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="var(--zx-font-body)" fontSize="9">Gasifier</text>
      </g>

      {/* Gas flow arrow 1 → tar reformer */}
      <line x1="100" y1="140" x2="148" y2="140" stroke="url(#sofcWire)" strokeWidth="2" strokeDasharray="3 3">
        <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1.4s" repeatCount="indefinite" />
      </line>
      <text x="124" y="132" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontFamily="var(--zx-font-mono)" fontSize="8">syngas</text>

      {/* Tar reformer */}
      <g transform="translate(148, 110)">
        <rect width="62" height="60" rx="10" fill="rgba(30,190,200,0.10)" stroke="rgba(30,190,200,0.4)" strokeWidth="1.2" />
        <text x="31" y="28" textAnchor="middle" fill="#1ebec8" fontFamily="var(--zx-font-mono)" fontSize="8" fontWeight="700" letterSpacing="0.08em">CATATOR</text>
        <text x="31" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="var(--zx-font-body)" fontSize="8">Reformer</text>
        <text x="31" y="54" textAnchor="middle" fill="rgba(30,190,200,0.85)" fontFamily="var(--zx-font-mono)" fontSize="7.5">850°C</text>
      </g>

      {/* Clean syngas arrow → SOFC */}
      <line x1="210" y1="140" x2="240" y2="140" stroke="url(#sofcWire)" strokeWidth="2" strokeDasharray="3 3">
        <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1.4s" repeatCount="indefinite" />
      </line>
      <text x="225" y="132" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontFamily="var(--zx-font-mono)" fontSize="7.5">clean H₂/CO</text>

      {/* SOFC stack (animated layers) */}
      <g transform="translate(240, 80)">
        <rect width="60" height="120" rx="6" fill="rgba(255,204,50,0.06)" stroke="rgba(255,204,50,0.5)" strokeWidth="1.2" />
        {[0, 1, 2, 3, 4].map(i => (
          <rect key={i} x="6" y={12 + i * 20} width="48" height="14" rx="2" fill="rgba(255,204,50,0.16)" stroke="rgba(255,204,50,0.4)" strokeWidth="0.8">
            <animate attributeName="fill" values="rgba(255,204,50,0.16);rgba(255,204,50,0.40);rgba(255,204,50,0.16)" dur="2.2s" begin={`${i * 0.18}s`} repeatCount="indefinite" />
          </rect>
        ))}
        <text x="30" y="-6" textAnchor="middle" fill="#ffcc32" fontFamily="var(--zx-font-mono)" fontSize="9" fontWeight="700" letterSpacing="0.1em">SOFC</text>
        <text x="30" y="135" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="var(--zx-font-body)" fontSize="9">Stack</text>
      </g>

      {/* Electricity output (yellow bolt) */}
      <line x1="300" y1="140" x2="332" y2="140" stroke="url(#sofcWire2)" strokeWidth="2" strokeDasharray="3 3">
        <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1.2s" repeatCount="indefinite" />
      </line>
      <g transform="translate(332, 128)">
        <circle r="14" cx="0" cy="12" fill="rgba(255,204,50,0.16)" stroke="rgba(255,204,50,0.55)" strokeWidth="1.2" />
        <text x="0" y="17" textAnchor="middle" fill="#ffcc32" fontFamily="var(--zx-font-body)" fontSize="14" fontWeight="700">⚡</text>
      </g>
      <text x="332" y="160" textAnchor="middle" fill="rgba(255,204,50,0.85)" fontFamily="var(--zx-font-mono)" fontSize="8" fontWeight="700">{'>'}60%</text>

      {/* Bottom-left: waste input arrow */}
      <line x1="-2" y1="140" x2="20" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="3 3" />
      <text x="9" y="132" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontFamily="var(--zx-font-mono)" fontSize="7.5">waste</text>
    </svg>
  );
}

window.ActiveProjects = ActiveProjects;

// ====================== FUNDING STRIP ======================
// Partial funding provided for MFC. Logos are kept in original colors on a
// light panel so brand/legal marks (BMWK eagle, EU flag, etc.) read correctly.
function FundingStrip() {
  const logos = [
    { src: 'assets/funding/bmwk.png',       alt: 'Bundesministerium für Wirtschaft und Klimaschutz' },
    { src: 'assets/funding/ptj.png',        alt: 'Projektträger Jülich · Forschungszentrum Jülich' },
    { src: 'assets/funding/bsfz.png',       alt: 'BSFZ — Bescheinigungsstelle Forschungszulage' },
    { src: 'assets/funding/sab.png',        alt: 'SAB — Sächsische Aufbaubank' },
    { src: 'assets/funding/eu-sachsen.png', alt: 'Co-funded by EU · Freistaat Sachsen', wide: true },
  ];
  return (
    <div style={{ marginTop: 24, position: 'relative' }}>
      <div style={{
        position: 'relative',
        padding: 'clamp(24px, 3vw, 36px)',
        borderRadius: 20,
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <span style={{ color: 'var(--zx-yellow)' }}><Icon name="award" size={16} /></span>
          <div className="zx-mono" style={{ color: 'rgba(255,204,50,1)', fontSize: 10.5 }}>
            PARTIAL FUNDING PROVIDED FOR MFC BY
          </div>
        </div>

        {/* Logo row — transparent backdrop */}
        <div style={{
          padding: '8px 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 24,
          alignItems: 'center',
          justifyItems: 'center',
        }}>
          {logos.map(l => (
            <div key={l.src} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '100%',
              height: l.wide ? 64 : 80,
              padding: '6px 12px',
            }}>
              <img src={l.src} alt={l.alt} style={{
                maxWidth: '100%', maxHeight: '100%', objectFit: 'contain',
                display: 'block',
              }} />
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 16,
          font: '400 11.5px/1.5 var(--zx-font-body)',
          color: 'rgba(255,255,255,0.45)',
          textAlign: 'center',
          maxWidth: 720, marginLeft: 'auto', marginRight: 'auto',
        }}>
          Gefördert durch das Bundesministerium für Wirtschaft und Klimaschutz aufgrund eines Beschlusses des Deutschen Bundestages — kofinanziert von der Europäischen Union und dem Freistaat Sachsen.
        </div>
      </div>
    </div>
  );
}
