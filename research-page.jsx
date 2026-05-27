// research-page.jsx — Epic page for academic researchers + consortiums.

function ResearchPage() {
  const data = window.ZX_PATHWAYS.research;
  const onNav = usePathwayNav();
  usePathwayColors(data);

  return (
    <>
      <Navbar onNav={onNav} />
      <main>
        <PathwayHero data={data} />
        <ResearchPillars data={data} />
        <ResearchAvenues data={data} />
        <ResearchOffer data={data} />
        <ResearchConsortium data={data} />
        <PathwayEngage
          data={data}
          body="We invite faculty, post-docs, and consortium leads to propose joint research projects, EU grant applications, PhD fieldwork, or co-authored publications using the X-150 industrial testbed."
          primaryCta="Submit a research proposal"
          primaryHref="mailto:ceo@zero-x.co?subject=Research collaboration proposal"
          secondaryCta="Email research lead"
          secondaryHref="mailto:ceo@zero-x.co"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// =================== SCIENTIFIC PILLARS ===================
function ResearchPillars({ data }) {
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <PathwaySectionHeader
          eyebrow="01 · SCIENTIFIC FOUNDATIONS"
          accent={data.primary}
          head="What we have built. "
          headTail="What you can study."
          gradientText={data.gradientText}
          lede="The X-150 is a fully instrumented 150 kg/h industrial prototype — not a lab model. Every component is a publishable research surface."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }} className="zx-pwa-2col">
          {data.pillars.map(p => (
            <div key={p.n} className="zx-card zx-card--gradient-edge" style={{ padding: 32, minHeight: 320, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 22 }}>
                <span style={{ font: '600 11.5px var(--zx-font-mono)', color: `rgba(${data.primaryRgb}, 0.9)`, letterSpacing: '0.12em' }}>FIG · {p.n}</span>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, rgba(${data.primaryRgb}, 0.2), rgba(${data.primaryRgb}, 0.06))`, border: `1px solid rgba(${data.primaryRgb}, 0.3)`, color: data.primary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={p.icon} size={20} />
                </div>
              </div>
              <h3 className="zx-h2" style={{ fontSize: 22, marginBottom: 16, lineHeight: 1.25 }}>{p.title}</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                <ResearchBlock label="The X-150 innovation" body={p.innovation} accent={data.primary} />
                <ResearchBlock label="Research implication" body={p.implication} accent={data.primary} muted />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .zx-pwa-2col { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function ResearchBlock({ label, body, accent, muted }) {
  return (
    <div style={{
      padding: 16,
      borderRadius: 12,
      background: muted ? 'rgba(255,255,255,0.025)' : `rgba(${accent.replace('#','')}10, 0.04)`,
      border: muted ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(255,255,255,0.08)',
    }}>
      <div className="zx-mono" style={{ color: muted ? 'rgba(255,255,255,0.5)' : accent, marginBottom: 6, fontSize: 9.5 }}>{label}</div>
      <div style={{ font: '400 13.5px/1.55 var(--zx-font-body)', color: muted ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.85)' }}>{body}</div>
    </div>
  );
}

// =================== RESEARCH AVENUES ===================
function ResearchAvenues({ data }) {
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '-10%', width: 500, height: 500, background: `radial-gradient(circle, rgba(${data.primaryRgb}, 0.18), transparent 70%)`, filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <PathwaySectionHeader
          eyebrow="02 · FUTURE COLLABORATIVE RESEARCH"
          accent={data.primary}
          head="Five avenues for "
          headTail="joint investigation."
          gradientText={data.gradientText}
          lede="Following our COMETHA Phase 2 trials, we have identified the most fertile research areas — open to academic co-PIs, doctoral candidates, and EU consortium leads."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {data.avenues.map((a, i) => (
            <div key={a.t} className="zx-card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, rgba(${data.primaryRgb}, 0.22), rgba(${data.primaryRgb}, 0.06))`, border: `1px solid rgba(${data.primaryRgb}, 0.25)`, color: data.primary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={a.icon} size={20} />
                </div>
                <span className="zx-mono" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>0{i + 1}</span>
              </div>
              <h3 className="zx-h3" style={{ fontSize: 17, marginTop: 8 }}>{a.t}</h3>
              <p className="zx-body" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13.5 }}>{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =================== WHAT WE OFFER ===================
function ResearchOffer({ data }) {
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)', gap: 56, alignItems: 'start' }} className="zx-pwa-2col">
          <div style={{ position: 'sticky', top: 100 }}>
            <div className="zx-mono" style={{ color: data.primary, marginBottom: 12 }}>03 · WHAT WE OFFER</div>
            <h2 className="zx-h1" style={{ marginBottom: 20 }}>
              An industrial-grade <br />
              <span style={{ background: data.gradientText, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>research environment.</span>
            </h2>
            <p className="zx-lede">
              We bridge the gap between theoretical lab work and a fully functional 150 kg/h prototype — co-developed with Hochschule Zittau/Görlitz (HSZG) and validated through the EU COMETHA Phase 2 framework.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }} className="zx-pwa-offer">
            {data.offer.map(o => (
              <div key={o.t} className="zx-card" style={{ minHeight: 200 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, rgba(${data.primaryRgb}, 0.22), rgba(${data.primaryRgb}, 0.06))`, border: `1px solid rgba(${data.primaryRgb}, 0.25)`, color: data.primary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={o.icon} size={20} />
                </div>
                <h3 className="zx-h3" style={{ fontSize: 16, marginBottom: 8 }}>{o.t}</h3>
                <p className="zx-body" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) { .zx-pwa-2col { grid-template-columns: 1fr !important; } }
        @media (max-width: 540px) { .zx-pwa-offer { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// =================== EXISTING CONSORTIUM ===================
function ResearchConsortium({ data }) {
  return (
    <section className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <PathwaySectionHeader
          eyebrow="04 · EXISTING CONSORTIUM"
          accent={data.primary}
          head="Currently collaborating "
          headTail="with."
          gradientText={data.gradientText}
          lede="Join an active consortium with German federal funding, EU Horizon backing, and institutional credibility."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {data.consortium.map(c => (
            <div key={c.name} className="zx-card" style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: `linear-gradient(135deg, rgba(${data.primaryRgb}, 0.22), rgba(${data.primaryRgb}, 0.06))`, border: `1px solid rgba(${data.primaryRgb}, 0.25)`, color: data.primary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="award" size={18} />
                </div>
                <span className="zx-mono" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 10 }}>{c.country}</span>
              </div>
              <h3 className="zx-h3" style={{ fontSize: 17 }}>{c.name}</h3>
              <p className="zx-body" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>{c.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ResearchPage = ResearchPage;
