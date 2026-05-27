// fuels-page.jsx — Fuels & Feedstocks page for the X-150 multifuel program.

const ZX_FUELS = {
  pageEyebrow: 'X-150 · Multifuel Program',
  pageTagline: 'Eleven fuels.',
  pageTaglineTail: 'One container.',
  pageOneline: 'The X-150 is engineered for mixed multifuel operation — not a single feedstock. From sewage sludge in Paris to coconut shells in tropical sites, the same modular gasifier handles a spectrum of waste streams most plants cannot.',
  kpis: [
    ['11', '+', 'Fuels tested'],
    ['35', '%', 'Ash content tolerated'],
    ['4', 'streams', 'Validated in COMETHA Paris'],
    ['3,000', '+ hrs', 'Empirical test data'],
  ],

  categories: [
    {
      id: 'agri',
      label: 'Agricultural Residues',
      icon: 'leaf',
      blurb: 'Crop and animal-husbandry byproducts that traditionally go to landfill, open burning, or low-value spreading.',
      fuels: [
        { name: 'Straw',                 desc: 'High-silica, high-alkali crop residue. The hardest agricultural feedstock to gasify cleanly — and the headline result for our research with HSZG.', cometha: false, feature: true },
        { name: 'Horse manure',          desc: 'High-moisture animal-husbandry waste. Common across equestrian Europe — landfill cost meets clean-energy opportunity.', cometha: false },
        { name: 'Coconut shells',        desc: 'Hard, high-carbon tropical residue. Gasification yields exceptionally pure syngas — ideal for emerging-market deployments.', cometha: false },
        { name: 'Empty fruit bunches',   desc: 'Palm-oil milling waste. Tropical, high-fibre, abundant — gasification converts a notoriously methanogenic landfill stream into clean energy.', cometha: false },
      ],
    },
    {
      id: 'wood',
      label: 'Wood & Forestry',
      icon: 'box',
      blurb: 'The canonical biomass class — but the X-150 takes any quality, including contaminated and engineered woods.',
      fuels: [
        { name: 'Wood chips',            desc: 'Forestry residue. The benchmark biomass feedstock — clean, predictable, high-carbon. Used in COMETHA Phase 2 trials.', cometha: true },
        { name: 'Waste wood',            desc: 'Construction & demolition wood including treated and painted material. Banned from many biomass plants — accepted here.', cometha: false },
        { name: 'Fiber boards',          desc: 'Engineered wood waste — MDF, particleboard offcuts. Resin-bonded streams most gasifiers reject.', cometha: false },
      ],
    },
    {
      id: 'municipal',
      label: 'Municipal & Process Sludge',
      icon: 'recycle',
      blurb: 'The waste streams cities and water utilities pay to dispose of — turned into a revenue line.',
      fuels: [
        { name: 'Municipal solid waste (MSW)', desc: 'Mixed, non-recyclable household waste. Validated under COMETHA Phase 2 with Syctom in Paris.', cometha: true },
        { name: 'Sewage sludge',         desc: 'Wastewater treatment residue. Validated in Paris with SIAAP — converting a methanogenic disposal cost into methane revenue.', cometha: true },
        { name: 'Post-biodigester residue', desc: 'Digestate from anaerobic digesters. Closes the loop on biogas plants — the gasifier consumes the byproduct they cannot sell.', cometha: false },
      ],
    },
    {
      id: 'industrial',
      label: 'Industrial Residues',
      icon: 'factory',
      blurb: 'Non-recyclable industrial byproducts that would otherwise pay tipping fees or go to incineration.',
      fuels: [
        { name: 'Mixed plastics',        desc: 'Non-recyclable plastic waste streams. Gasification cracks polymers into syngas — clean fuel, no microplastic residue.', cometha: false },
      ],
    },
  ],

  strawStory: {
    eyebrow: 'Research highlight · Hochschule Zittau/Görlitz',
    head: 'The straw story.',
    headTail: 'Why it matters.',
    body: [
      'Straw is the hardest agricultural fuel to gasify cleanly. It carries high silica and high alkali content — and its ash softens and slags at temperatures far below the gasification zone. Most fixed-bed gasifiers refuse straw outright. Many that accept it end up clogged.',
      'Our active mechanical poker and water-cooled finger grate inside the >1300 °C oxidation zone mechanically eliminate the slag-agglomeration failure mode in real time. The system gasifies straw stably — opening agriculture to decentralised clean energy across cereal-growing regions worldwide.',
      'The technical foundation was laid in collaboration with the Institut für Prozesstechnik (IPM) at Hochschule Zittau/Görlitz, whose team published the Strohvergasung research in 2021.',
    ],
    citation: 'Schneider, R., Grusla, S., Hofmeister, M., Pohl, R., Zschunke, T. — “Strohvergasung”, IPM, HSZG, Zittau, 2021.',
    link: 'https://ipm.hszg.de/en/competences/power-generation-steam-generator-and-fuel-technology/publications',
    linkLabel: 'Read the IPM HSZG publications',
  },
};

// =================== PAGE ROOT ===================
function FuelsPage() {
  const onNav = usePathwayNav();
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--cfg-primary', '#ffcc32');
    r.style.setProperty('--cfg-primary-rgb', '255, 204, 50');
    document.title = 'Zero-X · Fuels — 11 feedstocks. One container.';
  }, []);

  return (
    <>
      <Navbar onNav={onNav} />
      <main>
        <FuelsHero />
        <FuelsMultifuel />
        <FuelsCategories />
        <FuelsStrawStory />
        <FuelsCometha />
        <FuelsOpenCall />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// =================== HERO ===================
function FuelsHero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 140, paddingBottom: 80 }}>
      <div style={{ position: 'absolute', top: '5%', left: '-10%', width: 700, height: 700, background: 'radial-gradient(circle, rgba(255,204,50,0.28), transparent 65%)', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '0%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,204,50,0.16), transparent 65%)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <GridBg />

      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div className="zx-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 999, background: 'rgba(255,204,50,0.10)', border: '1px solid rgba(255,204,50,0.30)', marginBottom: 28 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#ffcc32', boxShadow: '0 0 14px #ffcc32' }} />
          <span style={{ font: '600 11px var(--zx-font-body)', color: '#ffcc32', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{ZX_FUELS.pageEyebrow}</span>
        </div>

        <h1 className="zx-h-display zx-fade-in" style={{ fontSize: 'clamp(48px, 8vw, 120px)', lineHeight: 0.95, letterSpacing: '-0.035em', maxWidth: 1100, marginBottom: 28 }}>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>{ZX_FUELS.pageTagline}</span>{' '}
          <span style={{ background: 'linear-gradient(110deg, #ffe599 0%, #ffcc32 50%, #f4c400 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{ZX_FUELS.pageTaglineTail}</span>
        </h1>

        <p className="zx-lede zx-fade-in" style={{ maxWidth: 760, marginBottom: 36 }}>{ZX_FUELS.pageOneline}</p>

        <div className="zx-fade-in" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="#categories" onClick={(e) => { e.preventDefault(); document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' }); }} className="zx-btn zx-btn--lg zx-btn--primary" style={{ textDecoration: 'none' }}>
            Browse all 11 feedstocks
          </a>
          <a href="#straw-story" onClick={(e) => { e.preventDefault(); document.getElementById('straw-story')?.scrollIntoView({ behavior: 'smooth' }); }} className="zx-btn zx-btn--lg zx-btn--ghost" style={{ textDecoration: 'none' }}>
            <Icon name="award" size={14} /> The straw story
          </a>
        </div>

        <div className="zx-fade-in" style={{ marginTop: 80 }}>
          <PathwayKpis kpis={ZX_FUELS.kpis} accent="#ffcc32" />
        </div>
      </div>
    </section>
  );
}

// =================== MULTIFUEL ADVANTAGE ===================
function FuelsMultifuel() {
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 56, alignItems: 'start' }} className="zx-fuel-two">
          <div>
            <div className="zx-mono" style={{ color: '#ffcc32', marginBottom: 12 }}>WHY MULTIFUEL MATTERS</div>
            <h2 className="zx-h1">
              Single-feedstock plants are <span style={{ color: 'rgba(255,255,255,0.4)' }}>fragile.</span>
            </h2>
            <p className="zx-lede" style={{ marginTop: 20 }}>
              Build a gasifier for wood chips alone, and your plant goes idle the moment forestry supply tightens. The X-150 is engineered for fuel-blend operation: switch streams, mix streams, follow seasonal availability — without retuning, recommissioning, or shutdown.
            </p>
          </div>

          <div style={{ padding: 36, borderRadius: 24, background: 'linear-gradient(135deg, rgba(255,204,50,0.08), transparent)', border: '1px solid rgba(255,204,50,0.25)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '-30%', background: 'radial-gradient(circle, rgba(255,204,50,0.15), transparent 60%)', filter: 'blur(40px)' }} />
            <div style={{ position: 'relative' }}>
              <div className="zx-mono" style={{ color: '#ffcc32', marginBottom: 12 }}>THE X-150 ADVANTAGE</div>
              <h3 className="zx-h1" style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.1, marginBottom: 18 }}>
                Same container.<br />
                <span style={{ background: 'linear-gradient(110deg, #ffe599 0%, #ffcc32 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Any feedstock.</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  ['shield', 'Active poker + water-cooled grate eliminates slag — even on high-ash straw'],
                  ['activity', 'Catalytic CATATOR reformer handles up to 20 ppm H₂S sulfur'],
                  ['sparkles', 'Real-time AI feedstock adjustment via MRU gas analysis'],
                  ['layers', '35% ash content tolerance — the highest in modular gasification'],
                ].map(([icon, label]) => (
                  <li key={label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'rgba(255,255,255,0.85)', font: '500 14px/1.5 var(--zx-font-body)' }}>
                    <span style={{ flexShrink: 0, color: '#ffcc32', marginTop: 2 }}><Icon name={icon} size={16} /></span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .zx-fuel-two { grid-template-columns: 1fr !important; gap: 28px !important; } }`}</style>
    </section>
  );
}

// =================== CATEGORIES ===================
function FuelsCategories() {
  return (
    <section id="categories" className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <PathwaySectionHeader
          eyebrow="01 · ALL TESTED FEEDSTOCKS"
          accent="#ffcc32"
          head="11 streams across "
          headTail="4 categories."
          gradientText="linear-gradient(110deg, #ffe599 0%, #ffcc32 50%, #f4c400 100%)"
          lede="Each feedstock is independently validated in the X-150 platform. Categories shown below; COMETHA-Paris-tested streams marked explicitly."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {ZX_FUELS.categories.map((cat, i) => <CategoryBlock key={cat.id} cat={cat} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function CategoryBlock({ cat, index }) {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.6fr)', gap: 32, alignItems: 'start', marginBottom: 20 }} className="zx-fuel-cat-row">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg, rgba(255,204,50,0.2), rgba(255,204,50,0.06))', border: '1px solid rgba(255,204,50,0.3)', color: '#ffcc32', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={cat.icon} size={22} />
            </div>
            <span style={{ font: '700 11px var(--zx-font-mono)', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.18em' }}>CATEGORY · 0{index + 1}</span>
          </div>
          <h3 className="zx-h2" style={{ fontSize: 28, marginBottom: 10, lineHeight: 1.15 }}>{cat.label}</h3>
          <p className="zx-body" style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>{cat.blurb}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
          {cat.fuels.map(f => <FuelCard key={f.name} fuel={f} />)}
        </div>
      </div>
      {index < ZX_FUELS.categories.length - 1 && <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)' }} />}
      <style>{`@media (max-width: 920px) { .zx-fuel-cat-row { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

function FuelCard({ fuel }) {
  return (
    <div className="zx-card" style={{
      padding: 22,
      background: fuel.feature ? 'linear-gradient(135deg, rgba(255,204,50,0.08), rgba(255,204,50,0.02))' : 'rgba(255,255,255,0.025)',
      border: fuel.feature ? '1px solid rgba(255,204,50,0.30)' : '1px solid rgba(255,255,255,0.07)',
      display: 'flex', flexDirection: 'column', gap: 8,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 2 }}>
        <h4 style={{ font: '700 16px var(--zx-font-body)', color: '#fff', margin: 0, lineHeight: 1.3 }}>{fuel.name}</h4>
        {fuel.cometha && (
          <span style={{
            padding: '3px 8px',
            borderRadius: 999,
            background: 'rgba(30,190,200,0.14)',
            border: '1px solid rgba(30,190,200,0.35)',
            font: '700 9px var(--zx-font-body)',
            color: '#1ebec8',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}>COMETHA Paris</span>
        )}
      </div>
      <p style={{ font: '400 13px/1.55 var(--zx-font-body)', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{fuel.desc}</p>
      {fuel.feature && (
        <a href="#straw-story" onClick={(e) => { e.preventDefault(); document.getElementById('straw-story')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ marginTop: 4, font: '600 12.5px var(--zx-font-body)', color: '#ffcc32', display: 'inline-flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}>
          Read the research story <Icon name="arrow" size={12} />
        </a>
      )}
    </div>
  );
}

// =================== STRAW STORY FEATURE ===================
function FuelsStrawStory() {
  const s = ZX_FUELS.strawStory;
  return (
    <section id="straw-story" className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '-10%', width: 700, height: 700, background: 'radial-gradient(circle, rgba(255,204,50,0.18), transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          padding: 'clamp(32px, 5vw, 72px)',
          borderRadius: 28,
          background: 'linear-gradient(135deg, rgba(255,204,50,0.06), rgba(255,255,255,0.02))',
          border: '1px solid rgba(255,204,50,0.25)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,204,50,0.25), transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: 56, alignItems: 'start', position: 'relative' }} className="zx-fuel-two">
            <div>
              <div className="zx-mono" style={{ color: '#ffcc32', marginBottom: 14 }}>{s.eyebrow}</div>
              <h2 className="zx-h1" style={{ marginBottom: 24 }}>
                {s.head} <span style={{ color: 'rgba(255,255,255,0.45)' }}>{s.headTail}</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
                {s.body.map((p, i) => (
                  <p key={i} style={{ font: '400 15px/1.65 var(--zx-font-body)', color: 'rgba(255,255,255,0.7)', margin: 0, textWrap: 'pretty' }}>{p}</p>
                ))}
              </div>
              <div style={{
                padding: 18,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                marginBottom: 20,
              }}>
                <div className="zx-mono" style={{ color: 'rgba(255,204,50,0.85)', marginBottom: 6, fontSize: 10 }}>CITATION</div>
                <div style={{ font: '500 13px/1.5 var(--zx-font-body)', color: 'rgba(255,255,255,0.7)' }}>{s.citation}</div>
              </div>
              <a href={s.link} target="_blank" rel="noopener" className="zx-btn zx-btn--primary" style={{ textDecoration: 'none' }}>
                {s.linkLabel} <Icon name="arrowUpRight" size={14} />
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <StrawStatCard label="Ash content (typical)" value="4–10" unit="%" sub="silica + alkali heavy" />
              <StrawStatCard label="Ash melting point" value="~900" unit="°C" sub="below our 1300°C oxidation zone" hi />
              <StrawStatCard label="Our solution" value="Active poker" unit="" sub="+ water-cooled finger grate" />
              <StrawStatCard label="Stable runtime" value="3,000" unit="+ hrs" sub="multifuel test campaigns" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StrawStatCard({ label, value, unit, sub, hi }) {
  return (
    <div style={{
      padding: 22,
      borderRadius: 14,
      background: hi ? 'linear-gradient(135deg, rgba(255,204,50,0.16), rgba(255,204,50,0.04))' : 'rgba(255,255,255,0.04)',
      border: hi ? '1px solid rgba(255,204,50,0.4)' : '1px solid rgba(255,255,255,0.08)',
    }}>
      <div className="zx-mono" style={{ color: hi ? '#ffcc32' : 'rgba(255,255,255,0.5)', marginBottom: 8, fontSize: 9.5 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
        <span style={{ font: '600 28px var(--zx-font-display)', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>{value}</span>
        {unit && <span style={{ font: '500 14px var(--zx-font-display)', color: hi ? '#ffcc32' : 'rgba(255,204,50,0.85)' }}>{unit}</span>}
      </div>
      <div style={{ font: '400 12px var(--zx-font-body)', color: 'rgba(255,255,255,0.5)' }}>{sub}</div>
    </div>
  );
}

// =================== COMETHA-TESTED CALLOUT ===================
function FuelsCometha() {
  const cometha = ZX_FUELS.categories.flatMap(c => c.fuels.filter(f => f.cometha));
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <PathwaySectionHeader
          eyebrow="02 · COMETHA PARIS · INDEPENDENTLY VALIDATED"
          accent="#ffcc32"
          head="Three feedstocks "
          headTail="independently validated."
          gradientText="linear-gradient(110deg, #ffe599 0%, #ffcc32 50%, #f4c400 100%)"
          lede="During COMETHA Phase 2 in Paris with Syctom and SIAAP, three of our feedstocks ran 2,500+ continuous hours under independent third-party measurement."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {cometha.map(f => (
            <div key={f.name} className="zx-card" style={{ display: 'flex', flexDirection: 'column', gap: 12, background: 'linear-gradient(135deg, rgba(30,190,200,0.06), rgba(255,204,50,0.02))', border: '1px solid rgba(30,190,200,0.25)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{
                  padding: '5px 10px',
                  borderRadius: 999,
                  background: 'rgba(30,190,200,0.14)',
                  border: '1px solid rgba(30,190,200,0.35)',
                  font: '700 10px var(--zx-font-body)',
                  color: '#1ebec8',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}>COMETHA Paris</span>
                <Icon name="check" size={18} color="#1ebec8" />
              </div>
              <h3 className="zx-h3" style={{ fontSize: 19, marginTop: 4 }}>{f.name}</h3>
              <p className="zx-body" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13.5 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =================== OPEN CALL ===================
function FuelsOpenCall() {
  return (
    <section className="zx-section--tight" style={{ paddingTop: 64, paddingBottom: 80, position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <div style={{
          padding: 'clamp(32px, 5vw, 56px)',
          borderRadius: 24,
          background: 'linear-gradient(135deg, rgba(255,204,50,0.08), rgba(30,190,200,0.04))',
          border: '1px solid rgba(255,204,50,0.25)',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: '-20%', background: 'radial-gradient(ellipse at center, rgba(255,204,50,0.18), transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div className="zx-mono" style={{ color: '#ffcc32', marginBottom: 12 }}>OPEN CALL · FEEDSTOCK TESTING</div>
            <h2 className="zx-h1" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', marginBottom: 18, textAlign: 'center' }}>
              Have a feedstock we haven't tested?
            </h2>
            <p className="zx-lede" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 28 }}>
              Our R&amp;D facility in Leipzig accepts feedstock samples for free-of-charge gasification trials. If you're sitting on a waste stream and wondering whether it can become energy — send us a sample.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="mailto:ceo@zero-x.co?subject=Feedstock testing request" className="zx-btn zx-btn--lg zx-btn--primary" style={{ textDecoration: 'none' }}>
                Submit a feedstock for testing
              </a>
              <a href="research.html" className="zx-btn zx-btn--lg zx-btn--ghost" style={{ textDecoration: 'none' }}>
                Research collaboration →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.FuelsPage = FuelsPage;
