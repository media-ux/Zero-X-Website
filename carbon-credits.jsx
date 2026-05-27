// carbon-credits.jsx — Landing section explaining carbon credits as a revenue stream.

function CarbonCredits() {
  const c = window.ZX_CARBON_CREDITS;
  if (!c) return null;
  return (
    <section id="carbon-credits" className="zx-section" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: '0%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(30,190,200,0.18), transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '0%', left: '-10%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,204,50,0.14), transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 56, alignItems: 'end', marginBottom: 48 }} className="zx-cc-head">
          <div>
            <Eyebrow color="yellow">{c.eyebrow}</Eyebrow>
            <h2 className="zx-h1">
              {c.headline}<br />
              <GradText variant="yellow">{c.highlight}</GradText>
            </h2>
          </div>
          <div>
            <p className="zx-lede">{c.lede}</p>
          </div>
        </div>

        {/* Three-step explainer */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 56 }}>
          {c.explainer.map((s, i) => (
            <div key={s.n} className="zx-card zx-card--gradient-edge" style={{ position: 'relative', minHeight: 220 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <span style={{ font: '600 11.5px var(--zx-font-mono)', color: 'rgba(255,204,50,0.85)', letterSpacing: '0.1em' }}>STEP · {s.n}</span>
                <IconTile name={['leaf','shield','award'][i]} />
              </div>
              <h3 className="zx-h2" style={{ fontSize: 19, marginBottom: 10 }}>{s.t}</h3>
              <p className="zx-body" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{s.d}</p>
            </div>
          ))}
        </div>

        {/* Per-unit revenue grid + Why panel */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: 24, alignItems: 'stretch' }} className="zx-cc-row">
          {/* Per-unit metric tiles */}
          <div style={{
            padding: 32,
            borderRadius: 24,
            background: 'linear-gradient(135deg, rgba(30,190,200,0.08), rgba(255,204,50,0.04))',
            border: '1px solid rgba(30,190,200,0.25)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(30,190,200,0.25), transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <div className="zx-mono" style={{ color: 'rgba(30,190,200,1)', marginBottom: 10 }}>PER X-150 UNIT · ANNUALIZED</div>
              <h3 className="zx-h2" style={{ fontSize: 22, marginBottom: 24 }}>Stacked on top of energy sales.</h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {c.perUnit.map((m, i) => {
                  const hi = i === 3; // highlight credit revenue tile
                  return (
                    <div key={m.label} style={{
                      padding: 18,
                      borderRadius: 14,
                      background: hi ? 'linear-gradient(135deg, rgba(255,204,50,0.18), rgba(255,204,50,0.05))' : 'rgba(255,255,255,0.03)',
                      border: hi ? '1px solid rgba(255,204,50,0.4)' : '1px solid rgba(255,255,255,0.07)',
                    }}>
                      <div className="zx-mono" style={{ color: hi ? 'var(--zx-yellow)' : 'rgba(255,255,255,0.45)', fontSize: 9.5, marginBottom: 10 }}>{m.label}</div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                        <span style={{ font: '600 28px var(--zx-font-display)', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>{m.value}</span>
                        <span style={{ font: '500 13px var(--zx-font-display)', color: hi ? 'var(--zx-yellow)' : 'rgba(30,190,200,0.9)' }}>{m.unit}</span>
                      </div>
                      <div style={{ font: '400 11.5px var(--zx-font-body)', color: 'rgba(255,255,255,0.5)' }}>{m.sub}</div>
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 10, fontSize: 10 }}>CERTIFIED BY</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {c.registries.map(r => (
                    <span key={r} style={{
                      padding: '5px 10px', borderRadius: 999,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      font: '500 11.5px var(--zx-font-body)', color: 'rgba(255,255,255,0.75)',
                    }}>{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Why panel */}
          <div style={{
            padding: 32,
            borderRadius: 24,
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24,
          }}>
            <div>
              <div className="zx-mono" style={{ color: 'var(--zx-yellow)', marginBottom: 12 }}>WHY THIS MATTERS</div>
              <h3 className="zx-h2" style={{ fontSize: 24, marginBottom: 16 }}>{c.why.head}</h3>
              <p className="zx-body" style={{ fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)' }}>
                {c.why.body}
              </p>
            </div>

            <div style={{
              padding: 18,
              borderRadius: 14,
              background: 'linear-gradient(135deg, rgba(255,204,50,0.10), transparent)',
              border: '1px solid rgba(255,204,50,0.25)',
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <span style={{ color: 'var(--zx-yellow)' }}><Icon name="sparkles" size={22} /></span>
              <div style={{ font: '500 13.5px/1.5 var(--zx-font-body)', color: 'rgba(255,255,255,0.85)' }}>
                For fleet operators: <strong style={{ color: '#fff', fontWeight: 700 }}>credit revenue alone</strong> can cover the operational cost of the entire fleet.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .zx-cc-head, .zx-cc-row { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  );
}

window.CarbonCredits = CarbonCredits;
