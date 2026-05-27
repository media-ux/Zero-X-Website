// hero.jsx — modern gradient hero with mesh, KPI strip, layered visual
function Hero({ onNav }) {
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', paddingTop: 140, paddingBottom: 96 }}>
      {/* Background scene image — opacity 25% */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(assets/hero-x150-scene.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.25,
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      {/* Soft dark vignette to keep copy readable */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(1,14,16,0.45) 60%, rgba(1,14,16,0.85) 100%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <Mesh />
      <GridBg />

      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: 1020, margin: '0 auto', paddingTop: 40 }}>
          <div className="zx-fade-in" style={{ marginBottom: 28 }}>
            <Pill>EU-funded · 2,500+ operating hours · Paris</Pill>
          </div>

          <h1 className="zx-h-display zx-fade-in" style={{ animationDelay: '60ms' }}>
            Waste becomes <GradText>clean energy</GradText><br />
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>at industrial scale.</span>
          </h1>

          <p className="zx-lede zx-fade-in" style={{ margin: '32px auto 0', textAlign: 'center', animationDelay: '140ms', maxWidth: 720 }}>
            The <strong style={{ color: '#fff', fontWeight: 600 }}>X-150 modular gasification system</strong> converts unrecyclable waste and biomass into heat, cooling, electricity, hydrogen and biochar — containerized, deployable in days, EU-validated with 2,500+ operating hours.
          </p>

          <div className="zx-fade-in" style={{ marginTop: 40, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', animationDelay: '220ms' }}>
            <Button variant="primary" size="lg" onClick={() => onNav('technology')}>Explore the X-150</Button>
            <Button variant="ghost" size="lg" onClick={() => onNav('contact')} icon={false}>
              <Icon name="play" size={14} /> Book a demo
            </Button>
          </div>

        </div>

        {/* Hero visual — X-150 perspective render w/ ambient glow + KPI cards */}
        <div className="zx-fade-in" style={{ position: 'relative', marginTop: 100, animationDelay: '380ms' }}>
          <HeroVisual />
        </div>

        {/* KPI Strip */}
        <div className="zx-fade-in" style={{ marginTop: 80, animationDelay: '500ms' }}>
          <HeroKpis />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Soft halo behind product */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: '70%', height: '70%',
        background: 'radial-gradient(ellipse, rgba(30,190,200,0.30) 0%, rgba(255,204,50,0.10) 40%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        borderRadius: 28,
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: 24,
        boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}>
        {/* Top control bar — gives it a "console" vibe */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, padding: '0 8px' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#ff5f57', opacity: 0.5 }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#febc2e', opacity: 0.5 }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#28c840', opacity: 0.5 }} />
          </div>
          <div style={{ font: '500 11px var(--zx-font-mono)', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            X-150 · Unit-001 · LIVE
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, font: '500 11px var(--zx-font-mono)', color: 'rgba(30,190,200,0.9)' }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: '#1ebec8', boxShadow: '0 0 8px #1ebec8' }} />
            ONLINE
          </div>
        </div>

        {/* Image stage */}
        <div style={{
          position: 'relative',
          aspectRatio: '16 / 9',
          borderRadius: 20,
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at center, rgba(30,190,200,0.10), rgba(1,14,16,0.4))',
        }}>
          <img src="assets/x150-perspective-cutout.png" alt="X-150 cut-out" style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            mixBlendMode: 'screen',
            filter: 'brightness(1.05) contrast(1.05)',
          }} />

          {/* Floating annotation chips */}
          <FloatChip top="12%" left="6%" label="Tar reformer" value="950°C" />
          <FloatChip top="38%" right="8%" label="Thermal output" value="~650 kW" />
          <FloatChip bottom="14%" left="10%" label="Efficiency" value="86%" />
        </div>
      </div>
    </div>
  );
}

function FloatChip({ top, bottom, left, right, label, value }) {
  return (
    <div className="zx-hero-float-chip" style={{
      position: 'absolute',
      top, bottom, left, right,
      background: 'rgba(1,14,16,0.72)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(30,190,200,0.25)',
      borderRadius: 12,
      padding: '8px 12px',
      boxShadow: '0 8px 24px -8px rgba(0,0,0,0.6), 0 0 24px -8px rgba(30,190,200,0.4)',
    }}>
      <div style={{ font: '600 9.5px var(--zx-font-body)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(30,190,200,0.8)', marginBottom: 2 }}>
        {label}
      </div>
      <div style={{ font: '600 16px var(--zx-font-display)', color: '#fff', letterSpacing: '-0.01em' }}>
        {value}
      </div>
    </div>
  );
}

function HeroKpis() {
  const kpis = [
    ['86', '%', 'Thermal efficiency'],
    ['2,500', '+ hrs', 'COMETHA validated'],
    ['20', ' ft', 'Containerized'],
    ['17', ' yrs', 'Engineering heritage'],
  ];
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 0,
      borderTop: '1px solid rgba(255,255,255,0.08)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      {kpis.map(([v, u, label], i) => (
        <div key={label} style={{
          padding: '32px 24px',
          borderRight: i < kpis.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
          textAlign: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 2 }}>
            <span className="zx-metric zx-metric--grad" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>{v}</span>
            <span style={{ font: '500 18px var(--zx-font-display)', color: 'rgba(30,190,200,0.9)' }}>{u}</span>
          </div>
          <div className="zx-kpi-label" style={{ marginTop: 8 }}>{label}</div>
        </div>
      ))}
    </div>
  );
}

window.Hero = Hero;
