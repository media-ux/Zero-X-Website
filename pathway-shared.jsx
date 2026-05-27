// pathway-shared.jsx — components used by both research-page.jsx and partners-page.jsx.

function PathwayHero({ data }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 140, paddingBottom: 80 }}>
      {/* Ambient mesh tinted by pathway primary */}
      <div style={{
        position: 'absolute', top: '5%', left: '-10%', width: 700, height: 700,
        background: `radial-gradient(circle, rgba(${data.primaryRgb}, 0.30), transparent 65%)`,
        filter: 'blur(100px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '0%', right: '-10%', width: 600, height: 600,
        background: `radial-gradient(circle, rgba(${data.secondaryRgb || data.primaryRgb}, 0.18), transparent 65%)`,
        filter: 'blur(120px)', pointerEvents: 'none',
      }} />
      <GridBg />

      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        {/* Code chip */}
        <div className="zx-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 999, background: `rgba(${data.primaryRgb}, 0.10)`, border: `1px solid rgba(${data.primaryRgb}, 0.30)`, marginBottom: 28 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: data.primary, boxShadow: `0 0 14px ${data.primary}` }} />
          <span style={{ font: '600 11px var(--zx-font-body)', color: data.primary, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{data.eyebrow}</span>
        </div>

        {/* Headline */}
        <h1 className="zx-h-display zx-fade-in" style={{ fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 0.95, letterSpacing: '-0.035em', maxWidth: 1100, marginBottom: 28, animationDelay: '40ms' }}>
          <span style={{ display: 'block', font: '600 0.28em var(--zx-font-mono)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>{data.code}</span>
          <span style={{ background: data.gradientText, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{data.tagline}</span>
        </h1>

        <p className="zx-lede zx-fade-in" style={{ maxWidth: 760, marginBottom: 36, animationDelay: '120ms' }}>{data.oneline}</p>

        <div className="zx-fade-in" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', animationDelay: '180ms' }}>
          <a href="#engage" onClick={(e) => { e.preventDefault(); document.getElementById('engage')?.scrollIntoView({ behavior: 'smooth' }); }} className="zx-btn zx-btn--lg" style={{ background: data.gradient, color: '#02191d', boxShadow: `0 8px 28px -8px rgba(${data.primaryRgb}, 0.6), inset 0 1px 0 rgba(255,255,255,0.3)`, textDecoration: 'none' }}>
            {data.cta.primary} →
          </a>
          <a href="mailto:ceo@zero-x.co" className="zx-btn zx-btn--lg zx-btn--ghost" style={{ textDecoration: 'none' }}>
            <Icon name="mail" size={14} /> ceo@zero-x.co
          </a>
        </div>

        {/* KPI strip */}
        <div className="zx-fade-in" style={{ marginTop: 88, animationDelay: '260ms' }}>
          <PathwayKpis kpis={data.kpis} accent={data.primary} />
        </div>
      </div>
    </section>
  );
}

function PathwayKpis({ kpis, accent }) {
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
            <span style={{ font: '600 clamp(32px, 4vw, 52px) var(--zx-font-display)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>{v}</span>
            <span style={{ font: '500 16px var(--zx-font-display)', color: accent }}>{u}</span>
          </div>
          <div className="zx-kpi-label" style={{ marginTop: 10 }}>{label}</div>
        </div>
      ))}
    </div>
  );
}

// Section header: mono eyebrow + headline + lede column
function PathwaySectionHeader({ eyebrow, accent, head, headTail, lede, gradientText }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 56, alignItems: 'end', marginBottom: 56 }} className="zx-pwa-head">
      <div>
        <div className="zx-mono" style={{ color: accent, marginBottom: 12 }}>{eyebrow}</div>
        <h2 className="zx-h1">
          {head}
          {headTail && <> <span style={{ background: gradientText, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{headTail}</span></>}
        </h2>
      </div>
      {lede && <div><p className="zx-lede">{lede}</p></div>}
      <style>{`@media (max-width: 920px) { .zx-pwa-head { grid-template-columns: 1fr !important; gap: 24px !important; } }`}</style>
    </div>
  );
}

// Engage / CTA banner — used as the closing call-to-action above Contact
function PathwayEngage({ data, body, primaryCta, primaryHref, secondaryCta, secondaryHref }) {
  return (
    <section id="engage" className="zx-section--tight" style={{ paddingTop: 80, paddingBottom: 80, position: 'relative' }}>
      <div className="zx-wrap">
        <div style={{
          padding: 'clamp(32px, 5vw, 72px)',
          borderRadius: 28,
          background: `linear-gradient(135deg, rgba(${data.primaryRgb}, 0.10), rgba(${data.secondaryRgb || data.primaryRgb}, 0.04))`,
          border: `1px solid rgba(${data.primaryRgb}, 0.30)`,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: 500, height: 500, background: `radial-gradient(circle, rgba(${data.primaryRgb}, 0.30), transparent 60%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-40%', left: '-10%', width: 400, height: 400, background: `radial-gradient(circle, rgba(${data.secondaryRgb || data.primaryRgb}, 0.18), transparent 60%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)', gap: 40, alignItems: 'center', position: 'relative' }} className="zx-pwa-cta">
            <div>
              <div className="zx-mono" style={{ color: data.primary, marginBottom: 12 }}>{data.eyebrow.toUpperCase()}</div>
              <h2 className="zx-h1" style={{ fontSize: 'clamp(28px, 3.4vw, 48px)', marginBottom: 18, lineHeight: 1.1 }}>
                Ready to{' '}
                <span style={{ background: data.gradientText, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>get started?</span>
              </h2>
              <p className="zx-lede" style={{ color: 'rgba(255,255,255,0.75)' }}>{body}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={primaryHref} className="zx-btn zx-btn--lg" style={{ background: data.gradient, color: '#02191d', justifyContent: 'center', textDecoration: 'none' }}>
                {primaryCta} →
              </a>
              {secondaryCta && (
                <a href={secondaryHref} className="zx-btn zx-btn--lg zx-btn--ghost" style={{ justifyContent: 'center', textDecoration: 'none' }}>
                  {secondaryCta}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .zx-pwa-cta { grid-template-columns: 1fr !important; gap: 28px !important; } }`}</style>
    </section>
  );
}

// Apply config-color CSS vars on the document root for this page
function usePathwayColors(data) {
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--cfg-primary', data.primary);
    r.style.setProperty('--cfg-primary-rgb', data.primaryRgb);
    r.style.setProperty('--cfg-accent', data.accent);
    if (data.secondary) r.style.setProperty('--cfg-secondary', data.secondary);
    document.title = `${data.code} · ${data.tagline} · Zero-X`;
  }, [data]);
}

// Standard cross-page nav (logo → home, links → home + hash)
function usePathwayNav() {
  return React.useCallback((id) => {
    if (id === 'top') { window.location.href = 'index.html'; return; }
    window.location.href = 'index.html#' + id;
  }, []);
}

Object.assign(window, { PathwayHero, PathwayKpis, PathwaySectionHeader, PathwayEngage, usePathwayColors, usePathwayNav });
