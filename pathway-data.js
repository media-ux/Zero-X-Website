// pathway-data.js — content for the two engagement pathways:
//   1) RESEARCH  → research.html  (academic collaboration)
//   2) PARTNERS  → partners.html  (commercial / strategic partnership)
// Plus content for the carbon credits revenue section on the landing.

window.ZX_PATHWAYS = {
  research: {
    id: 'research',
    code: 'X-150 · RESEARCH',
    eyebrow: 'Research & Innovation',
    name: 'Research Collaboration',
    tagline: 'Push the boundaries of thermochemical conversion.',
    oneline: 'The X-150 is a heavily-instrumented industrial testbed for high-ash biomass conversion, catalytic tar reforming, and AI-driven process optimization. We invite visionary academic partners to co-author the future of decarbonized energy.',
    primary: '#1ebec8',
    primaryRgb: '30, 190, 200',
    accent: '#6fe8d6',
    secondary: '#ffcc32',
    secondaryRgb: '255, 204, 50',
    gradient: 'linear-gradient(135deg, #1ebec8 0%, #6fe8d6 50%, #b3f5ff 100%)',
    gradientText: 'linear-gradient(110deg, #b3f5ff 0%, #6fe8d6 50%, #1ebec8 110%)',
    icon: 'activity',
    kpis: [
      ['3,000', '+ hrs', 'Empirical test data'],
      ['170', 'm²/g', 'Biochar BET surface area'],
      ['99.98', '%', 'Tar conversion efficiency'],
      ['35', '%', 'Ash content tolerated'],
    ],
    cta: { primary: 'Submit a research proposal', secondary: 'Download data brief' },

    pillars: [
      {
        n: '1.1',
        title: 'Robust gasification of complex feedstocks',
        innovation: 'Active mechanical poker + water-cooled finger grate inside the >1300 °C oxidation core.',
        implication: 'Stable gasification of feedstocks with up to 35% ash content — straw, digestate, MSW. A first-of-kind testbed for ash phase-transition thermodynamics.',
        icon: 'flame',
      },
      {
        n: '1.2',
        title: 'High-efficiency catalytic tar reforming',
        innovation: 'CATATOR reformer — multi-layer Ni-Ca/γ-Al₂O₃ catalyst at 850 °C. 99.98% tar conversion, tolerates 20 ppm H₂S.',
        implication: 'Real-world environment for Langmuir-Hinshelwood kinetics, catalyst deactivation studies (sintering, coking, sulfur poisoning), and high-temp materials science.',
        icon: 'activity',
      },
      {
        n: '1.3',
        title: 'AI-assisted process modeling',
        innovation: 'Neural networks + COMSOL Multiphysics (k-ε turbulence, Maxwell-Stefan diffusion) — 50% better predictive accuracy than stoichiometry.',
        implication: 'Ground for applied ML / digital twins, predictive maintenance, autonomous control logic, integration of physics-informed neural networks.',
        icon: 'sparkles',
      },
      {
        n: '1.4',
        title: 'Advanced biochar characterization',
        innovation: '170 m²/g BET surface area · 53% micropores · FTIR confirms –OH/C-O functionality · 67.6% C, 15.8% K, 3.4% Ca composition.',
        implication: 'Ideal candidate for CCS, methane adsorption, industrial filtration. Hydrophilic surface + high K/Ca content opens agri-research in soil amendment.',
        icon: 'layers',
      },
    ],

    avenues: [
      { icon: 'leaf',    t: 'Advanced biochar applications', d: 'CCS, gas filtration, crop yield, lightweight construction additives — built on the stable 170 m²/g surface.' },
      { icon: 'target',  t: 'Ash & slag chemistry',         d: 'Elemental transformations (C/H/N/S/Cl), mineralogical phase changes of high-silica and high-alkali feedstocks.' },
      { icon: 'sparkles',t: 'Next-generation catalysts',    d: 'Validate novel, lower-cost, higher-resilience catalyst formulations under empirical industrial conditions.' },
      { icon: 'gauge',   t: 'Process integration & synthesis', d: 'Downstream Water-Gas Shift + Methanation optimization. Currently 78–81% net Carbon Conversion Efficiency.' },
      { icon: 'recycle', t: 'Carbon capture & utilization (CCU)', d: 'Leverage the high-purity CO₂ stream for chemical synthesis, long-term sequestration, e-fuels.' },
    ],

    offer: [
      { icon: 'layers',   t: 'Exhaustive datasets',        d: '3,000+ hours of test-run data, full P&ID structures, mass / energy Sankey balances.' },
      { icon: 'award',    t: 'Joint grant applications',   d: 'Co-PI on EU Horizon, BMWK, DFG, ERC proposals. Subsidized research project structuring.' },
      { icon: 'users',    t: 'PhD & post-doc fieldwork',   d: 'Hosted fieldwork at our Leipzig pilot facility and COMETHA Paris site.' },
      { icon: 'factory',  t: 'Instrumented testbed',       d: 'Physical 150 kg/h industrial prototype, fully sensorized for validating theoretical models.' },
    ],

    consortium: [
      { name: 'TU Zittau / Görlitz', role: 'Hochschule Zittau (HSZG)',                   country: 'Germany' },
      { name: 'EU Horizon · COMETHA',role: 'EU-funded Phase 2 demonstration consortium', country: 'EU' },
      { name: 'BMWK',                role: 'German Federal Ministry of Economics',       country: 'Germany' },
      { name: 'Syctom · SIAAP',      role: 'Paris municipal waste & water authorities',  country: 'France' },
    ],
  },

  partners: {
    id: 'partners',
    code: 'X-150 · COMMERCIAL',
    eyebrow: 'Strategic Partnerships · Worldwide',
    name: 'Strategic Partner',
    tagline: 'Waste liabilities, profitable assets.',
    oneline: 'The X-150 platform turns the most problematic waste streams — digestate, straw, MSW — into clean syngas, premium biochar, and carbon credits. We\u2019re seeking commercial partners, waste aggregators, and green-energy investors to deploy the next generation of profitable waste-recovery infrastructure.',
    primary: '#ffcc32',
    primaryRgb: '255, 204, 50',
    accent: '#ffd86b',
    secondary: '#1ebec8',
    secondaryRgb: '30, 190, 200',
    gradient: 'linear-gradient(135deg, #ffe08a 0%, #ffcc32 50%, #1ebec8 110%)',
    gradientText: 'linear-gradient(110deg, #ffe599 0%, #ffcc32 50%, #1ebec8 110%)',
    icon: 'target',
    kpis: [
      ['150', 'kg/h', 'Nominal throughput'],
      ['4', 'streams', 'Revenue per unit'],
      ['99.98', '%', 'Uptime engineering'],
      ['35', '%', 'Ash content tolerated'],
    ],
    cta: { primary: 'Open a partnership inquiry', secondary: 'Download commercial brief' },

    // Why X-150 — three core business-case pillars
    businessCase: [
      {
        n: '01',
        title: 'Eliminate disposal costs',
        body: 'High-ash biological waste (digestate, straw, MSW) carries escalating tipping fees. X-150 turns that liability into 150 kg/h of on-site energy generation — recurring fees disappear.',
        icon: 'recycle',
      },
      {
        n: '02',
        title: 'Multi-stream revenue',
        body: 'Each unit refines waste into discrete saleable commodities — syngas/power, hydrogen/methane, premium agricultural biochar, and carbon credits — stacked, not substituted.',
        icon: 'layers',
      },
      {
        n: '03',
        title: 'Superior reliability',
        body: 'Patented active poker + water-cooled grate eliminate slag agglomeration. SyngaPure reformer prevents tar fouling. Maintenance cycles measured in thousands of hours.',
        icon: 'shield',
      },
    ],

    // The 4 revenue streams (per unit)
    revenue: [
      { icon: 'bolt',     code: 'STREAM 01', t: 'Ultra-clean syngas',        d: 'Direct power generation via high-efficiency SOFCs or gas engines. Reduces grid dependency and lowers facility energy costs.' },
      { icon: 'droplet',  code: 'STREAM 02', t: 'Hydrogen / methane',        d: 'Syngas contains up to 35% hydrogen — primed for green H₂ sales or methanation for grid injection.' },
      { icon: 'leaf',     code: 'STREAM 03', t: 'Premium agricultural biochar', d: 'Chemically stable, highly porous (170 m²/g BET), rich in K & Ca. Sold as high-end soil amendment or construction aggregate.' },
      { icon: 'sparkles', code: 'STREAM 04', t: 'Carbon credits (CDR)',      d: 'Biochar = permanent carbon sequestration. Verified CDR credits trade at premium pricing — Frontier, Microsoft, Stripe-tier offtake.' },
    ],

    // Reliability advantages
    reliability: [
      {
        eyebrow: 'GUARANTEED',
        title: 'Zero slagging',
        body: 'Active poker system + water-cooled grate mechanically crush slag in real time — completely preventing the blockages that cause costly shutdowns in competing systems.',
        stat: '0',
        statUnit: 'unplanned shutdowns',
      },
      {
        eyebrow: 'CERTIFIED',
        title: '99.98% tar eradication',
        body: 'SyngaPure catalytic reformer protects downstream equipment from tar fouling — continuous operation, maintenance pushed out to thousands of hours.',
        stat: '99.98',
        statUnit: '% conversion',
      },
    ],

    // Architecture pillars
    architecture: [
      { icon: 'box',     t: 'Modular containerization', d: 'Pre-assembled in modified shipping containers. Minimal civil engineering, drastically reduced install time, rapid deployment.' },
      { icon: 'layers',  t: 'Fleet scalability',         d: 'Add parallel X-150 modules as waste or energy demand grows — no mega-plant CapEx commitment.' },
      { icon: 'sparkles',t: 'AI-driven automation',     d: 'Real-time AI modeling + MRU gas analysis autonomously adjust to varying feedstock — minimal specialist labor.' },
    ],

    // ESG framing
    esg: [
      { icon: 'recycle', t: 'Carbon sequestration',     d: 'Stable biochar permanently sequesters carbon that would otherwise decompose into atmospheric methane or CO₂.' },
      { icon: 'leaf',    t: 'Fossil fuel displacement', d: 'Replaces oil, gas, coal, and diesel with closed-loop, on-site renewable energy — measurable Scope 1 reductions.' },
      { icon: 'shield',  t: 'COMETHA-validated',        d: 'Exhaustively tested under the EU\u2019s stringent COMETHA Phase 2 framework — future-regulation compliant.' },
    ],

    // Audience tags
    audiences: [
      'Industrial operators', 'Waste aggregators', 'Green-energy investors',
      'Municipalities', 'Utilities', 'Project developers',
      'Hospitals & healthcare', 'Mining operators', 'Hyperscale data centers',
    ],
  },
};

// =================== CARBON CREDITS CONTENT ===================
window.ZX_CARBON_CREDITS = {
  eyebrow: 'Revenue Stream · Carbon Credits',
  headline: 'Our biochar is a permanent carbon sink.',
  highlight: 'We sell credits for every ton.',
  lede: 'Carbon credits are tradable certificates — each one representing 1 tonne of CO₂ that has been removed from the atmosphere or prevented from being emitted. Zero-X generates both. Verified credits are sold to corporates with net-zero commitments, on top of every kilowatt-hour and ton of biochar we already sell.',

  explainer: [
    {
      n: '01',
      t: 'Carbon removal (CDR)',
      d: 'Biomass absorbs CO₂ as it grows. Gasification locks that carbon into stable biochar — a solid that sits in soil or subsoil for 100 to 1,000+ years. That is permanent removal, not just offset accounting.',
    },
    {
      n: '02',
      t: 'Avoided emissions',
      d: 'Every kWh and kWth of clean energy displaces grid electricity, natural gas, or diesel. Every ton of waste diverted from landfill prevents methane release. Both generate avoidance credits.',
    },
    {
      n: '03',
      t: 'Verified and sold',
      d: 'Credits are certified by independent registries — European Biochar Certificate (EBC), Puro.earth, Verra — and sold to corporates with net-zero commitments. Frontier, Microsoft, Stripe-tier buyers pay $130–$400 per tonne of CO₂eq for premium biochar credits.',
    },
  ],

  // Per-unit annualized metrics (illustrative)
  perUnit: [
    { label: 'Biochar produced',          value: '~150',   unit: 't/year',     sub: 'per X-150 unit' },
    { label: 'CO₂ permanently sequestered', value: '~400', unit: 'tCO₂/year', sub: '~2.7 tCO₂ per t biochar' },
    { label: 'Premium CDR pricing',       value: '$130–400', unit: '/tCO₂eq',  sub: 'EBC / Puro.earth certified' },
    { label: 'Credit revenue (per unit)', value: '$50–160',  unit: 'k/year',  sub: 'Stacked on energy sales' },
  ],

  registries: ['European Biochar Certificate (EBC)', 'Puro.earth', 'Verra', 'Gold Standard'],

  why: {
    head: 'Why this matters as a revenue stream.',
    body: 'Carbon credits don\u2019t replace energy revenue — they sit on top. The same X-150 unit that earns you ' +
          'electricity, heat or cooling income simultaneously generates verifiable CDR credits with premium pricing. ' +
          'For partners deploying multiple units, credit revenue alone can cover the operational cost of the entire fleet.',
  },
};
