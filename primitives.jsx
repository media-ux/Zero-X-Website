// primitives.jsx — shared components, icons, ambient backdrops
// Lucide-style 2px stroke icons used across the page.



function Eyebrow({ children, color }) {
  return <p className={"zx-eyebrow" + (color === 'yellow' ? ' zx-eyebrow--yellow' : '')}>{children}</p>;
}

function Pill({ children, dot = true }) {
  return (
    <span className="zx-pill">
      {dot && <span className="zx-pill-dot" />}
      {children}
    </span>
  );
}

function GradText({ children, variant }) {
  return <span className={"zx-grad-text" + (variant === 'yellow' ? ' zx-grad-text--yellow' : '')}>{children}</span>;
}

function Button({ children, variant = 'primary', size = 'md', onClick, icon = true, type = 'button', href, asChild }) {
  const cls = ['zx-btn', `zx-btn--${variant}`, size === 'lg' ? 'zx-btn--lg' : size === 'sm' ? 'zx-btn--sm' : ''].filter(Boolean).join(' ');
  const content = (
    <>
      {children}
      {icon && <span className="zx-btn-arrow">→</span>}
    </>
  );
  if (href) return <a className={cls} href={href} onClick={onClick}>{content}</a>;
  return <button className={cls} type={type} onClick={onClick}>{content}</button>;
}

function Mesh({ subtle }) {
  return (
    <>
      <div className="zx-mesh" style={{ '--mesh-opacity': subtle ? 0.4 : 0.75 }} />
      <div className="zx-mesh-third" style={{ opacity: subtle ? 0.4 : 0.7 }} />
    </>
  );
}

function GridBg() {
  return <div className="zx-grid-bg" aria-hidden="true" />;
}

function Divider() {
  return <hr className="zx-divider" />;
}

// ---------- ICONS (Lucide-style, 2px stroke) ----------
function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 2 }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z" />,
    gauge: <><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></>,
    box: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
    leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6" /></>,
    check: <><polyline points="20 6 9 17 4 12" /></>,
    arrow: <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></>,
    arrowDown: <><line x1="12" y1="5" x2="12" y2="19" /><polyline points="5 12 12 19 19 12" /></>,
    mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
    pin: <><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
    server: <><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></>,
    pickaxe: <><path d="M14 5a2.47 2.47 0 0 0-2.5-2.5A2.47 2.47 0 0 0 9 5l.93 6.97L14 8z" /><path d="M2 22l7-7" /><path d="M20.24 5.57a2.47 2.47 0 0 0-3.48-.02l-7.76 7.8 3.5 3.5 7.74-7.8a2.47 2.47 0 0 0 0-3.48z" /></>,
    droplet: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />,
    coffee: <><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></>,
    factory: <><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" /><path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" /></>,
    award: <><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    recycle: <><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" /><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" /><path d="m14 16-3 3 3 3" /><path d="M8.293 13.596 7.196 9.5 3.1 10.598" /><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" /><path d="m13.378 9.633 4.096 1.098 1.097-4.096" /></>,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
    menu: <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>,
    close: <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>,
    arrowUpRight: <><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></>,
    chevronRight: <polyline points="9 18 15 12 9 6" />,
    play: <polygon points="5 3 19 12 5 21 5 3" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
    activity: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    layers: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
    bolt: <><path d="M13 2L4.09 12.97a.5.5 0 0 0 .39.83H10l-1 8 9.42-11.06a.5.5 0 0 0-.4-.82H14l1-8z" /></>,
    sparkles: <><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" /></>,
  };
  return <svg {...p}>{paths[name] || null}</svg>;
}

function IconTile({ name, size = 'md' }) {
  const dim = size === 'lg' ? 56 : 48;
  return (
    <div className="zx-icon-tile" style={{ width: dim, height: dim }}>
      <Icon name={name} size={size === 'lg' ? 26 : 22} />
    </div>
  );
}

Object.assign(window, { Eyebrow, Pill, GradText, Button, Mesh, GridBg, Divider, Icon, IconTile });
