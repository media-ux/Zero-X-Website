// stories.jsx — unified video stories hub: 3 videos, featured player + selectable cards
// Replaces the standalone Research section. MFC R&D partner gets a spotlight bar below.

function Stories() {
  const videos = [
    {
      id: 'Vxe9oF7-cLQ',
      eyebrow: 'Mission · Impact',
      eyebrowColor: 'yellow',
      title: '10 reasons Zero-X impacts the world',
      sub: 'From landfill diversion to off-grid electrification — the case for industrial clean energy at scale.',
      role: 'Zero-X · Mission feature',
      duration: '6 MIN',
      kind: 'MISSION',
    },
    {
      id: 'DcxyhE07bNw',
      eyebrow: 'R&D Partner · Germany',
      eyebrowColor: 'teal',
      title: 'Waste-to-Fuel-Cell research with MFC',
      sub: 'MFC Multi Fuel Conversion GmbH converts unrecyclable waste directly into electricity via solid-oxide fuel cells.',
      role: 'MFC · Leipzig, DE',
      duration: '8 MIN',
      kind: 'R&D BRIEF',
    },
    {
      id: 'vWtYQt8n96g',
      eyebrow: 'Climate Voices',
      eyebrowColor: 'teal',
      title: 'Interview · Renat Heuberger',
      sub: 'In conversation with the founder of South Pole — one of the world\'s leading climate impact consultancies.',
      role: 'Southpole · Zurich, CH',
      duration: '12 MIN',
      kind: 'INTERVIEW',
    },
  ];

  const [active, setActive] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  React.useEffect(() => { setPlaying(false); }, [active]);

  const v = videos[active];
  const thumb = `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`;
  const playerRef = React.useRef(null);

  const selectVideo = (i) => {
    setActive(i);
    if (playerRef.current) {
      const top = playerRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="stories" className="zx-section" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <Mesh subtle />

      <div className="zx-wrap" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 56, alignItems: 'end', marginBottom: 56 }} className="zx-stories-head">
          <div>
            <Eyebrow>Stories &amp; Voices</Eyebrow>
            <h2 className="zx-h1">
              The Zero-X story, in the words of <GradText>partners, founders, and engineers.</GradText>
            </h2>
          </div>
          <div>
            <p className="zx-lede">
              Mission briefings, third-party interviews, and deep technical features. Hand-picked footage on how the X-150 platform is reshaping industrial clean energy.
            </p>
          </div>
        </div>

        {/* Featured player */}
        <div ref={playerRef} style={{ position: 'relative' }}>
          <FeaturedPlayer
            video={v}
            thumb={thumb}
            playing={playing}
            onPlay={() => setPlaying(true)}
          />
        </div>

        {/* Video card selector */}
        <div style={{ marginTop: 48 }}>
          <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span>WATCH NEXT</span>
            <span style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
            <span>{active + 1} / {videos.length}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {videos.map((vid, i) => (
              <VideoCard key={vid.id} video={vid} active={i === active} onClick={() => selectVideo(i)} />
            ))}
          </div>
        </div>

        {/* MFC R&D Partner spotlight */}
        <MfcPartnerSpotlight />
      </div>

      <style>{`
        @media (max-width: 920px) {
          .zx-stories-head { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}

function FeaturedPlayer({ video, thumb, playing, onPlay }) {
  return (
    <div style={{
      position: 'relative',
      borderRadius: 28,
      overflow: 'hidden',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
      border: '1px solid rgba(255,255,255,0.10)',
      padding: 14,
      boxShadow: '0 40px 100px -20px rgba(0,0,0,0.8), 0 0 80px -30px rgba(30,190,200,0.30), inset 0 1px 0 rgba(255,255,255,0.06)',
    }}>
      {/* Console-style topbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 16px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#ff5f57', opacity: 0.6 }} />
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#febc2e', opacity: 0.6 }} />
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#28c840', opacity: 0.6 }} />
        </div>
        <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>
          ZERO-X · {video.kind} · {video.duration}
        </div>
        <div className="zx-mono" style={{ color: 'rgba(30,190,200,0.7)', fontSize: 11, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="play" size={10} /> HD
        </div>
      </div>

      <div style={{
        position: 'relative',
        aspectRatio: '16 / 9',
        borderRadius: 18,
        overflow: 'hidden',
        background: '#000',
      }}>
        {!playing ? (
          <>
            <img src={thumb} alt={video.title} key={video.id} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(1,14,16,0.12) 0%, rgba(1,14,16,0.55) 100%)' }} />

            {/* Top-left chip */}
            <div style={{ position: 'absolute', top: 24, left: 24 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '8px 14px', borderRadius: 999,
                background: 'rgba(1,14,16,0.78)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${video.eyebrowColor === 'yellow' ? 'rgba(255,204,50,0.4)' : 'rgba(30,190,200,0.35)'}`,
                font: '600 11px var(--zx-font-body)', letterSpacing: '0.14em', textTransform: 'uppercase',
                color: video.eyebrowColor === 'yellow' ? 'var(--zx-yellow)' : 'var(--zx-teal)',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: '#ff3b30', boxShadow: '0 0 10px #ff3b30' }} />
                {video.eyebrow}
              </span>
            </div>

            {/* Title overlay */}
            <div style={{ position: 'absolute', left: 32, right: 32, bottom: 28, maxWidth: 720 }}>
              <div className="zx-mono" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 10, fontSize: 11 }}>
                {video.role}
              </div>
              <h3 style={{ font: '700 clamp(22px, 2.6vw, 38px)/1.15 var(--zx-font-body)', color: '#fff', letterSpacing: '-0.02em', margin: 0, textWrap: 'balance' }}>
                {video.title}
              </h3>
              <p style={{ font: '400 15px/1.55 var(--zx-font-body)', color: 'rgba(255,255,255,0.75)', marginTop: 12, maxWidth: 560 }}>
                {video.sub}
              </p>
            </div>

            {/* Play button */}
            <button
              onClick={onPlay}
              aria-label="Play video"
              style={{
                position: 'absolute', top: '50%', right: 48, transform: 'translateY(-50%)',
                width: 88, height: 88, borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(30,190,200,0.92)',
                backdropFilter: 'blur(20px)',
                color: '#02191d',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 0 8px rgba(30,190,200,0.15), 0 0 60px rgba(30,190,200,0.45), inset 0 1px 0 rgba(255,255,255,0.4)',
                transition: 'all 280ms var(--zx-ease)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
                e.currentTarget.style.background = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                e.currentTarget.style.background = 'rgba(30,190,200,0.92)';
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4" /></svg>
            </button>
          </>
        ) : (
          <iframe
            key={video.id}
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          />
        )}
      </div>
    </div>
  );
}

function VideoCard({ video, active, onClick }) {
  const thumb = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
  const accent = video.eyebrowColor === 'yellow' ? 'var(--zx-yellow)' : 'var(--zx-teal)';
  return (
    <button onClick={onClick} className="zx-video-card" style={{
      textAlign: 'left',
      padding: 0,
      border: `1px solid ${active ? 'rgba(30,190,200,0.45)' : 'rgba(255,255,255,0.08)'}`,
      borderRadius: 18,
      background: active ? 'rgba(30,190,200,0.05)' : 'rgba(255,255,255,0.02)',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 300ms var(--zx-ease)',
      boxShadow: active ? 'inset 0 0 60px rgba(30,190,200,0.08)' : 'none',
      fontFamily: 'inherit',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', background: '#000' }}>
        <img src={thumb} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: active ? 1 : 0.8, transition: 'opacity 300ms' }}
          onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(1,14,16,0.1) 0%, rgba(1,14,16,0.7) 100%)' }} />

        {/* duration chip */}
        <div style={{ position: 'absolute', top: 12, right: 12, padding: '4px 8px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)', borderRadius: 6, font: '600 10.5px var(--zx-font-mono)', color: '#fff', letterSpacing: '0.05em' }}>
          {video.duration}
        </div>

        {/* play indicator */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 48, height: 48, borderRadius: 999,
          background: active ? accent : 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: active ? '#02191d' : '#fff',
          transition: 'all 300ms var(--zx-ease)',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4" /></svg>
        </div>

        {/* eyebrow */}
        <div style={{ position: 'absolute', bottom: 12, left: 12 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '4px 10px', borderRadius: 999,
            background: 'rgba(1,14,16,0.78)', backdropFilter: 'blur(8px)',
            border: `1px solid ${accent === 'var(--zx-yellow)' ? 'rgba(255,204,50,0.35)' : 'rgba(30,190,200,0.35)'}`,
            font: '700 9.5px var(--zx-font-body)', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: accent,
          }}>
            {video.eyebrow}
          </span>
        </div>
      </div>

      <div style={{ padding: 20 }}>
        <h4 style={{ font: '700 16px/1.3 var(--zx-font-body)', color: '#fff', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
          {video.title}
        </h4>
        <p style={{ font: '400 13px/1.5 var(--zx-font-body)', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
          {video.role}
        </p>
      </div>
    </button>
  );
}

function MfcPartnerSpotlight() {
  return (
    <div style={{
      marginTop: 80,
      padding: 32,
      borderRadius: 20,
      background: 'linear-gradient(110deg, rgba(30,190,200,0.06), rgba(255,204,50,0.03) 60%, transparent)',
      border: '1px solid rgba(30,190,200,0.20)',
      display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)', gap: 32, alignItems: 'center',
    }} className="zx-mfc-bar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ width: 56, height: 56, borderRadius: 14, background: 'linear-gradient(135deg, rgba(30,190,200,0.25), rgba(255,204,50,0.20))', border: '1px solid rgba(30,190,200,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--zx-teal)', flexShrink: 0 }}>
          <Icon name="factory" size={24} />
        </div>
        <div>
          <div className="zx-mono" style={{ color: 'rgba(255,204,50,1)', fontSize: 10, marginBottom: 4 }}>R&amp;D PARTNER · GERMANY</div>
          <div style={{ font: '700 18px var(--zx-font-body)', color: '#fff', marginBottom: 2 }}>MFC Multi Fuel Conversion GmbH</div>
          <div style={{ font: '400 13px var(--zx-font-body)', color: 'rgba(255,255,255,0.55)' }}>Leipzig · Engineering & research HQ</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
        {[
          ['17+', 'Years R&D'],
          ['3', 'EU programs'],
          ['BMWK', 'Co-funded'],
          ['TU Zittau', 'Academic partner'],
        ].map(([v, l], i) => (
          <div key={i} style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: 16 }}>
            <div style={{ font: '600 22px var(--zx-font-display)', color: '#fff', lineHeight: 1 }}>{v}</div>
            <div className="zx-kpi-label" style={{ marginTop: 4, fontSize: 10 }}>{l}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 720px) {
          .zx-mfc-bar { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </div>
  );
}

window.Stories = Stories;
