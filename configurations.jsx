// configurations.jsx — landing-page section introducing VOLT / HEAT / CHILL with deep links.

function Configurations() {
  const cfgs = window.ZX_CONFIGS ? Object.values(window.ZX_CONFIGS) : [];

  return (
    <section id="configurations" className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse, rgba(30,190,200,0.12), transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 56, alignItems: 'end', marginBottom: 56 }} className="zx-cfg-head">
          <div>
            <Eyebrow>Configurations</Eyebrow>
            <h2 className="zx-h1">
              One container.<br />
              <GradText>Three outputs.</GradText>
            </h2>
          </div>
          <div>
            <p className="zx-lede">
              The X-150 platform ships in three configurations. Same gasifier core, same 20-ft container — different conversion stage on the back end. Pick the output your site actually needs.
            </p>
          </div>
        </div>

        {/* Three big cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
          {cfgs.map((cfg, i) => <ConfigCard key={cfg.id} cfg={cfg} index={i} />)}
        </div>
      </div>

      <style>{`@media (max-width: 920px) { .zx-cfg-head { grid-template-columns: 1fr !important; gap: 24px !important; } }`}</style>
    </section>
  );
}

function ConfigCard({ cfg, index }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={`${cfg.id}.html`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: 'relative',
          padding: 0,
          borderRadius: 24,
          overflow: 'hidden',
          background: 'rgba(255,255,255,0.025)',
          border: `1px solid ${hover ? `rgba(${cfg.primaryRgb}, 0.5)` : 'rgba(255,255,255,0.08)'}`,
          transition: 'all 320ms var(--zx-ease)',
          cursor: 'pointer',
          minHeight: 460,
          display: 'flex', flexDirection: 'column',
          transform: hover ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hover ? `0 30px 60px -20px rgba(0,0,0,0.6), 0 0 60px -20px rgba(${cfg.primaryRgb}, 0.5)` : '0 1px 2px rgba(0,0,0,0.2)',
        }}
      >
        {/* Color-tinted top half */}
        <div style={{
          position: 'relative',
          padding: '32px 28px 0',
          background: `linear-gradient(180deg, rgba(${cfg.primaryRgb}, 0.18), rgba(${cfg.primaryRgb}, 0.04) 60%, transparent)`,
          minHeight: 240,
          overflow: 'hidden',
        }}>
          {/* Decorative animated orb */}
          <div style={{
            position: 'absolute', top: '-40%', right: '-20%',
            width: 320, height: 320,
            background: `radial-gradient(circle, rgba(${cfg.primaryRgb}, 0.45), transparent 65%)`,
            filter: 'blur(60px)', pointerEvents: 'none',
            transition: 'all 600ms var(--zx-ease)',
            transform: hover ? 'scale(1.2) translateX(-10%)' : 'scale(1)',
          }} />

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: cfg.gradient, color: '#02191d', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 24px -8px rgba(${cfg.primaryRgb}, 0.6), inset 0 1px 0 rgba(255,255,255,0.25)` }}>
              <Icon name={cfg.icon} size={26} />
            </div>
            <span style={{ font: '700 10.5px var(--zx-font-mono)', color: cfg.primary, letterSpacing: '0.18em' }}>0{index + 1} / 03</span>
          </div>

          <div style={{ position: 'relative', marginTop: 36 }}>
            <div style={{ font: '700 11px var(--zx-font-mono)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.18em', marginBottom: 6 }}>{cfg.code}</div>
            <h3 style={{
              font: '700 clamp(36px, 4vw, 52px)/0.95 var(--zx-font-body)',
              letterSpacing: '-0.03em',
              margin: 0,
              background: cfg.gradientText,
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>{cfg.tagline}</h3>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <p style={{ font: '400 14.5px/1.55 var(--zx-font-body)', color: 'rgba(255,255,255,0.6)', margin: 0, flex: 1 }}>
            {cfg.oneline}
          </p>

          {/* KPI strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, marginTop: 24, marginBottom: 20, borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            {cfg.kpis.slice(0, 2).map(([v, u, l], i) => (
              <div key={l} style={{ padding: '14px 0', borderRight: i === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingRight: i === 0 ? 14 : 0, paddingLeft: i === 1 ? 14 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                  <span style={{ font: '600 24px var(--zx-font-display)', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>{v}</span>
                  {u && <span style={{ font: '500 13px var(--zx-font-display)', color: cfg.primary }}>{u}</span>}
                </div>
                <div className="zx-kpi-label" style={{ marginTop: 4, fontSize: 9.5 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            color: cfg.primary,
            font: '600 13.5px var(--zx-font-body)',
          }}>
            <span>Explore {cfg.code} →</span>
            <Icon name="arrowUpRight" size={18} />
          </div>
        </div>
      </div>
    </a>
  );
}

window.Configurations = Configurations;
