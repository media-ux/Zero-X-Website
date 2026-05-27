// partners-page.jsx — Epic page for commercial / global strategic partners.

function PartnersPage() {
  const data = window.ZX_PATHWAYS.partners;
  const onNav = usePathwayNav();
  usePathwayColors(data);

  return (
    <>
      <Navbar onNav={onNav} />
      <main>
        <PathwayHero data={data} />
        <PartnersBusinessCase data={data} />
        <PartnersRevenue data={data} />
        <PartnersReliability data={data} />
        <PartnersArchitecture data={data} />
        <PartnersEsg data={data} />
        <PartnersAudiences data={data} />
        <PathwayEngage
          data={data}
          body="Whether you're an industrial operator, waste aggregator, municipal authority, or green-energy investor — let's structure your first X-150 deployment. Pilot funding available."
          primaryCta="Open a partnership inquiry"
          primaryHref="mailto:ceo@zero-x.co?subject=Strategic partnership inquiry"
          secondaryCta="Call partnerships"
          secondaryHref="tel:+493419288129"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// =================== BUSINESS CASE — 3 PILLARS ===================
function PartnersBusinessCase({ data }) {
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <PathwaySectionHeader
          eyebrow="01 · THE BUSINESS CASE"
          accent={data.primary}
          head="Why operators choose "
          headTail="X-150."
          gradientText={data.gradientText}
          lede="The transition to a circular economy requires more than sustainability — it requires profitable, reliable industrial assets. Three reasons the X-150 wins commercially."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          {data.businessCase.map(p => (
            <div key={p.n} className="zx-card zx-card--gradient-edge" style={{ padding: 32, minHeight: 320, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <span style={{ font: '700 12px var(--zx-font-mono)', color: `rgba(${data.primaryRgb}, 0.9)`, letterSpacing: '0.14em' }}>PILLAR · {p.n}</span>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: data.gradient, color: '#02191d', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 24px -8px rgba(${data.primaryRgb}, 0.5)` }}>
                  <Icon name={p.icon} size={22} />
                </div>
              </div>
              <h3 className="zx-h2" style={{ fontSize: 24, marginBottom: 14, lineHeight: 1.2 }}>{p.title}</h3>
              <p className="zx-body" style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14.5, lineHeight: 1.6 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =================== 4 REVENUE STREAMS ===================
function PartnersRevenue({ data }) {
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', right: '-10%', width: 600, height: 600, background: `radial-gradient(circle, rgba(${data.primaryRgb}, 0.18), transparent 70%)`, filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <PathwaySectionHeader
          eyebrow="02 · FOUR REVENUE STREAMS"
          accent={data.primary}
          head="One unit. "
          headTail="Four cash flows."
          gradientText={data.gradientText}
          lede="The X-150 doesn't just burn waste — it refines it into four discrete, saleable commodities. Stacked, not substituted."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }} className="zx-pwa-2col">
          {data.revenue.map((r, i) => {
            const hi = i === 3; // highlight carbon credits
            return (
              <div key={r.code} className="zx-card" style={{
                padding: 28, minHeight: 200,
                background: hi ? `linear-gradient(135deg, rgba(${data.primaryRgb}, 0.10), rgba(${data.primaryRgb}, 0.02))` : 'rgba(255,255,255,0.025)',
                border: hi ? `1px solid rgba(${data.primaryRgb}, 0.35)` : '1px solid rgba(255,255,255,0.07)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                  <span style={{ font: '700 11px var(--zx-font-mono)', color: hi ? data.primary : 'rgba(255,255,255,0.5)', letterSpacing: '0.15em' }}>{r.code}</span>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: hi ? data.gradient : `linear-gradient(135deg, rgba(${data.primaryRgb}, 0.22), rgba(${data.primaryRgb}, 0.06))`, border: hi ? 'none' : `1px solid rgba(${data.primaryRgb}, 0.25)`, color: hi ? '#02191d' : data.primary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={r.icon} size={20} />
                  </div>
                </div>
                <h3 className="zx-h3" style={{ fontSize: 19, marginBottom: 10 }}>{r.t}</h3>
                <p className="zx-body" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{r.d}</p>
                {hi && (
                  <a href="index.html#carbon-credits" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14, font: '600 12.5px var(--zx-font-body)', color: data.primary }}>
                    See carbon credits revenue model <Icon name="arrow" size={12} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style>{`@media (max-width: 720px) { .zx-pwa-2col { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// =================== RELIABILITY (two side-by-side stat callouts) ===================
function PartnersReliability({ data }) {
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <PathwaySectionHeader
          eyebrow="03 · UNPRECEDENTED RELIABILITY"
          accent={data.primary}
          head="The two failure modes "
          headTail="we eliminated."
          gradientText={data.gradientText}
          lede="System downtime — caused by slag agglomeration and tar buildup — is the single largest financial risk in waste-to-energy. We solved both."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }} className="zx-pwa-2col">
          {data.reliability.map((r, i) => (
            <div key={r.title} style={{
              position: 'relative',
              padding: 40,
              borderRadius: 24,
              background: `linear-gradient(135deg, rgba(${data.primaryRgb}, 0.10), rgba(${data.primaryRgb}, 0.02))`,
              border: `1px solid rgba(${data.primaryRgb}, 0.30)`,
              overflow: 'hidden',
              minHeight: 320,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div style={{ position: 'absolute', top: '-30%', right: '-20%', width: 360, height: 360, background: `radial-gradient(circle, rgba(${data.primaryRgb}, 0.22), transparent 60%)`, filter: 'blur(60px)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative' }}>
                <div className="zx-mono" style={{ color: data.primary, marginBottom: 12 }}>{r.eyebrow}</div>
                <h3 className="zx-h1" style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.1, marginBottom: 18 }}>{r.title}</h3>
                <p className="zx-body" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>{r.body}</p>
              </div>
              <div style={{ position: 'relative', marginTop: 28, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ font: '600 60px var(--zx-font-display)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1, background: data.gradientText, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{r.stat}</span>
                  <span style={{ font: '500 16px var(--zx-font-display)', color: data.primary }}>{r.statUnit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 720px) { .zx-pwa-2col { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// =================== ARCHITECTURE ===================
function PartnersArchitecture({ data }) {
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <PathwaySectionHeader
          eyebrow="04 · SCALABLE ARCHITECTURE"
          accent={data.primary}
          head="Built for "
          headTail="modern industrial realities."
          gradientText={data.gradientText}
          lede="No mega-plant CapEx commitments. No multi-year construction timelines. No specialist labor lock-in."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {data.architecture.map((a, i) => (
            <div key={a.t} className="zx-card" style={{ minHeight: 240 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, rgba(${data.primaryRgb}, 0.22), rgba(${data.primaryRgb}, 0.06))`, border: `1px solid rgba(${data.primaryRgb}, 0.25)`, color: data.primary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={a.icon} size={20} />
                </div>
                <span className="zx-mono" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>0{i + 1}</span>
              </div>
              <h3 className="zx-h3" style={{ fontSize: 18, marginBottom: 10 }}>{a.t}</h3>
              <p className="zx-body" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13.5 }}>{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =================== ESG ===================
function PartnersEsg({ data }) {
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <PathwaySectionHeader
          eyebrow="05 · ESG & COMPLIANCE"
          accent={data.primary}
          head="Aligned with corporate "
          headTail="net-zero mandates."
          gradientText={data.gradientText}
          lede="Investing in the X-150 directly satisfies Environmental, Social, and Governance commitments — and is future-regulation compliant."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {data.esg.map((e, i) => (
            <div key={e.t} className="zx-card" style={{ minHeight: 220 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, rgba(${data.primaryRgb}, 0.22), rgba(${data.primaryRgb}, 0.06))`, border: `1px solid rgba(${data.primaryRgb}, 0.25)`, color: data.primary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon name={e.icon} size={20} />
              </div>
              <h3 className="zx-h3" style={{ fontSize: 17, marginBottom: 10 }}>{e.t}</h3>
              <p className="zx-body" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13.5 }}>{e.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =================== AUDIENCES ===================
function PartnersAudiences({ data }) {
  return (
    <section className="zx-section--tight" style={{ paddingTop: 80, paddingBottom: 80, position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <div className="zx-mono" style={{ color: data.primary, marginBottom: 16, textAlign: 'center' }}>06 · WE PARTNER WITH</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
          {data.audiences.map((a, i) => (
            <span key={a} style={{
              padding: '10px 20px',
              borderRadius: 999,
              background: i % 2 === 0 ? `linear-gradient(135deg, rgba(${data.primaryRgb}, 0.10), rgba(${data.primaryRgb}, 0.02))` : 'rgba(255,255,255,0.03)',
              border: `1px solid rgba(${data.primaryRgb}, ${i % 2 === 0 ? '0.30' : '0.10'})`,
              font: '600 13px var(--zx-font-body)',
              color: 'rgba(255,255,255,0.85)',
            }}>{a}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

window.PartnersPage = PartnersPage;
