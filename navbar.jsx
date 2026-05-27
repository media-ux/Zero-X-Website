// navbar.jsx — fixed nav with blur, scroll state, mobile drawer
function Navbar({ onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while drawer is open + close on Escape
  React.useEffect(() => {
    if (mobile) {
      document.body.style.overflow = 'hidden';
      const onKey = (e) => { if (e.key === 'Escape') setMobile(false); };
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKey);
      };
    }
  }, [mobile]);

  const links = [
    ['Configurations', 'configurations'],
    ['Projects', 'projects'],
    ['Fuels', 'fuels-link'],
    ['Research', 'research-link'],
    ['Partner', 'partner-link'],
  ];
  const externalLinks = { 'research-link': 'research.html', 'partner-link': 'partners.html', 'fuels-link': 'fuels.html' };
  const handleLink = (id) => {
    if (externalLinks[id]) { window.location.href = externalLinks[id]; return; }
    onNav(id);
  };

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60,
    transition: 'all 320ms var(--zx-ease)',
    background: scrolled || mobile ? 'rgba(1,14,16,0.86)' : 'transparent',
    backdropFilter: scrolled || mobile ? 'blur(20px) saturate(180%)' : 'none',
    WebkitBackdropFilter: scrolled || mobile ? 'blur(20px) saturate(180%)' : 'none',
    borderBottom: scrolled || mobile ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
  };

  return (
    <nav style={navStyle}>
      <div className="zx-wrap" style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <a onClick={() => onNav('top')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <img src="assets/logo-main.png" alt="Zero-X" style={{ height: 34, width: 'auto' }} />
        </a>

        {/* Desktop nav links (hidden < 960px) */}
        <div className="zx-nav-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {links.map(([label, id]) => (
            <a key={id} onClick={() => handleLink(id)} style={{
              font: '500 13.5px var(--zx-font-body)',
              color: 'rgba(255,255,255,0.55)',
              cursor: 'pointer',
              transition: 'color 200ms',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.95)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            >{label}</a>
          ))}
        </div>

        {/* Right cluster */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
          <span className="zx-nav-cta">
            <Button variant="primary" size="sm" onClick={() => onNav('contact')}>Get in Touch</Button>
          </span>

          {/* Hamburger — visible on tablet/mobile */}
          <button
            className="zx-mobile-menu-btn"
            onClick={() => setMobile(!mobile)}
            aria-label={mobile ? 'Close menu' : 'Open menu'}
            aria-expanded={mobile}
            style={{
              display: 'none',
              background: mobile ? 'rgba(255,255,255,0.08)' : 'transparent',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#fff',
              cursor: 'pointer',
              width: 40, height: 40,
              borderRadius: 10,
              alignItems: 'center', justifyContent: 'center',
              transition: 'all 200ms var(--zx-ease)',
            }}
          >
            <Icon name={mobile ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile drawer — full-screen overlay */}
      {mobile && (
        <>
          <div onClick={() => setMobile(false)} style={{
            position: 'fixed', top: 68, left: 0, right: 0, bottom: 0,
            background: 'rgba(1,14,16,0.85)',
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            zIndex: 55,
            animation: 'zx-fade-in 200ms ease',
          }} />
          <div style={{
            position: 'fixed', top: 68, left: 0, right: 0, zIndex: 56,
            maxHeight: 'calc(100vh - 68px)', overflowY: 'auto',
            background: 'rgba(1,14,16,0.98)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '20px 24px 32px',
            animation: 'zx-slide-down 280ms var(--zx-ease)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {links.map(([label, id]) => (
                <a key={id} onClick={() => { handleLink(id); setMobile(false); }} style={{
                  padding: '16px 4px',
                  color: 'rgba(255,255,255,0.85)',
                  cursor: 'pointer',
                  font: '500 17px var(--zx-font-body)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <span>{label}</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}><Icon name="chevronRight" size={16} /></span>
                </a>
              ))}
            </div>

            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button
                onClick={() => { onNav('contact'); setMobile(false); }}
                className="zx-btn zx-btn--primary zx-btn--lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >Get in Touch</button>
              <a href="mailto:ceo@zero-x.co" style={{
                padding: '12px 14px',
                textAlign: 'center',
                font: '500 14px var(--zx-font-body)',
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
              }}>ceo@zero-x.co · +49 341 92881290</a>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes zx-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zx-slide-down { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 960px) {
          .zx-nav-links { display: none !important; }
          .zx-mobile-menu-btn { display: inline-flex !important; }
        }
        @media (max-width: 560px) {
          .zx-nav-cta { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

window.Navbar = Navbar;
