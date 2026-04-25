/**
 * Creates the full 3-tier design token system as Figma Variables.
 * Token structure: core → semantic (light/dark) → components
 *
 * Run: FIGMA_TOKEN=<token> node scripts/figma-variables.mjs
 *
 * Requires a Figma token with scopes:
 *   file_variables:read + file_variables:write
 * (Only available via OAuth 2.0 — not Personal Access Tokens)
 *
 * Alternative: use Tokens Studio plugin with tokens.json
 */

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY    = 'O8f5ggP1nGp65vd0awOthS';
const BASE_URL    = `https://api.figma.com/v1/files/${FILE_KEY}/variables`;

if (!FIGMA_TOKEN) {
  console.error('Missing FIGMA_TOKEN env var.\nRun: FIGMA_TOKEN=your_token node scripts/figma-variables.mjs');
  process.exit(1);
}

// ─── helpers ──────────────────────────────────────────────────────────────────

function hex(h) {
  const c = h.replace('#', '');
  return { r: parseInt(c.slice(0,2),16)/255, g: parseInt(c.slice(2,4),16)/255, b: parseInt(c.slice(4,6),16)/255, a: 1 };
}

function alias(id) { return { type: 'VARIABLE_ALIAS', id }; }

async function post(payload) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'X-Figma-Token': FIGMA_TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok || data.error) { console.error('API error:', JSON.stringify(data, null, 2)); process.exit(1); }
  return data;
}

function buildIdMap(response) {
  const map = {};
  const t2r = response.meta?.tempIdToRealId ?? {};
  for (const [k, v] of Object.entries(t2r)) map[k] = v;
  if (Object.keys(map).length === 0 && response.meta?.variables) {
    for (const [k, v] of Object.entries(response.meta.variables)) map[k] = v.id ?? v;
  }
  return map;
}

// ─── tier 1 — core / colors ───────────────────────────────────────────────────

const NEUTRAL = [
  ['n50',  '#F4F4F9'], ['n100', '#EBEBF3'], ['n200', '#D3D4E4'], ['n300', '#ADAFCC'],
  ['n400', '#8084B0'], ['n500', '#606597'], ['n600', '#4C4F7D'], ['n700', '#3E4066'],
  ['n800', '#363856'], ['n900', '#313249'], ['n950', '#060609'],
];
const GREEN = [
  ['g50',  '#F8FFE6'], ['g100', '#EEFEC9'], ['g200', '#DDFB9B'], ['g300', '#C4F55D'],
  ['g400', '#A4EF2C'], ['g500', '#8BD50D'], ['g600', '#6AAA06'], ['g700', '#51810A'],
  ['g800', '#42660E'], ['g900', '#385611'], ['g950', '#1B3003'],
];
const CREAM = [
  ['c50',  '#FAFAEC'], ['c100', '#EDF0BD'], ['c200', '#E8EAA5'], ['c300', '#DADD70'],
  ['c400', '#CDCF46'], ['c500', '#B9BA30'], ['c600', '#9A9725'], ['c700', '#797320'],
  ['c800', '#635D20'], ['c900', '#554F20'], ['c950', '#302C0E'],
];
const DANGER = [
  ['d50',  '#FEF2F2'], ['d100', '#FEE2E2'], ['d200', '#FECACA'], ['d300', '#FCA5A5'],
  ['d400', '#F87171'], ['d500', '#EF4444'], ['d600', '#DC2626'], ['d700', '#B91C1C'],
  ['d800', '#991B1B'], ['d900', '#7F1D1D'], ['d950', '#450A0A'],
];
const WARNING = [
  ['w50',  '#FFFBEB'], ['w100', '#FEF3C7'], ['w200', '#FDE68A'], ['w300', '#FCD34D'],
  ['w400', '#FBBF24'], ['w500', '#F59E0B'], ['w600', '#D97706'], ['w700', '#B45309'],
  ['w800', '#92400E'], ['w900', '#78350F'], ['w950', '#451A03'],
];
const SUCCESS = [
  ['s50',  '#F0FDF4'], ['s100', '#DCFCE7'], ['s200', '#BBF7D0'], ['s300', '#86EFAC'],
  ['s400', '#4ADE80'], ['s500', '#22C55E'], ['s600', '#16A34A'], ['s700', '#15803D'],
  ['s800', '#166534'], ['s900', '#14532D'], ['s950', '#052E16'],
];
const BASE = [
  ['b_black',      '#060609'],
  ['b_white',      '#FAFAFA'],
  ['b_pure_black', '#000000'],
  ['b_pure_white', '#FFFFFF'],
];

// ─── tier 1 — core / numbers ──────────────────────────────────────────────────

const SPACING = [
  ['sp0',  0],  ['sp1',  4],  ['sp2',  8],  ['sp3',  12], ['sp4',  16],
  ['sp5',  20], ['sp6',  24], ['sp7',  32], ['sp8',  40], ['sp9',  48],
  ['sp10', 56], ['sp11', 64], ['sp12', 80], ['sp13', 96], ['sp14', 128], ['sp15', 192],
];
const RADIUS = [
  ['r_none', 0], ['r_xs', 2], ['r_sm', 4], ['r_md', 8],
  ['r_lg', 12],  ['r_xl', 16], ['r_2xl', 24], ['r_full', 9999],
];
const BORDER_WIDTH = [['bw_none', 0], ['bw_thin', 1], ['bw_medium', 2]];

// ─── pass 1 — core primitives ─────────────────────────────────────────────────

async function createPrimitives() {
  console.log('Pass 1 — Core primitives (colors + dimensions)…');

  const allColors = [...NEUTRAL, ...GREEN, ...CREAM, ...DANGER, ...WARNING, ...SUCCESS, ...BASE];

  const res = await post({
    variableCollections: [
      { action: 'CREATE', id: 'col_color', name: '🎨 Core / Colors',     initialModeId: 'mode_color'  },
      { action: 'CREATE', id: 'col_dim',   name: '📐 Core / Dimensions', initialModeId: 'mode_dim'    },
    ],
    variableModes: [
      { action: 'CREATE', id: 'mode_color', name: 'Default', variableCollectionId: 'col_color' },
      { action: 'CREATE', id: 'mode_dim',   name: 'Default', variableCollectionId: 'col_dim'   },
    ],
    variables: [
      // neutral scale
      ...NEUTRAL.map(([t]) => ({ action:'CREATE', id:t, name:`neutral/${t.slice(1)}`, resolvedType:'COLOR', variableCollectionId:'col_color' })),
      // green scale
      ...GREEN.map(([t]) => ({ action:'CREATE', id:t, name:`green/${t.slice(1)}`, resolvedType:'COLOR', variableCollectionId:'col_color' })),
      // cream scale
      ...CREAM.map(([t]) => ({ action:'CREATE', id:t, name:`cream/${t.slice(1)}`, resolvedType:'COLOR', variableCollectionId:'col_color' })),
      // status
      ...DANGER.map(([t])  => ({ action:'CREATE', id:t, name:`status/danger/${t.slice(1)}`,  resolvedType:'COLOR', variableCollectionId:'col_color' })),
      ...WARNING.map(([t]) => ({ action:'CREATE', id:t, name:`status/warning/${t.slice(1)}`, resolvedType:'COLOR', variableCollectionId:'col_color' })),
      ...SUCCESS.map(([t]) => ({ action:'CREATE', id:t, name:`status/success/${t.slice(1)}`, resolvedType:'COLOR', variableCollectionId:'col_color' })),
      // base
      ...BASE.map(([t]) => ({ action:'CREATE', id:t, name:`base/${t.slice(2)}`, resolvedType:'COLOR', variableCollectionId:'col_color' })),
      // spacing
      ...SPACING.map(([t]) => ({ action:'CREATE', id:t, name:`spacing/${t.slice(2)}`,       resolvedType:'FLOAT', variableCollectionId:'col_dim' })),
      // radius
      ...RADIUS.map(([t])  => ({ action:'CREATE', id:t, name:`border-radius/${t.slice(2)}`, resolvedType:'FLOAT', variableCollectionId:'col_dim' })),
      // border width
      ...BORDER_WIDTH.map(([t]) => ({ action:'CREATE', id:t, name:`border-width/${t.slice(3)}`, resolvedType:'FLOAT', variableCollectionId:'col_dim' })),
    ],
    variableValues: [
      ...allColors.map(([t, h]) => ({ variableId:t, modeId:'mode_color', value: hex(h) })),
      ...SPACING.map(([t, v])      => ({ variableId:t, modeId:'mode_dim', value: v })),
      ...RADIUS.map(([t, v])       => ({ variableId:t, modeId:'mode_dim', value: v })),
      ...BORDER_WIDTH.map(([t, v]) => ({ variableId:t, modeId:'mode_dim', value: v })),
    ],
  });

  const ids = buildIdMap(res);
  console.log(`  ✓ ${Object.keys(ids).length} primitive variables created`);
  return ids;
}

// ─── pass 2 — semantic tokens (light + dark modes) ────────────────────────────

async function createSemantic(prim) {
  console.log('\nPass 2 — Semantic layer (Light + Dark modes)…');

  const col = (t) => alias(prim[t]);

  const lightDefs = [
    // background
    ['s_bg_default',       'color/background/default',       col('b_white'),  'COLOR'],
    ['s_bg_subtle',        'color/background/subtle',        col('n50'),      'COLOR'],
    ['s_bg_inverse',       'color/background/inverse',       col('n950'),     'COLOR'],
    ['s_bg_brand',         'color/background/brand',         col('g500'),     'COLOR'],
    ['s_bg_brand_subtle',  'color/background/brand-subtle',  col('g50'),      'COLOR'],
    // surface
    ['s_sf_default',       'color/surface/default',          col('b_pure_white'), 'COLOR'],
    ['s_sf_raised',        'color/surface/raised',           col('n50'),      'COLOR'],
    ['s_sf_overlay',       'color/surface/overlay',          col('n100'),     'COLOR'],
    ['s_sf_sunken',        'color/surface/sunken',           col('c50'),      'COLOR'],
    // text
    ['s_tx_primary',       'color/text/primary',             col('n950'),     'COLOR'],
    ['s_tx_secondary',     'color/text/secondary',           col('n700'),     'COLOR'],
    ['s_tx_tertiary',      'color/text/tertiary',            col('n500'),     'COLOR'],
    ['s_tx_disabled',      'color/text/disabled',            col('n400'),     'COLOR'],
    ['s_tx_inverse',       'color/text/inverse',             col('b_white'),  'COLOR'],
    ['s_tx_brand',         'color/text/brand',               col('g700'),     'COLOR'],
    ['s_tx_on_brand',      'color/text/on-brand',            col('n950'),     'COLOR'],
    // border
    ['s_bd_subtle',        'color/border/subtle',            col('n200'),     'COLOR'],
    ['s_bd_default',       'color/border/default',           col('n300'),     'COLOR'],
    ['s_bd_strong',        'color/border/strong',            col('n500'),     'COLOR'],
    ['s_bd_brand',         'color/border/brand',             col('g500'),     'COLOR'],
    // interactive
    ['s_int_pri_bg',       'color/interactive/primary-bg',       col('n950'),  'COLOR'],
    ['s_int_pri_fg',       'color/interactive/primary-fg',       col('b_white'), 'COLOR'],
    ['s_int_pri_bghov',    'color/interactive/primary-bg-hover', col('n800'),  'COLOR'],
    ['s_int_sec_fg',       'color/interactive/secondary-fg',     col('n950'),  'COLOR'],
    ['s_int_sec_bd',       'color/interactive/secondary-border', col('n300'),  'COLOR'],
    ['s_int_sec_bghov',    'color/interactive/secondary-bg-hover', col('n50'), 'COLOR'],
    ['s_int_br_bg',        'color/interactive/brand-bg',         col('g500'),  'COLOR'],
    ['s_int_br_fg',        'color/interactive/brand-fg',         col('n950'),  'COLOR'],
    ['s_int_br_bghov',     'color/interactive/brand-bg-hover',   col('g600'),  'COLOR'],
    // status
    ['s_st_dg_text',   'color/status/danger/text',    col('d700'), 'COLOR'],
    ['s_st_dg_bg',     'color/status/danger/bg',      col('d50'),  'COLOR'],
    ['s_st_dg_bd',     'color/status/danger/border',  col('d200'), 'COLOR'],
    ['s_st_dg_icon',   'color/status/danger/icon',    col('d500'), 'COLOR'],
    ['s_st_wn_text',   'color/status/warning/text',   col('w700'), 'COLOR'],
    ['s_st_wn_bg',     'color/status/warning/bg',     col('w50'),  'COLOR'],
    ['s_st_wn_bd',     'color/status/warning/border', col('w200'), 'COLOR'],
    ['s_st_wn_icon',   'color/status/warning/icon',   col('w500'), 'COLOR'],
    ['s_st_sc_text',   'color/status/success/text',   col('s700'), 'COLOR'],
    ['s_st_sc_bg',     'color/status/success/bg',     col('s50'),  'COLOR'],
    ['s_st_sc_bd',     'color/status/success/border', col('s200'), 'COLOR'],
    ['s_st_sc_icon',   'color/status/success/icon',   col('s500'), 'COLOR'],
  ];

  const darkDefs = [
    // background
    ['sd_bg_default',      'color/background/default',      col('n950'),     'COLOR'],
    ['sd_bg_subtle',       'color/background/subtle',       col('n900'),     'COLOR'],
    ['sd_bg_inverse',      'color/background/inverse',      col('b_white'),  'COLOR'],
    ['sd_bg_brand',        'color/background/brand',        col('g500'),     'COLOR'],
    ['sd_bg_brand_subtle', 'color/background/brand-subtle', col('g950'),     'COLOR'],
    // surface
    ['sd_sf_default',      'color/surface/default',         col('n900'),     'COLOR'],
    ['sd_sf_raised',       'color/surface/raised',          col('n800'),     'COLOR'],
    ['sd_sf_overlay',      'color/surface/overlay',         col('n700'),     'COLOR'],
    ['sd_sf_sunken',       'color/surface/sunken',          col('n950'),     'COLOR'],
    // text
    ['sd_tx_primary',      'color/text/primary',            col('b_white'),  'COLOR'],
    ['sd_tx_secondary',    'color/text/secondary',          col('n300'),     'COLOR'],
    ['sd_tx_tertiary',     'color/text/tertiary',           col('n500'),     'COLOR'],
    ['sd_tx_disabled',     'color/text/disabled',           col('n700'),     'COLOR'],
    ['sd_tx_inverse',      'color/text/inverse',            col('n950'),     'COLOR'],
    ['sd_tx_brand',        'color/text/brand',              col('g400'),     'COLOR'],
    ['sd_tx_on_brand',     'color/text/on-brand',           col('n950'),     'COLOR'],
    // border
    ['sd_bd_subtle',       'color/border/subtle',           col('n800'),     'COLOR'],
    ['sd_bd_default',      'color/border/default',          col('n700'),     'COLOR'],
    ['sd_bd_strong',       'color/border/strong',           col('n500'),     'COLOR'],
    ['sd_bd_brand',        'color/border/brand',            col('g500'),     'COLOR'],
    // interactive
    ['sd_int_pri_bg',      'color/interactive/primary-bg',       col('b_white'), 'COLOR'],
    ['sd_int_pri_fg',      'color/interactive/primary-fg',       col('n950'),    'COLOR'],
    ['sd_int_pri_bghov',   'color/interactive/primary-bg-hover', col('n200'),    'COLOR'],
    ['sd_int_sec_fg',      'color/interactive/secondary-fg',     col('b_white'), 'COLOR'],
    ['sd_int_sec_bd',      'color/interactive/secondary-border', col('b_white'), 'COLOR'],
    ['sd_int_sec_bghov',   'color/interactive/secondary-bg-hover', col('n800'), 'COLOR'],
    ['sd_int_br_bg',       'color/interactive/brand-bg',         col('g500'),   'COLOR'],
    ['sd_int_br_fg',       'color/interactive/brand-fg',         col('n950'),   'COLOR'],
    ['sd_int_br_bghov',    'color/interactive/brand-bg-hover',   col('g400'),   'COLOR'],
    // status
    ['sd_st_dg_text',  'color/status/danger/text',    col('d300'), 'COLOR'],
    ['sd_st_dg_bg',    'color/status/danger/bg',      col('d950'), 'COLOR'],
    ['sd_st_dg_bd',    'color/status/danger/border',  col('d800'), 'COLOR'],
    ['sd_st_dg_icon',  'color/status/danger/icon',    col('d400'), 'COLOR'],
    ['sd_st_wn_text',  'color/status/warning/text',   col('w300'), 'COLOR'],
    ['sd_st_wn_bg',    'color/status/warning/bg',     col('w950'), 'COLOR'],
    ['sd_st_wn_bd',    'color/status/warning/border', col('w800'), 'COLOR'],
    ['sd_st_wn_icon',  'color/status/warning/icon',   col('w400'), 'COLOR'],
    ['sd_st_sc_text',  'color/status/success/text',   col('s300'), 'COLOR'],
    ['sd_st_sc_bg',    'color/status/success/bg',     col('s950'), 'COLOR'],
    ['sd_st_sc_bd',    'color/status/success/border', col('s800'), 'COLOR'],
    ['sd_st_sc_icon',  'color/status/success/icon',   col('s400'), 'COLOR'],
  ];

  const res = await post({
    variableCollections: [
      { action: 'CREATE', id: 'col_sem', name: '🔤 Semantic', initialModeId: 'mode_light' },
    ],
    variableModes: [
      { action: 'CREATE', id: 'mode_light', name: 'Light', variableCollectionId: 'col_sem' },
      { action: 'CREATE', id: 'mode_dark',  name: 'Dark',  variableCollectionId: 'col_sem' },
    ],
    variables: [
      ...lightDefs.map(([t, name, , type]) => ({ action:'CREATE', id:t, name, resolvedType:type, variableCollectionId:'col_sem' })),
    ],
    variableValues: [
      ...lightDefs.map(([t, , val]) => ({ variableId:t, modeId:'mode_light', value: val })),
      ...darkDefs.map(([td, , val], i) => ({ variableId: lightDefs[i][0], modeId:'mode_dark', value: val })),
    ],
  });

  const ids = buildIdMap(res);
  const semIds = {};
  lightDefs.forEach(([t]) => { semIds[t] = ids[t]; });
  console.log(`  ✓ ${Object.keys(semIds).length} semantic variables (×2 modes)`);
  return semIds;
}

// ─── pass 3 — component tokens ────────────────────────────────────────────────

async function createComponents(prim, sem) {
  console.log('\nPass 3 — Component tokens…');

  const c = (t) => alias(sem[t]);
  const p = (t) => alias(prim[t]);

  const defs = [
    // button/primary
    ['cb_pri_bg',    'button/primary/background',       c('s_int_pri_bg'),    'COLOR'],
    ['cb_pri_fg',    'button/primary/foreground',       c('s_int_pri_fg'),    'COLOR'],
    ['cb_pri_hov',   'button/primary/background-hover', c('s_int_pri_bghov'), 'COLOR'],
    ['cb_pri_r',     'button/primary/radius',           p('r_full'),           'FLOAT'],
    ['cb_pri_px',    'button/primary/padding-x',        p('sp6'),              'FLOAT'],
    ['cb_pri_py',    'button/primary/padding-y',        p('sp2'),              'FLOAT'],
    // button/secondary
    ['cb_sec_fg',    'button/secondary/foreground',       c('s_int_sec_fg'),    'COLOR'],
    ['cb_sec_bd',    'button/secondary/border',           c('s_int_sec_bd'),    'COLOR'],
    ['cb_sec_hov',   'button/secondary/background-hover', c('s_int_sec_bghov'), 'COLOR'],
    ['cb_sec_r',     'button/secondary/radius',           p('r_full'),           'FLOAT'],
    ['cb_sec_px',    'button/secondary/padding-x',        p('sp6'),              'FLOAT'],
    ['cb_sec_py',    'button/secondary/padding-y',        p('sp2'),              'FLOAT'],
    // button/brand
    ['cb_br_bg',     'button/brand/background',       c('s_int_br_bg'),    'COLOR'],
    ['cb_br_fg',     'button/brand/foreground',       c('s_int_br_fg'),    'COLOR'],
    ['cb_br_hov',    'button/brand/background-hover', c('s_int_br_bghov'), 'COLOR'],
    ['cb_br_r',      'button/brand/radius',           p('r_full'),          'FLOAT'],
    // card
    ['cc_bg',        'card/background',   c('s_sf_default'),    'COLOR'],
    ['cc_bd',        'card/border',       c('s_bd_subtle'),     'COLOR'],
    ['cc_r',         'card/radius',       p('r_xl'),             'FLOAT'],
    ['cc_p',         'card/padding',      p('sp6'),              'FLOAT'],
    // input
    ['ci_bg',        'input/background',     c('s_sf_default'),  'COLOR'],
    ['ci_bd',        'input/border',         c('s_bd_default'),  'COLOR'],
    ['ci_bd_foc',    'input/border-focus',   c('s_bd_brand'),    'COLOR'],
    ['ci_tx',        'input/text',           c('s_tx_primary'),  'COLOR'],
    ['ci_ph',        'input/placeholder',    c('s_tx_tertiary'), 'COLOR'],
    ['ci_r',         'input/radius',         p('r_md'),           'FLOAT'],
    // badge/default
    ['cbdg_bg',      'badge/default/background', c('s_sf_raised'),   'COLOR'],
    ['cbdg_tx',      'badge/default/text',       c('s_tx_secondary'),'COLOR'],
    ['cbdg_bd',      'badge/default/border',     c('s_bd_subtle'),   'COLOR'],
    ['cbdg_r',       'badge/default/radius',     p('r_sm'),           'FLOAT'],
    // badge/danger
    ['cbdd_bg',      'badge/danger/background',  c('s_st_dg_bg'),    'COLOR'],
    ['cbdd_tx',      'badge/danger/text',        c('s_st_dg_text'),  'COLOR'],
    ['cbdd_bd',      'badge/danger/border',      c('s_st_dg_bd'),    'COLOR'],
    // badge/warning
    ['cbdw_bg',      'badge/warning/background', c('s_st_wn_bg'),    'COLOR'],
    ['cbdw_tx',      'badge/warning/text',       c('s_st_wn_text'),  'COLOR'],
    ['cbdw_bd',      'badge/warning/border',     c('s_st_wn_bd'),    'COLOR'],
    // badge/success
    ['cbds_bg',      'badge/success/background', c('s_st_sc_bg'),    'COLOR'],
    ['cbds_tx',      'badge/success/text',       c('s_st_sc_text'),  'COLOR'],
    ['cbds_bd',      'badge/success/border',     c('s_st_sc_bd'),    'COLOR'],
  ];

  await post({
    variableCollections: [
      { action: 'CREATE', id: 'col_comp', name: '🧩 Components', initialModeId: 'mode_comp' },
    ],
    variableModes: [
      { action: 'CREATE', id: 'mode_comp', name: 'Default', variableCollectionId: 'col_comp' },
    ],
    variables: defs.map(([t, name, , type]) => ({ action:'CREATE', id:t, name, resolvedType:type, variableCollectionId:'col_comp' })),
    variableValues: defs.map(([t, , val]) => ({ variableId:t, modeId:'mode_comp', value: val })),
  });

  console.log(`  ✓ ${defs.length} component tokens created`);
}

// ─── main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🎨 Gabriel Ferraz Design System → Figma Variables\n');
  const prim = await createPrimitives();
  const sem  = await createSemantic(prim);
  await createComponents(prim, sem);

  console.log('\n✅ Done! Collections created:');
  console.log('   • 🎨 Core / Colors    (neutral, green, cream, status scales)');
  console.log('   • 📐 Core / Dimensions (spacing, radius, border-width)');
  console.log('   • 🔤 Semantic          (Light + Dark modes)');
  console.log('   • 🧩 Components        (button, card, input, badge)');
  console.log('\n   Open Figma → Local Variables panel to review.');
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
