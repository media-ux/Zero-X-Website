// proof.jsx — COMETHA case study, company/locations, contact, footer

// ---------------- COMETHA CASE STUDY ----------------
function Cometha() {
  return (
    <section id="cometha" className="zx-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '40%', left: '-15%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,204,50,0.18), transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 56, alignItems: 'center' }} className="zx-cometha-grid">
          {/* Left: case study */}
          <div>
            <Eyebrow color="yellow">Proven Results · Project COMETHA</Eyebrow>
            <h2 className="zx-h1" style={{ marginBottom: 24 }}>
              2,500+ operating hours <span style={{ color: 'rgba(255,255,255,0.45)' }}>in Paris</span>, third-party <GradText>validated.</GradText>
            </h2>
            <p className="zx-lede" style={{ marginBottom: 32 }}>
              The EU-funded COMETHA project demonstrated the X-150 platform at industrial scale with Syctom and SIAAP — converting sewage sludge and municipal waste into methane and clean energy. Performance data is independently verified.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
              <Stat v="2,500" u="hrs" l="Continuous runtime" />
              <Stat v="86" u="%" l="Cold gas efficiency" />
              <Stat v="3" u="" l="Validated feedstocks" />
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'EU Horizon-funded, German Federal Ministry (BMWK) co-funded',
                'Engineered with MFC Multi Fuel Conversion · Leipzig',
                'Academic partner: TU Zittau/Görlitz',
                'Multifuel validated: wood · sewage sludge · municipal waste',
              ].map((p, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'rgba(255,255,255,0.75)', font: '400 15px/1.5 var(--zx-font-body)' }}>
                  <span style={{ flexShrink: 0, color: 'var(--zx-teal)', marginTop: 2 }}><Icon name="check" size={18} /></span>
                  {p}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="primary" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>Access full performance report</Button>
              <Button variant="ghost" icon={false}>Download datasheet (PDF)</Button>
            </div>
          </div>

          {/* Right: deployment image w/ data overlay */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 24, overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              aspectRatio: '4 / 5',
              position: 'relative',
              boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6)',
            }}>
              <img src="assets/deployment-hero.jpg" alt="COMETHA deployment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(1,14,16,0.6) 75%, rgba(1,14,16,0.95) 100%)' }} />

              {/* Bottom info panel */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: '#1ebec8', boxShadow: '0 0 10px #1ebec8' }} />
                  <span className="zx-mono" style={{ color: 'rgba(30,190,200,0.95)', fontSize: 11 }}>LIVE · COMETHA · Paris, FR</span>
                </div>
                <div style={{ font: '700 28px/1.1 var(--zx-font-body)', color: '#fff', letterSpacing: '-0.02em' }}>
                  Syctom · SIAAP<br />
                  <span style={{ color: 'rgba(255,255,255,0.4)' }}>Sludge → methane</span>
                </div>
              </div>

              {/* Top right floating badge */}
              <div style={{ position: 'absolute', top: 20, right: 20, padding: '10px 14px', borderRadius: 12, background: 'rgba(1,14,16,0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,204,50,0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Icon name="award" size={16} color="#ffcc32" />
                  <span style={{ font: '600 12px var(--zx-font-body)', color: '#fff', letterSpacing: '0.02em' }}>EU-funded · COMETHA</span>
                </div>
              </div>
            </div>

            {/* Floating stat card overlapping */}
            <div style={{
              position: 'absolute', bottom: -32, left: -24, padding: 20,
              background: 'rgba(1,14,16,0.92)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(30,190,200,0.3)',
              borderRadius: 16, minWidth: 200,
              boxShadow: '0 20px 50px -10px rgba(0,0,0,0.8), 0 0 40px -10px rgba(30,190,200,0.3)',
            }} className="zx-cometha-stat">
              <div className="zx-mono" style={{ color: 'rgba(255,204,50,1)', marginBottom: 4 }}>NPV (10-year)</div>
              <div style={{ font: '600 36px var(--zx-font-display)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
                €56<span style={{ color: 'var(--zx-yellow)', fontSize: '0.6em', marginLeft: 4 }}>M</span>
              </div>
              <div style={{ font: '500 12px var(--zx-font-body)', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>
                7-month payback period
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .zx-cometha-grid { grid-template-columns: 1fr !important; }
          .zx-cometha-stat { position: relative !important; bottom: auto !important; left: auto !important; margin-top: 20px; }
        }
      `}</style>
    </section>
  );
}

function Stat({ v, u, l }) {
  return (
    <div style={{ padding: '20px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
        <span className="zx-metric zx-metric--grad" style={{ fontSize: 36 }}>{v}</span>
        {u && <span style={{ font: '500 14px var(--zx-font-display)', color: 'rgba(30,190,200,0.9)' }}>{u}</span>}
      </div>
      <div className="zx-kpi-label" style={{ marginTop: 6, fontSize: 10 }}>{l}</div>
    </div>
  );
}

// ---------------- COMPANY / LOCATIONS ----------------
function Company() {
  const locations = [
    { city: 'Leipzig', country: 'Germany', flag: '🇩🇪', entity: 'MFC Multi Fuel Conversion GmbH', role: 'Engineering HQ', addr: 'Karl-Heine-Str. · Leipzig', tint: 'teal' },
    { city: 'Madrid', country: 'Spain', flag: '🇪🇸', entity: 'Equation Labs SL', role: 'R&D · Iberia ops', addr: 'Calle de Velázquez · Madrid', tint: 'yellow' },
    { city: 'Wilmington', country: 'USA', flag: '🇺🇸', entity: 'Zero Carbon Inc.', role: 'Americas · Commercial', addr: 'Delaware · United States', tint: 'teal' },
  ];

  return (
    <section id="company" className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: 56, alignItems: 'center' }} className="zx-company-grid">
          <div>
            <Eyebrow>Company</Eyebrow>
            <h2 className="zx-h1">
              17 years of <GradText>industrial engineering.</GradText> Three offices. One platform.
            </h2>
            <p className="zx-lede" style={{ marginTop: 24 }}>
              Zero-X is the commercial vehicle for a multi-decade R&D lineage: Agnion → Entrade → Arensis → Zero-X. We engineer, build, and deploy the X-150 platform with our partners in clean-energy infrastructure across Europe, North America, and emerging markets.
            </p>

            <div style={{ marginTop: 32, padding: 24, borderRadius: 16, background: 'linear-gradient(135deg, rgba(30,190,200,0.06), rgba(255,204,50,0.03))', border: '1px solid rgba(30,190,200,0.2)' }}>
              <div className="zx-mono" style={{ color: 'rgba(30,190,200,1)', marginBottom: 10, fontSize: 10 }}>STRATEGIC PARTNERSHIPS</div>
              <div style={{ font: '700 18px var(--zx-font-body)', color: '#fff', marginBottom: 6 }}>Partnerships team</div>
              <div style={{ font: '400 14px var(--zx-font-body)', color: 'rgba(255,255,255,0.6)' }}>Working with municipalities, mining operators, data centers, and waste aggregators across Europe, North America, and emerging markets.</div>
              <div style={{ marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href="mailto:ceo@zero-x.co" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: '500 13px var(--zx-font-body)', color: 'rgba(30,190,200,1)', cursor: 'pointer' }}><Icon name="mail" size={14} /> ceo@zero-x.co</a>
              </div>
            </div>
          </div>

          <div className="zx-stack" style={{ gap: 16 }}>
            {locations.map((loc, i) => (
              <div key={i} className="zx-card" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '24px 28px' }}>
                <div style={{ fontSize: 40, lineHeight: 1, flexShrink: 0 }}>{loc.flag}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                    <h3 className="zx-h3" style={{ fontSize: 22 }}>{loc.city}</h3>
                    <span className="zx-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>{loc.country}</span>
                  </div>
                  <div style={{ font: '500 14px var(--zx-font-body)', color: 'rgba(255,255,255,0.7)', marginBottom: 2 }}>{loc.entity}</div>
                  <div style={{ font: '400 13px var(--zx-font-body)', color: 'rgba(255,255,255,0.4)' }}>{loc.role} · {loc.addr}</div>
                </div>
                <div style={{ flexShrink: 0, color: loc.tint === 'yellow' ? 'var(--zx-yellow)' : 'var(--zx-teal)' }}>
                  <Icon name="pin" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .zx-company-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ---------------- CONTACT + FOOTER ----------------
function Contact() {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contact" className="zx-section" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="zx-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 56, alignItems: 'start' }} className="zx-contact-grid">
          <div>
            <Eyebrow>Get in Touch</Eyebrow>
            <h2 className="zx-h1" style={{ marginBottom: 24 }}>
              Let's deploy <GradText>clean energy</GradText> at your site.
            </h2>
            <p className="zx-lede" style={{ marginBottom: 32 }}>
              Talk to our partnerships team about a site assessment, technical Q&A, or scheduling a live X-150 walkthrough at one of our deployment locations.
            </p>

            <div className="zx-stack" style={{ gap: 18 }}>
              <ContactRow icon="mail" label="Partnerships" value="ceo@zero-x.co" href="mailto:ceo@zero-x.co" />
              <ContactRow icon="phone" label="Direct line" value="+49 341 92881290" href="tel:+493419288129" />
              <ContactRow icon="pin" label="HQ" value="Leipzig, Germany · MFC GmbH" />
            </div>
          </div>

          <div style={{ padding: 32, borderRadius: 20, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {!sent ? (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="zx-stack" style={{ gap: 14 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label className="zx-mono" style={{ display: 'block', marginBottom: 6, color: 'rgba(255,255,255,0.5)' }}>First name</label>
                    <input className="zx-input" required />
                  </div>
                  <div>
                    <label className="zx-mono" style={{ display: 'block', marginBottom: 6, color: 'rgba(255,255,255,0.5)' }}>Last name</label>
                    <input className="zx-input" required />
                  </div>
                </div>
                <div>
                  <label className="zx-mono" style={{ display: 'block', marginBottom: 6, color: 'rgba(255,255,255,0.5)' }}>Work email</label>
                  <input className="zx-input" type="email" required />
                </div>
                <div>
                  <label className="zx-mono" style={{ display: 'block', marginBottom: 6, color: 'rgba(255,255,255,0.5)' }}>Organization</label>
                  <input className="zx-input" />
                </div>
                <div>
                  <label className="zx-mono" style={{ display: 'block', marginBottom: 6, color: 'rgba(255,255,255,0.5)' }}>Use case</label>
                  <select className="zx-input">
                    <option>Municipality / utility</option>
                    <option>Data center cooling</option>
                    <option>Mining / off-grid</option>
                    <option>Biogas / food processing</option>
                    <option>Investor / press</option>
                  </select>
                </div>
                <Button variant="primary" type="submit" size="lg">Send message</Button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: 999, background: 'rgba(30,190,200,0.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--zx-teal)', marginBottom: 16 }}>
                  <Icon name="check" size={28} />
                </div>
                <h3 className="zx-h2" style={{ fontSize: 22, marginBottom: 8 }}>Message received.</h3>
                <p className="zx-body">Our partnerships team will be in touch within 2 business days.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .zx-contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ContactRow({ icon, label, value, href }) {
  const inner = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', borderRadius: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 200ms' }}>
      <span style={{ color: 'var(--zx-teal)' }}><Icon name={icon} size={20} /></span>
      <div>
        <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 2 }}>{label}</div>
        <div style={{ font: '600 15px var(--zx-font-body)', color: '#fff' }}>{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Footer() {
  return (
    <footer style={{ background: 'var(--zx-carbon-footer)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 72, paddingBottom: 32 }}>
      <div className="zx-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.6fr) repeat(3, minmax(0, 1fr))', gap: 48, marginBottom: 56 }} className="zx-footer-grid">
          <div>
            <img src="assets/logo-main.png" alt="Zero-X" style={{ height: 40, marginBottom: 20 }} />
            <p style={{ font: '400 14px/1.6 var(--zx-font-body)', color: 'rgba(255,255,255,0.5)', maxWidth: 360, margin: 0 }}>
              Industrial clean energy from unrecyclable waste. Engineered in Germany. Deployed worldwide.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
              <Pill>Online · Paris · 86% efficiency</Pill>
            </div>
          </div>
          <FootCol title="Product" links={[['Technology', 'technology'], ['Applications', 'applications'], ['Active Projects', 'projects'], ['Datasheet', '#']]} />
          <FootCol title="Company" links={[['About', 'company'], ['Partnerships', 'contact'], ['Careers', '#'], ['Press', '#']]} />
          <FootCol title="Legal" links={[['Imprint', '#'], ['Privacy', '#'], ['Terms', '#'], ['Cookies', '#']]} />
        </div>

        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)', marginBottom: 24 }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, font: '400 12.5px var(--zx-font-body)', color: 'rgba(255,255,255,0.35)' }}>
          <div>© 2026 Zero Carbon Inc. · MFC Multi Fuel Conversion GmbH · Equation Labs SL</div>
          <div className="zx-row" style={{ gap: 16 }}>
            <span>🇩🇪 Leipzig</span>
            <span>🇪🇸 Madrid</span>
            <span>🇺🇸 Wilmington</span>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .zx-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}

function FootCol({ title, links }) {
  return (
    <div>
      <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {links.map(([label, target]) => (
          <li key={label}>
            <a onClick={() => {
              const el = document.getElementById(target);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} style={{ font: '500 14px var(--zx-font-body)', color: 'rgba(255,255,255,0.65)', cursor: 'pointer', transition: 'color 200ms' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
            >{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ErrorNote({ children }) {
  return (
    <div style={{
      padding: '10px 14px',
      borderRadius: 10,
      background: 'rgba(229,72,77,0.10)',
      border: '1px solid rgba(229,72,77,0.35)',
      font: '500 13px var(--zx-font-body)',
      color: '#ffb3b5',
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <Icon name="close" size={14} color="#ffb3b5" />
      {children}
    </div>
  );
}

Object.assign(window, { Cometha, Company, Contact, Footer, ErrorNote });
