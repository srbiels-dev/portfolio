/**
 * Creates the full 3-tier design token system as Figma Variables.
 *
 * Run with: node scripts/figma-variables.mjs
 *
 * Requires a Figma token with scopes:
 *   file_variables:read  +  file_variables:write
 *
 * Generate at: figma.com → Settings → Security → Personal Access Tokens
 */

const FIGMA_TOKEN = process.env.FIGMA_TOKEN ?? 'PASTE_YOUR_NEW_TOKEN_HERE';
const FILE_KEY = 'Kh5gKOASrrJU7poDu0GfGG';
const BASE_URL = `https://api.figma.com/v1/files/${FILE_KEY}/variables`;

// ─── helpers ────────────────────────────────────────────────────────────────

function hex(h) {
  const c = h.replace('#', '');
  return {
    r: parseInt(c.slice(0, 2), 16) / 255,
    g: parseInt(c.slice(2, 4), 16) / 255,
    b: parseInt(c.slice(4, 6), 16) / 255,
    a: 1,
  };
}

function alias(id) {
  return { type: 'VARIABLE_ALIAS', id };
}

async function post(payload) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok || data.error) {
    console.error('❌ API error:', JSON.stringify(data, null, 2));
    process.exit(1);
  }
  return data;
}

// ─── tier 1 — primitives ────────────────────────────────────────────────────

const COLORS = [
  { t: 'p_black_950',  name: 'black/950',   hex: '#0C0C0C' },
  { t: 'p_black_pure', name: 'black/pure',  hex: '#000000' },
  { t: 'p_white_pure', name: 'white/pure',  hex: '#FFFFFF' },
  { t: 'p_white_50',   name: 'white/50',    hex: '#FAFAFA' },
  { t: 'p_gray_100',   name: 'gray/100',    hex: '#D5D5D5' },
  { t: 'p_gray_200',   name: 'gray/200',    hex: '#B2B2B2' },
  { t: 'p_gray_300',   name: 'gray/300',    hex: '#AEAEAE' },
  { t: 'p_gray_400',   name: 'gray/400',    hex: '#ACACAC' },
  { t: 'p_gray_500',   name: 'gray/500',    hex: '#A7A7A7' },
  { t: 'p_gray_600',   name: 'gray/600',    hex: '#A2A2A2' },
  { t: 'p_gray_700',   name: 'gray/700',    hex: '#656565' },
  { t: 'p_gray_800',   name: 'gray/800',    hex: '#2B2D33' },
];

const RADIUS = [
  { t: 'p_r_none', name: 'border-radius/none', v: 0   },
  { t: 'p_r_sm',   name: 'border-radius/sm',   v: 4   },
  { t: 'p_r_md',   name: 'border-radius/md',   v: 8   },
  { t: 'p_r_lg',   name: 'border-radius/lg',   v: 16  },
  { t: 'p_r_full', name: 'border-radius/full', v: 99  },
];

const SPACING = [
  { t: 'p_sp_1',  name: 'spacing/1',  v: 4   },
  { t: 'p_sp_2',  name: 'spacing/2',  v: 8   },
  { t: 'p_sp_3',  name: 'spacing/3',  v: 10  },
  { t: 'p_sp_4',  name: 'spacing/4',  v: 12  },
  { t: 'p_sp_5',  name: 'spacing/5',  v: 16  },
  { t: 'p_sp_6',  name: 'spacing/6',  v: 24  },
  { t: 'p_sp_7',  name: 'spacing/7',  v: 32  },
  { t: 'p_sp_8',  name: 'spacing/8',  v: 48  },
  { t: 'p_sp_9',  name: 'spacing/9',  v: 56  },
  { t: 'p_sp_10', name: 'spacing/10', v: 64  },
  { t: 'p_sp_11', name: 'spacing/11', v: 128 },
  { t: 'p_sp_12', name: 'spacing/12', v: 192 },
];

// ─── tier 2 — semantic ───────────────────────────────────────────────────────

const SEMANTIC_COLORS = [
  // background
  { t: 's_bg_canvas',    name: 'color/background/canvas',   ref: 'p_black_950' },
  { t: 's_bg_surface',   name: 'color/background/surface',  ref: 'p_gray_800'  },
  { t: 's_bg_inverse',   name: 'color/background/inverse',  ref: 'p_white_50'  },
  // text
  { t: 's_tx_primary',   name: 'color/text/primary',        ref: 'p_white_pure' },
  { t: 's_tx_secondary', name: 'color/text/secondary',      ref: 'p_gray_600'   },
  { t: 's_tx_muted',     name: 'color/text/muted',          ref: 'p_gray_400'   },
  { t: 's_tx_subtle',    name: 'color/text/subtle',         ref: 'p_gray_100'   },
  { t: 's_tx_highlight', name: 'color/text/highlight',      ref: 'p_gray_300'   },
  { t: 's_tx_accent',    name: 'color/text/accent',         ref: 'p_gray_500'   },
  { t: 's_tx_inverse',   name: 'color/text/inverse',        ref: 'p_black_pure' },
  // border
  { t: 's_bd_subtle',    name: 'color/border/subtle',       ref: 'p_gray_700'   },
  { t: 's_bd_strong',    name: 'color/border/strong',       ref: 'p_white_50'   },
  // interactive
  { t: 's_int_fill_bg',  name: 'color/interactive/filled-background',   ref: 'p_white_50'   },
  { t: 's_int_fill_fg',  name: 'color/interactive/filled-foreground',   ref: 'p_black_pure' },
  { t: 's_int_out_bd',   name: 'color/interactive/outlined-border',     ref: 'p_white_50'   },
  { t: 's_int_out_fg',   name: 'color/interactive/outlined-foreground', ref: 'p_white_pure' },
];

const SEMANTIC_RADIUS = [
  { t: 's_r_button', name: 'radius/button', ref: 'p_r_full' },
  { t: 's_r_card',   name: 'radius/card',   ref: 'p_r_lg'   },
];

// ─── tier 3 — components ─────────────────────────────────────────────────────

const COMPONENT_COLORS = [
  { t: 'c_btn_f_bg',  name: 'button/filled/background',   ref: 's_int_fill_bg',  type: 'COLOR' },
  { t: 'c_btn_f_fg',  name: 'button/filled/foreground',   ref: 's_int_fill_fg',  type: 'COLOR' },
  { t: 'c_btn_o_bd',  name: 'button/outlined/border',     ref: 's_int_out_bd',   type: 'COLOR' },
  { t: 'c_btn_o_fg',  name: 'button/outlined/foreground', ref: 's_int_out_fg',   type: 'COLOR' },
  { t: 'c_card_bg',   name: 'card/background',            ref: 's_bg_surface',   type: 'COLOR' },
];

const COMPONENT_RADIUS = [
  { t: 'c_btn_f_r',  name: 'button/filled/radius',   ref: 's_r_button', type: 'FLOAT' },
  { t: 'c_btn_o_r',  name: 'button/outlined/radius', ref: 's_r_button', type: 'FLOAT' },
  { t: 'c_card_r',   name: 'card/radius',            ref: 's_r_card',   type: 'FLOAT' },
];

// ─── main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🎨 Creating Figma design system variables…\n');

  // ── pass 1: primitives ──────────────────────────────────────────────────────
  console.log('Pass 1 — Primitives (colors, spacing, border-radius)');

  const p1 = await post({
    variableCollections: [
      { action: 'CREATE', id: 'col_color_prim',  name: '🎨 Color • Primitives',  initialModeId: 'mode_color_prim'  },
      { action: 'CREATE', id: 'col_number_prim', name: '📐 Number • Primitives', initialModeId: 'mode_number_prim' },
    ],
    variableModes: [
      { action: 'CREATE', id: 'mode_color_prim',  name: 'Default', variableCollectionId: 'col_color_prim'  },
      { action: 'CREATE', id: 'mode_number_prim', name: 'Default', variableCollectionId: 'col_number_prim' },
    ],
    variables: [
      ...COLORS.map(c  => ({ action: 'CREATE', id: c.t, name: c.name, resolvedType: 'COLOR', variableCollectionId: 'col_color_prim'  })),
      ...RADIUS.map(r  => ({ action: 'CREATE', id: r.t, name: r.name, resolvedType: 'FLOAT', variableCollectionId: 'col_number_prim' })),
      ...SPACING.map(s => ({ action: 'CREATE', id: s.t, name: s.name, resolvedType: 'FLOAT', variableCollectionId: 'col_number_prim' })),
    ],
    variableValues: [
      ...COLORS.map(c  => ({ variableId: c.t, modeId: 'mode_color_prim',  value: hex(c.hex) })),
      ...RADIUS.map(r  => ({ variableId: r.t, modeId: 'mode_number_prim', value: r.v        })),
      ...SPACING.map(s => ({ variableId: s.t, modeId: 'mode_number_prim', value: s.v        })),
    ],
  });

  // map temp IDs → real Figma IDs
  const ids = {};
  const tempToReal = p1.meta?.tempIdToRealId ?? {};
  for (const [tempId, realId] of Object.entries(tempToReal)) {
    ids[tempId] = realId;
  }
  // fallback: some API versions return meta.variables keyed by temp ID
  if (Object.keys(ids).length === 0 && p1.meta?.variables) {
    for (const [tempId, v] of Object.entries(p1.meta.variables)) {
      ids[tempId] = v.id;
    }
  }

  const primColorCount  = Object.keys(ids).filter(k => k.startsWith('p_')).length;
  console.log(`  ✓ ${primColorCount} primitives created\n`);

  // ── pass 2: semantic ────────────────────────────────────────────────────────
  console.log('Pass 2 — Semantic layer (aliased to primitives)');

  const p2 = await post({
    variableCollections: [
      { action: 'CREATE', id: 'col_semantic', name: '🔤 Semantic', initialModeId: 'mode_semantic' },
    ],
    variableModes: [
      { action: 'CREATE', id: 'mode_semantic', name: 'Default', variableCollectionId: 'col_semantic' },
    ],
    variables: [
      ...SEMANTIC_COLORS.map(c => ({ action: 'CREATE', id: c.t, name: c.name, resolvedType: 'COLOR', variableCollectionId: 'col_semantic' })),
      ...SEMANTIC_RADIUS.map(r => ({ action: 'CREATE', id: r.t, name: r.name, resolvedType: 'FLOAT', variableCollectionId: 'col_semantic' })),
    ],
    variableValues: [
      ...SEMANTIC_COLORS.map(c => ({ variableId: c.t, modeId: 'mode_semantic', value: alias(ids[c.ref]) })),
      ...SEMANTIC_RADIUS.map(r => ({ variableId: r.t, modeId: 'mode_semantic', value: alias(ids[r.ref]) })),
    ],
  });

  const semanticIds = {};
  const t2r = p2.meta?.tempIdToRealId ?? {};
  for (const [k, v] of Object.entries(t2r)) semanticIds[k] = v;
  if (Object.keys(semanticIds).length === 0 && p2.meta?.variables) {
    for (const [k, v] of Object.entries(p2.meta.variables)) semanticIds[k] = v.id;
  }

  console.log(`  ✓ ${SEMANTIC_COLORS.length + SEMANTIC_RADIUS.length} semantic tokens created\n`);

  // ── pass 3: component tokens ────────────────────────────────────────────────
  console.log('Pass 3 — Component tokens (aliased to semantic)');

  await post({
    variableCollections: [
      { action: 'CREATE', id: 'col_components', name: '🧩 Components', initialModeId: 'mode_components' },
    ],
    variableModes: [
      { action: 'CREATE', id: 'mode_components', name: 'Default', variableCollectionId: 'col_components' },
    ],
    variables: [
      ...COMPONENT_COLORS.map(c => ({ action: 'CREATE', id: c.t, name: c.name, resolvedType: c.type, variableCollectionId: 'col_components' })),
      ...COMPONENT_RADIUS.map(r => ({ action: 'CREATE', id: r.t, name: r.name, resolvedType: r.type, variableCollectionId: 'col_components' })),
    ],
    variableValues: [
      ...COMPONENT_COLORS.map(c => ({ variableId: c.t, modeId: 'mode_components', value: alias(semanticIds[c.ref]) })),
      ...COMPONENT_RADIUS.map(r => ({ variableId: r.t, modeId: 'mode_components', value: alias(semanticIds[r.ref]) })),
    ],
  });

  console.log(`  ✓ ${COMPONENT_COLORS.length + COMPONENT_RADIUS.length} component tokens created\n`);

  console.log('✅ Design system complete!');
  console.log('   Collections created in Figma:');
  console.log('   • 🎨 Color • Primitives');
  console.log('   • 📐 Number • Primitives');
  console.log('   • 🔤 Semantic');
  console.log('   • 🧩 Components');
  console.log('\n   Open Figma → Local Variables panel to review.');
}

main().catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
