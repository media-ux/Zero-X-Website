// sections.jsx — partner strip, technology/X-150, process, applications, COMETHA, locations

// ---------------- PARTNER MARQUEE ----------------
function PartnerStrip() {
  const partners = [
    'TU Zittau/Görlitz',
    'Syctom · SIAAP',
    'Federal Ministry — BMWK',
    'EU Horizon · COMETHA',
    'MFC Multi Fuel Conversion',
    'Equation Labs SL',
    'Zero Carbon Inc.',
  ];
  const all = [...partners, ...partners];
  return (
    <section className="zx-section--tight" style={{ paddingTop: 56, paddingBottom: 56, borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative' }}>
      <div className="zx-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>Validated by · Funded by · Engineered with</div>
        <div className="zx-marquee" style={{ width: '100%' }}>
          <div className="zx-marquee-track">
            {all.map((p, i) => (
              <span key={i} style={{ font: '600 18px var(--zx-font-body)', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.01em', flexShrink: 0 }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- TECHNOLOGY / X-150 ----------------
function Technology() {
  return (
    <section id="technology" className="zx-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(30,190,200,0.18), transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 56 }}>
          {/* Header */}
          <div style={{ maxWidth: 760 }}>
            <Eyebrow>X-150 Technology</Eyebrow>
            <h2 className="zx-h1">
              One container. <GradText>Six outputs.</GradText> Tailored to every site.
            </h2>
            <p className="zx-lede" style={{ marginTop: 24 }}>
              A single-stage downdraft gasifier with integrated tar reformer, optimized for high-ash multifuel operations. Configure for combined heat & power, cooling, hydrogen, or biochar — capacity scales modularly with parallel units.
            </p>
          </div>

          {/* Visual + spec grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: 40, alignItems: 'center' }} className="zx-tech-grid">
            <TechVisual />
            <div className="zx-stack" style={{ gap: 14 }}>
              <SpecRow label="System type" value="Downdraft gasifier · integrated tar reformer" />
              <SpecRow label="Form factor" value="20-ft ISO container · plug & play" />
              <SpecRow label="Fuels accepted" value="Wood · sewage sludge · MSW · ag residue" />
              <SpecRow label="Thermal output" value="~650 kW per unit" highlight />
              <SpecRow label="Electrical output" value="100 kWe (CHP configuration)" />
              <SpecRow label="Process modes" value="Air or oxy-steam gasification" />
              <SpecRow label="Reformer temp" value="950 °C catalytic tar cracking" />
              <SpecRow label="Validated runtime" value="2,500+ continuous hours" highlight />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .zx-tech-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function TechVisual() {
  return (
    <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.08)', aspectRatio: '4 / 5' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 70%, rgba(30,190,200,0.18), transparent 60%)' }} />
      <img src="assets/x150-side-cutout-1.png" alt="X-150 cut-away" style={{
        position: 'absolute', inset: '5% 0 0 0',
        width: '100%', height: '95%',
        objectFit: 'contain', mixBlendMode: 'screen',
      }} />

      {/* Overlay schematic dots */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 400 500" preserveAspectRatio="none">
        <defs>
          <linearGradient id="dotline" x1="0" x2="1">
            <stop offset="0" stopColor="#1ebec8" stopOpacity="0" />
            <stop offset="1" stopColor="#1ebec8" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <line x1="100" y1="100" x2="200" y2="120" stroke="url(#dotline)" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="100" y1="280" x2="180" y2="260" stroke="url(#dotline)" strokeWidth="1" strokeDasharray="2 4" />
      </svg>

      {/* Caption */}
      <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20 }}>
        <div>
          <div className="zx-mono" style={{ color: 'rgba(30,190,200,0.7)', fontSize: 10 }}>FIG. 01</div>
          <div style={{ font: '700 14px var(--zx-font-body)', color: '#fff', marginTop: 4 }}>X-150 Cut-away view</div>
        </div>
        <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, textAlign: 'right' }}>
          MFC Multi Fuel<br />Conversion GmbH
        </div>
      </div>
    </div>
  );
}

function SpecRow({ label, value, highlight }) {
  return (
    <div style={{
      padding: '14px 18px',
      borderRadius: 12,
      background: highlight ? 'linear-gradient(110deg, rgba(30,190,200,0.06), rgba(255,204,50,0.03))' : 'rgba(255,255,255,0.02)',
      border: `1px solid ${highlight ? 'rgba(30,190,200,0.25)' : 'rgba(255,255,255,0.06)'}`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
    }}>
      <span className="zx-mono" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</span>
      <span style={{ font: '600 14px var(--zx-font-body)', color: '#fff', textAlign: 'right' }}>{value}</span>
    </div>
  );
}

// ---------------- PROCESS / HOW IT WORKS ----------------
function Process() {
  const steps = [
    { n: '01', t: 'Feedstock', d: 'Unrecyclable waste, biomass, sewage sludge or agricultural residue enters the dryer.', icon: 'recycle' },
    { n: '02', t: 'Gasification', d: 'Downdraft single-stage reactor converts solid fuel to producer gas at 900–1000 °C.', icon: 'flame' },
    { n: '03', t: 'Tar reformer', d: 'Integrated catalytic reformer cracks tars at 950 °C — yielding a clean syngas.', icon: 'activity' },
    { n: '04', t: 'Energy output', d: 'Syngas drives CHP, cooling, hydrogen separation, or methanation. Biochar remains.', icon: 'bolt' },
  ];
  return (
    <section className="zx-section" style={{ position: 'relative' }}>
      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 64px' }}>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="zx-h1">From <GradText>waste stream</GradText> to <GradText variant="yellow">clean energy</GradText>, in four stages.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, position: 'relative' }}>
          {/* Animated flow line */}
          <div style={{ position: 'absolute', top: 36, left: '10%', right: '10%', height: 1, background: 'linear-gradient(to right, transparent, rgba(30,190,200,0.4), rgba(255,204,50,0.4), transparent)', zIndex: 0 }} className="zx-process-line" />

          {steps.map((s, i) => (
            <div key={s.n} className="zx-card zx-card--gradient-edge" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <span style={{ font: '600 13px var(--zx-font-mono)', color: 'rgba(30,190,200,0.6)', letterSpacing: '0.1em' }}>STEP / {s.n}</span>
                <IconTile name={s.icon} />
              </div>
              <h3 className="zx-h2" style={{ fontSize: 22, marginBottom: 10 }}>{s.t}</h3>
              <p className="zx-body" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) { .zx-process-line { display: none; } }
      `}</style>
    </section>
  );
}

// ---------------- APPLICATIONS ----------------
function Applications() {
  const apps = [
    { code: 'COOLSTACK', t: 'Data centers', d: 'Cooling + power from waste heat. Convert site biomass into year-round chilled water for hyperscale.', icon: 'server', img: 'assets/industrial-scene.png' },
    { code: 'MINEBASE', t: 'Mining operations', d: 'Diesel replacement for off-grid African operations. Multifuel — wood, husk, ag residue.', icon: 'pickaxe', img: null },
    { code: 'DIGEST+', t: 'Biogas plants', d: 'Process sludge byproducts from anaerobic digesters into supplementary thermal output.', icon: 'droplet', img: null },
    { code: 'BIOVOLT', t: 'Village-scale CHP', d: 'Containerized power for remote villages. Heat, light, refrigeration from local waste.', icon: 'leaf', img: 'assets/biovolt.png' },
    { code: 'BREWPOWER', t: 'Food & beverage', d: 'Brewery spent grain, rendering, food processing waste — turned into on-site energy.', icon: 'coffee', img: null },
    { code: 'BIOCOOLS', t: 'Cold chain', d: 'Off-grid refrigeration for fisheries, dairy, vaccine cold-chain. Powered by local waste.', icon: 'box', img: 'assets/biocools.png' },
  ];
  return (
    <section id="applications" className="zx-section" style={{ position: 'relative', background: 'linear-gradient(180deg, transparent, rgba(10,24,32,0.5), transparent)' }}>
      <div className="zx-wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow color="yellow">Applications</Eyebrow>
            <h2 className="zx-h1">Modular, tailored to <GradText variant="yellow">every site.</GradText></h2>
          </div>
          <p className="zx-lede" style={{ maxWidth: 420 }}>
            Same core technology — six application lines, configured per use case. Capacity scales with parallel units.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {apps.map(a => (
            <div key={a.code} className="zx-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                aspectRatio: '16 / 10', position: 'relative', overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(30,190,200,0.12), rgba(255,204,50,0.06))',
              }}>
                {a.img ? (
                  <img src={a.img} alt={a.t} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
                ) : (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconTile name={a.icon} size="lg" />
                  </div>
                )}
                <div style={{ position: 'absolute', top: 16, left: 16 }}>
                  <span style={{
                    font: '700 10.5px var(--zx-font-body)', letterSpacing: '0.2em',
                    background: 'rgba(1,14,16,0.7)', backdropFilter: 'blur(8px)',
                    color: 'rgba(30,190,200,1)', padding: '6px 10px', borderRadius: 6,
                    border: '1px solid rgba(30,190,200,0.3)',
                  }}>{a.code}</span>
                </div>
              </div>
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 className="zx-h3">{a.t}</h3>
                <p className="zx-body" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>{a.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.PartnerStrip = PartnerStrip;
window.Technology = Technology;
window.Process = Process;
window.Applications = Applications;
