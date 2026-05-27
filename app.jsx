// app.jsx — wires everything; smooth-scroll nav, login redirect, tweaks
const { useState, useEffect, useCallback } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "teal-yellow",
  "meshIntensity": "bold",
  "headlineWord": "clean energy"
}/*EDITMODE-END*/;

function App() {
  const t = useTweaks ? useTweaks(TWEAK_DEFAULTS) : null;
  const tweaks = t ? t[0] : TWEAK_DEFAULTS;
  const setTweak = t ? t[1] : (() => {});

  const nav = useCallback((id) => {
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Handle deep-links from sub-pages: #configurations, #technology, etc.
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      // small delay so layout settles before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }, []);

  // Mesh intensity → CSS var
  useEffect(() => {
    const v = tweaks.meshIntensity === 'subtle' ? '0.35' : tweaks.meshIntensity === 'bold' ? '0.85' : '0.6';
    document.documentElement.style.setProperty('--mesh-opacity', v);
  }, [tweaks.meshIntensity]);

  // Accent palette
  useEffect(() => {
    const map = {
      'teal-yellow':    { primary: '#1ebec8', secondary: '#ffcc32' },
      'teal-only':      { primary: '#1ebec8', secondary: '#1ebec8' },
      'cyan-violet':    { primary: '#22d3ee', secondary: '#a78bfa' },
      'emerald-amber':  { primary: '#10b981', secondary: '#f59e0b' },
    };
    const c = map[tweaks.accent] || map['teal-yellow'];
    document.documentElement.style.setProperty('--zx-teal', c.primary);
    document.documentElement.style.setProperty('--zx-yellow', c.secondary);
    document.documentElement.style.setProperty('--zx-signal', c.primary);
    document.documentElement.style.setProperty('--zx-energy', c.secondary);
  }, [tweaks.accent]);

  return (
    <>
      <Navbar onNav={nav} />
      <main>
        <Hero onNav={nav} headlineWord={tweaks.headlineWord} />
        <PartnerStrip />
        <Technology />
        <Configurations />
        <Process />
        <Applications />
        <CarbonCredits />
        <ActiveProjects />
        <Stories />
        <Company />
        <Pathways />
        <Contact />
      </main>
      <Footer />

      {typeof TweaksPanel !== 'undefined' && (
        <TweaksPanel title="Tweaks">
          <TweakSection title="Visual">
            <TweakRadio label="Accent" value={tweaks.accent} onChange={v => setTweak('accent', v)}
              options={[
                { value: 'teal-yellow', label: 'Brand' },
                { value: 'teal-only', label: 'Teal' },
                { value: 'cyan-violet', label: 'Cyan/Violet' },
                { value: 'emerald-amber', label: 'Emerald/Amber' },
              ]} />
            <TweakRadio label="Mesh" value={tweaks.meshIntensity} onChange={v => setTweak('meshIntensity', v)}
              options={[
                { value: 'subtle', label: 'Subtle' },
                { value: 'medium', label: 'Medium' },
                { value: 'bold', label: 'Bold' },
              ]} />
          </TweakSection>
        </TweaksPanel>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
