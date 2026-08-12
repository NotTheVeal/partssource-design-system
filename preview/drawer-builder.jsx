/* Drawer Builder — section-based composer
   ============================================================
   Lets the user assemble a drawer body from real PartsSource
   drawer patterns: copy blocks, form fields, search, lists,
   tables, step pills, etc. Each section is editable, reorderable,
   removable. Live preview + generated JSX update in real time.
   ============================================================ */

const { useState, useEffect, useRef } = React;

// ---------- icons ----------
const Icon = {
  X: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Xclose: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Plus: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Up: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="18 15 12 9 6 15"/></svg>,
  Down: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="6 9 12 15 18 9"/></svg>,
  Trash: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>,
  Search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>,
  Chevron: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><polyline points="6 9 12 15 18 9"/></svg>,
};

// ---------- helpers ----------
let uid = 0;
const gen = () => 's_' + (++uid).toString(36);
const escAttr = (s) => String(s ?? '').replace(/"/g, '\\"');
const indent = (s, n) => s.split('\n').map(l => ' '.repeat(n) + l).join('\n');

// ---------- atoms ----------
const Seg = ({ value, onChange, options }) => (
  <div className="db-seg" role="tablist">
    {options.map(o => (
      <button key={o.value} role="tab" aria-selected={value === o.value}
        className={value === o.value ? 'on' : ''}
        onClick={() => onChange(o.value)}>{o.label}</button>
    ))}
  </div>
);

const Field = ({ label, children }) => (
  <div className="db-tweak">
    <label className="k">{label}</label>
    {children}
  </div>
);

const Check = ({ label, value, onChange }) => (
  <label className="db-check">
    <span>{label}</span>
    <button type="button" role="switch" aria-checked={value}
      className={'toggle' + (value ? ' is-on' : '')}
      onClick={() => onChange(!value)}></button>
  </label>
);

// ---------- section registry ----------
// Each section has: id, type, props
//   render(props)            → preview JSX
//   edit(props, onChange)    → tweaks-panel editor JSX
//   code(props)              → JSX string for codebox
//   make()                   → default props

const REGISTRY = {
  heading: {
    label: 'Heading',
    icon: 'H',
    make: () => ({ text: 'Section heading' }),
    render: (p) => <h4 style={{margin:'8px 0 0',font:'600 16px/1.3 var(--ps-font-sans)',color:'#2B2B2B'}}>{p.text}</h4>,
    edit: (p, on) => <Field label="Text"><input type="text" value={p.text} onChange={e => on({...p, text: e.target.value})}/></Field>,
    code: (p) => `<h4 className="text-lg font-semibold text-grey-1">${escapeText(p.text)}</h4>`,
  },
  paragraph: {
    label: 'Paragraph',
    icon: '¶',
    make: () => ({ text: 'Body copy explaining what this drawer does. Keep it short — one or two sentences.' }),
    render: (p) => <p style={{margin:0,font:'15px/1.5 var(--ps-font-sans)',color:'#4A4A4A'}}>{p.text}</p>,
    edit: (p, on) => <Field label="Body"><textarea value={p.text} onChange={e => on({...p, text: e.target.value})}/></Field>,
    code: (p) => `<p className="text-md text-grey-2">${escapeText(p.text)}</p>`,
  },
  input: {
    label: 'Text input',
    icon: 'I',
    make: () => ({ label: 'Field label', value: '' }),
    render: (p) => (
      <div className={'input-wrap' + (p.value ? ' has-value' : '')}>
        <input type="text" defaultValue={p.value} key={p.value} />
        <label className={p.value ? 'has-value' : ''}>{p.label}</label>
      </div>
    ),
    edit: (p, on) => (
      <>
        <Field label="Label"><input type="text" value={p.label} onChange={e => on({...p, label: e.target.value})}/></Field>
        <Field label="Value"><input type="text" value={p.value} onChange={e => on({...p, value: e.target.value})}/></Field>
      </>
    ),
    code: (p) => `<TextInput label="${escAttr(p.label)}" value={${jsonish(p.value)}} onChange={setX} />`,
  },
  textarea: {
    label: 'Textarea',
    icon: 'T',
    make: () => ({ label: 'Description', value: '' }),
    render: (p) => (
      <div className={'input-wrap input-wrap--textarea' + (p.value ? ' has-value' : '')}>
        <textarea defaultValue={p.value} key={p.value} />
        <label className={p.value ? 'has-value' : ''}>{p.label}</label>
      </div>
    ),
    edit: (p, on) => (
      <>
        <Field label="Label"><input type="text" value={p.label} onChange={e => on({...p, label: e.target.value})}/></Field>
        <Field label="Value"><textarea value={p.value} onChange={e => on({...p, value: e.target.value})}/></Field>
      </>
    ),
    code: (p) => `<Textarea label="${escAttr(p.label)}" value={${jsonish(p.value)}} onChange={setX} />`,
  },
  'form-fields': {
    label: 'Form fields (Name + Desc + Status)',
    icon: 'F',
    make: () => ({}),
    render: () => (
      <div className="form-stack">
        <div className="input-wrap"><input type="text"/><label>Name</label></div>
        <div className="input-wrap input-wrap--textarea"><textarea/><label>Description</label></div>
        <div className="field field--row" style={{marginBottom:0}}>
          <span className="field__label">Status</span>
          <button type="button" className="toggle is-on" aria-pressed="true"></button>
        </div>
      </div>
    ),
    edit: () => <p className="db-empty">Pulls in <code>name</code>, <code>description</code>, and <code>is_active</code> per <code>CreateBundleDrawer</code>.</p>,
    code: () => `<NameDescStatusFields {...state} />`,
  },
  search: {
    label: 'Search input',
    icon: '⌕',
    make: () => ({ placeholder: 'Search by title or procedure' }),
    render: (p) => (
      <div className="input-wrap">
        <input type="text"/>
        <label>{p.placeholder}</label>
      </div>
    ),
    edit: (p, on) => <Field label="Placeholder"><input type="text" value={p.placeholder} onChange={e => on({...p, placeholder: e.target.value})}/></Field>,
    code: (p) => `<SearchInput value={query} onChange={setQuery} placeholder="${escAttr(p.placeholder)}" />`,
  },
  pills: {
    label: 'Step pills',
    icon: '○',
    make: () => ({ steps: ['Modules', 'Profiles', 'Confirm'], current: 0 }),
    render: (p) => (
      <div className="db-pills">
        {p.steps.map((s, i) => {
          const isCurrent = i === p.current;
          const isVisited = i < p.current;
          return (
            <span key={i} className={'pill' + (isCurrent ? ' is-current' : isVisited ? ' is-visited' : '')}>
              <span>{i+1}</span><span>{s}</span>
            </span>
          );
        })}
      </div>
    ),
    edit: (p, on) => (
      <>
        <Field label="Steps (one per line)">
          <textarea value={p.steps.join('\n')} onChange={e => on({...p, steps: e.target.value.split('\n').filter(Boolean)})}/>
        </Field>
        <Field label="Current">
          <select value={p.current} onChange={e => on({...p, current: Number(e.target.value)})}>
            {p.steps.map((s, i) => <option key={i} value={i}>{i+1} · {s}</option>)}
          </select>
        </Field>
      </>
    ),
    code: (p) => `<StepPills
  steps={[${p.steps.map(s => `{ id: '${slug(s)}', label: '${escAttr(s)}' }`).join(', ')}]}
  currentIndex={${p.current}}
  onJumpBack={goToStep}
  lockedIndices={new Set()}
/>`,
  },
  list: {
    label: 'Pickable list',
    icon: '☰',
    make: () => ({ items: [
      { title: 'Infusion Pump Preventive Maintenance', meta: 'Interactive · 12 sections' },
      { title: 'Ventilator Safety Checks', meta: 'Interactive · 9 sections' },
      { title: 'Defibrillator OEM Service', meta: 'Interactive · 14 sections' },
    ]}),
    render: (p) => (
      <div>
        {p.items.map((it, i) => (
          <div className="db-list-row" key={i}>
            <div className="db-list-row__main">
              <div className="db-list-row__title">{it.title}</div>
              <div className="db-list-row__meta">{it.meta}</div>
            </div>
            <button className="db-icon-btn" aria-label="Add">{Icon.Plus}</button>
          </div>
        ))}
      </div>
    ),
    edit: (p, on) => <ItemEditor items={p.items} onChange={(items) => on({...p, items})} />,
    code: (p) => `{items.map((m) => (
  <AddEntityCard key={m.id} onClick={() => add(m)}>
    <ModuleInfoBlock module={m} />
  </AddEntityCard>
))}`,
  },
  selected: {
    label: 'Selected items (recap)',
    icon: '✓',
    make: () => ({
      label: '2 selected',
      items: [
        { title: 'Earl Grey', meta: 'earl@partssource.com' },
        { title: 'Logan Cole', meta: 'logan@partssource.com' },
      ],
      withAvatars: true,
      withRemove: true,
    }),
    render: (p) => (
      <div>
        {p.label && (
          <p style={{margin:'0 0 8px',font:'600 15px/1.3 var(--ps-font-sans)',color:'#2B2B2B'}}>{p.label}</p>
        )}
        {p.items.map((it, i) => (
          <div className="db-list-row" key={i}>
            {p.withAvatars && (
              <div className="db-avatar">{(it.title || '').split(' ').map(s => s[0]).join('').slice(0,2)}</div>
            )}
            <div className="db-list-row__main">
              <div className="db-list-row__title">{it.title}</div>
              <div className="db-list-row__meta">{it.meta}</div>
            </div>
            {p.withRemove && (
              <button className="db-icon-btn db-icon-btn--danger" aria-label="Remove">{Icon.X}</button>
            )}
          </div>
        ))}
      </div>
    ),
    edit: (p, on) => (
      <>
        <Field label="Label (optional)"><input type="text" value={p.label} onChange={e => on({...p, label: e.target.value})}/></Field>
        <Check label="Show avatars" value={p.withAvatars} onChange={v => on({...p, withAvatars: v})}/>
        <Check label="Show remove (×) button" value={p.withRemove} onChange={v => on({...p, withRemove: v})}/>
        <ItemEditor items={p.items} onChange={(items) => on({...p, items})} />
      </>
    ),
    code: (p) => {
      const label = p.label ? `<p className="text-md font-semibold text-grey-1">${escapeText(p.label)}</p>\n` : '';
      if (p.withRemove) {
        return `${label}{selected.map((it) => (
  <RemoveEntityCard key={it.id} onClick={() => remove(it)}>
    <ProfileInfoBlock profile={it} />
  </RemoveEntityCard>
))}`;
      }
      return `${label}{items.map((it) => (
  <div key={it.id} className="list-card flex items-center gap-4 max-w-full">
    <div className="flex-1 min-w-0 overflow-hidden">
      <ProfileInfoBlock profile={it} />
    </div>
  </div>
))}`;
    },
  },
  table: {
    label: 'Table',
    icon: '▦',
    make: () => ({
      columns: ['Order #', 'Item', 'Qty'],
      rows: [
        ['64434335', 'Service Kit, Accessory', '1'],
        ['64434336', 'Mindray DPM 7 Monitor', '2'],
        ['64434337', 'GE MAC 5500 ECG', '1'],
      ],
    }),
    render: (p) => (
      <table className="db-mini-table">
        <thead><tr>{p.columns.map((c, i) => <th key={i}>{c}</th>)}</tr></thead>
        <tbody>
          {p.rows.map((row, i) => (
            <tr key={i}>{p.columns.map((_, j) => <td key={j}>{row[j] ?? ''}</td>)}</tr>
          ))}
        </tbody>
      </table>
    ),
    edit: (p, on) => <TableEditor columns={p.columns} rows={p.rows}
      onChange={(columns, rows) => on({...p, columns, rows})}/>,
    code: (p) => `<table className="w-full text-sm">
  <thead><tr>${p.columns.map(c => `<th>${escapeText(c)}</th>`).join('')}</tr></thead>
  <tbody>
${p.rows.map(r => `    <tr>${p.columns.map((_, j) => `<td>${escapeText(r[j] ?? '')}</td>`).join('')}</tr>`).join('\n')}
  </tbody>
</table>`,
  },
  divider: {
    label: 'Divider',
    icon: '─',
    make: () => ({}),
    render: () => <hr style={{border:0,borderTop:'1px solid #DCDCDC',margin:'8px 0'}}/>,
    edit: () => <p className="db-empty">Horizontal rule.</p>,
    code: () => `<hr className="border-t border-grey-5 my-2" />`,
  },
};

const SECTION_ORDER = [
  'heading', 'paragraph', 'input', 'textarea', 'form-fields',
  'search', 'pills', 'list', 'selected', 'table', 'divider'
];

function jsonish(v) {
  if (typeof v === 'string') return `"${escAttr(v)}"`;
  return String(v);
}
function escapeText(s) {
  return String(s ?? '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function slug(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// ---------- inline editors ----------
function ItemEditor({ items, onChange }) {
  return (
    <div className="db-itemed">
      {items.map((it, i) => (
        <div className="db-itemed__row" key={i}>
          <input type="text" placeholder="Title" value={it.title} onChange={e => onChange(items.map((x, j) => j === i ? {...x, title: e.target.value} : x))}/>
          <input type="text" placeholder="Meta" value={it.meta} onChange={e => onChange(items.map((x, j) => j === i ? {...x, meta: e.target.value} : x))}/>
          <button type="button" className="db-itemed__del" onClick={() => onChange(items.filter((_, j) => j !== i))} aria-label="Delete">{Icon.X}</button>
        </div>
      ))}
      <button type="button" className="db-itemed__add" onClick={() => onChange([...items, { title: 'New item', meta: '' }])}>
        {Icon.Plus}<span>Add item</span>
      </button>
    </div>
  );
}

function TableEditor({ columns, rows, onChange }) {
  const setCol = (idx, val) => onChange(columns.map((c, i) => i === idx ? val : c), rows);
  const setCell = (r, c, val) => onChange(columns, rows.map((row, ri) => ri === r ? row.map((cell, ci) => ci === c ? val : cell) : row));
  const addCol = () => onChange([...columns, 'Column'], rows.map(r => [...r, '']));
  const delCol = (idx) => onChange(columns.filter((_, i) => i !== idx), rows.map(r => r.filter((_, i) => i !== idx)));
  const addRow = () => onChange(columns, [...rows, columns.map(() => '')]);
  const delRow = (idx) => onChange(columns, rows.filter((_, i) => i !== idx));
  return (
    <div className="db-tabled">
      <div className="db-tabled__row db-tabled__row--head" style={{'--cols': columns.length}}>
        {columns.map((c, i) => (
          <div className="db-tabled__col" key={i}>
            <input type="text" value={c} onChange={e => setCol(i, e.target.value)}/>
            <button type="button" className="db-tabled__del" onClick={() => delCol(i)} aria-label="Delete column">{Icon.X}</button>
          </div>
        ))}
        <button type="button" className="db-tabled__add db-tabled__add--col" onClick={addCol} title="Add column">{Icon.Plus}</button>
      </div>
      {rows.map((row, ri) => (
        <div className="db-tabled__row" key={ri} style={{'--cols': columns.length}}>
          {columns.map((_, ci) => (
            <input key={ci} type="text" value={row[ci] ?? ''} onChange={e => setCell(ri, ci, e.target.value)}/>
          ))}
          <button type="button" className="db-tabled__del db-tabled__del--row" onClick={() => delRow(ri)} aria-label="Delete row">{Icon.X}</button>
        </div>
      ))}
      <button type="button" className="db-tabled__add" onClick={addRow}>{Icon.Plus}<span>Add row</span></button>
    </div>
  );
}

// ---------- section card in tweaks panel ----------
function SectionEditor({ section, idx, total, onChange, onMove, onDelete }) {
  const [open, setOpen] = useState(idx === total - 1 ? true : false);
  const def = REGISTRY[section.type];
  if (!def) return null;
  return (
    <div className="db-secedit">
      <div className="db-secedit__head">
        <button type="button" className="db-secedit__toggle" onClick={() => setOpen(o => !o)}>
          <span className="db-secedit__icon">{def.icon}</span>
          <span className="db-secedit__title">{def.label}</span>
        </button>
        <span className="db-secedit__actions">
          <button type="button" className="db-secedit__btn" disabled={idx === 0} onClick={() => onMove(-1)} aria-label="Move up">{Icon.Up}</button>
          <button type="button" className="db-secedit__btn" disabled={idx === total - 1} onClick={() => onMove(+1)} aria-label="Move down">{Icon.Down}</button>
          <button type="button" className="db-secedit__btn db-secedit__btn--del" onClick={onDelete} aria-label="Delete">{Icon.Trash}</button>
        </span>
      </div>
      {open && <div className="db-secedit__body">{def.edit(section.props, (props) => onChange({...section, props}))}</div>}
    </div>
  );
}

// ---------- add-section dropdown ----------
function AddSection({ onAdd }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
  return (
    <div className="db-add" ref={ref}>
      <button type="button" className="db-add__btn" onClick={() => setOpen(o => !o)}>
        {Icon.Plus}<span>Add section</span>
      </button>
      {open && (
        <div className="db-add__menu" role="menu">
          {SECTION_ORDER.map(type => {
            const def = REGISTRY[type];
            return (
              <button key={type} type="button" role="menuitem" className="db-add__item"
                onClick={() => { onAdd(type); setOpen(false); }}>
                <span className="db-add__icon">{def.icon}</span>
                <span>{def.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ---------- preview pieces ----------
const X_ICON = Icon.Xclose;

// ---------- preset starting points ----------
const PRESETS = {
  form: {
    title: 'Create Bundle',
    subtitle: 'Create a content bundle to grant access to modules.',
    showSubtitle: true,
    footer: 'cta',
    primaryLabel: 'Create Bundle',
    sections: [{ id: gen(), type: 'form-fields', props: REGISTRY['form-fields'].make() }],
  },
  list: {
    title: 'Create Assessment',
    subtitle: 'Select a module to create an assessment.',
    showSubtitle: true,
    footer: 'none',
    primaryLabel: 'Create',
    sections: [{ id: gen(), type: 'list', props: REGISTRY.list.make() }],
  },
  wizard: (() => {
    const selected = [
      { title: 'Infusion Pump Preventive Maintenance', meta: 'Interactive · 12 sections' },
      { title: 'Ventilator Safety Checks', meta: 'Interactive · 9 sections' },
    ];
    const available = [
      { title: 'Defibrillator OEM Service', meta: 'Interactive · 14 sections' },
      { title: 'Patient Monitor Calibration', meta: 'Interactive · 7 sections' },
      { title: 'X-Ray Tube Replacement', meta: 'Interactive · 8 sections' },
    ];
    return {
      title: 'Modules',
      subtitle: 'Select the modules you want to assign and click next.',
      showSubtitle: true,
      footer: 'selection',
      primaryLabel: 'Next',
      selectedItems: selected,
      sections: [
        { id: gen(), type: 'pills', props: REGISTRY.pills.make() },
        { id: gen(), type: 'search', props: REGISTRY.search.make() },
        { id: gen(), type: 'list', props: { items: available } },
      ],
    };
  })(),
  confirm: {
    title: 'Finalize Assignment',
    subtitle: 'Click finalize assignment to create the assignment.',
    showSubtitle: true,
    footer: 'cta',
    primaryLabel: 'Finalize Assignment',
    sections: [
      { id: gen(), type: 'pills', props: { steps: ['Modules', 'Profiles', 'Confirm'], current: 2 } },
      { id: gen(), type: 'selected', props: {
        label: '2 modules',
        items: REGISTRY.list.make().items.slice(0, 2),
        withAvatars: false,
        withRemove: false,
      }},
      { id: gen(), type: 'selected', props: {
        label: '3 team members',
        items: [
          { title: 'Earl Grey', meta: 'earl@partssource.com' },
          { title: 'Logan Cole', meta: 'logan@partssource.com' },
          { title: 'Anna Schmidt', meta: 'anna@partssource.com' },
        ],
        withAvatars: true,
        withRemove: false,
      }},
    ],
  },
};

// ---------- main ----------
function DrawerBuilder() {
  const [state, setState] = useState({
    isOpen: true,
    showScrim: true,
    drawerState: 'default',
    errorText: 'Something went wrong. Please try again.',
    title: PRESETS.form.title,
    subtitle: PRESETS.form.subtitle,
    showSubtitle: true,
    footer: 'cta',
    primaryLabel: 'Create Bundle',
    primaryStyle: 'primary',
    selectionCount: 2,
    selectedItems: [],
    selectionExpanded: true,
  });
  const [sections, setSections] = useState(PRESETS.form.sections);
  const set = (k, v) => setState(s => ({ ...s, [k]: v }));

  const loadPreset = (key) => {
    const p = PRESETS[key];
    if (!p) return;
    setState(s => ({
      ...s,
      title: p.title,
      subtitle: p.subtitle,
      showSubtitle: p.showSubtitle,
      footer: p.footer,
      primaryLabel: p.primaryLabel,
      selectedItems: p.selectedItems || [],
      selectionCount: (p.selectedItems || []).length || s.selectionCount,
    }));
    setSections(p.sections.map(s => ({ ...s, id: gen() })));
  };

  const addSection = (type) => {
    const def = REGISTRY[type];
    setSections(s => [...s, { id: gen(), type, props: def.make() }]);
  };
  const updateSection = (id, next) => setSections(s => s.map(x => x.id === id ? next : x));
  const moveSection = (id, delta) => setSections(s => {
    const i = s.findIndex(x => x.id === id);
    if (i < 0) return s;
    const j = i + delta;
    if (j < 0 || j >= s.length) return s;
    const next = s.slice();
    [next[i], next[j]] = [next[j], next[i]];
    return next;
  });
  const deleteSection = (id) => setSections(s => s.filter(x => x.id !== id));

  const code = buildCode(state, sections);

  return (
    <div className="db-grid">
      {/* Tweaks */}
      <aside className="db-tweaks">
        <div className="db-section"><span>Start from</span></div>
        <div className="db-presets">
          <button onClick={() => loadPreset('form')}>Form</button>
          <button onClick={() => loadPreset('list')}>List pick</button>
          <button onClick={() => loadPreset('wizard')}>Wizard</button>
          <button onClick={() => loadPreset('confirm')}>Confirm</button>
        </div>

        <div className="db-section"><span>State</span></div>
        <Check label="Open" value={state.isOpen} onChange={v => set('isOpen', v)} />
        <Check label="Show scrim" value={state.showScrim} onChange={v => set('showScrim', v)} />
        <Field label="Drawer state">
          <select value={state.drawerState} onChange={e => set('drawerState', e.target.value)}>
            <option value="default">Default</option>
            <option value="loading">Loading (fetching data)</option>
            <option value="empty">Empty (no items)</option>
            <option value="submitting">Submitting (mutation pending)</option>
            <option value="error">Error (mutation failed)</option>
          </select>
        </Field>
        {state.drawerState === 'error' && (
          <Field label="Error message">
            <input type="text" value={state.errorText} onChange={e => set('errorText', e.target.value)}/>
          </Field>
        )}

        <div className="db-section"><span>Header</span></div>
        <Field label="Title">
          <input type="text" value={state.title} onChange={e => set('title', e.target.value)}/>
        </Field>
        <Check label="Show subtitle" value={state.showSubtitle} onChange={v => set('showSubtitle', v)} />
        {state.showSubtitle && (
          <Field label="Subtitle">
            <textarea value={state.subtitle} onChange={e => set('subtitle', e.target.value)}/>
          </Field>
        )}

        <div className="db-section"><span>Body · {sections.length} section{sections.length === 1 ? '' : 's'}</span></div>
        <div className="db-secedit-list">
          {sections.length === 0 && <p className="db-empty">No sections yet. Add one below.</p>}
          {sections.map((sec, i) => (
            <SectionEditor key={sec.id}
              section={sec} idx={i} total={sections.length}
              onChange={(next) => updateSection(sec.id, next)}
              onMove={(delta) => moveSection(sec.id, delta)}
              onDelete={() => deleteSection(sec.id)}
            />
          ))}
        </div>
        <AddSection onAdd={addSection} />

        <div className="db-section"><span>Footer</span></div>
        <Field label="Style">
          <Seg value={state.footer} onChange={v => set('footer', v)} options={[
            {value:'none', label:'None'},
            {value:'cta', label:'CTA'},
            {value:'selection', label:'Selection'},
          ]} />
        </Field>
        {state.footer !== 'none' && (
          <>
            <Field label="Primary label">
              <input type="text" value={state.primaryLabel} onChange={e => set('primaryLabel', e.target.value)}/>
            </Field>
            <Field label="Primary CTA style">
              <select value={state.primaryStyle} onChange={e => set('primaryStyle', e.target.value)}>
                <option value="primary">Primary blue</option>
                <option value="pill">Orange pill</option>
                <option value="pill-amber">Amber pill</option>
                <option value="danger">Danger (red)</option>
                <option value="outline">Outline</option>
              </select>
            </Field>
          </>
        )}
        {state.footer === 'selection' && (
          <Field label="Selected count (display)">
            <input type="text" value={state.selectionCount} onChange={e => set('selectionCount', Number(e.target.value) || 0)}/>
          </Field>
        )}
      </aside>

      {/* Stage + code */}
      <div className="db-main">
        <div className="db-stage">
          <div className="pc">
            <div className="pc__nav"><div className="pc__logo"></div><div className="pc__search"></div><div className="pc__avatar"></div></div>
            <div className="pc__body">
              <div className="pc__row">
                <div className="pc__card"><div className="pc__bar w60"></div><div className="pc__bar w40"></div></div>
                <div className="pc__card"><div className="pc__bar w80"></div><div className="pc__bar w50"></div></div>
                <div className="pc__card"><div className="pc__bar w50"></div><div className="pc__bar w90"></div></div>
              </div>
            </div>
          </div>
          {state.showScrim && <div className={'scrim' + (state.isOpen ? ' is-open' : '')} onClick={() => set('isOpen', false)}/>}
          <div className={'drawer' + (state.isOpen ? ' is-open' : '')} role="dialog" aria-modal="true" aria-hidden={!state.isOpen}>
            {state.footer === 'selection' ? (
              <>
                <div className="drawer-container drawer-container--flex">
                  <DrawerHeaderView state={state} onClose={() => set('isOpen', false)} />
                  <SectionsView sections={sections} state={state} />
                </div>
                <div className="drawer-footer">
                  <button type="button" className="drawer-footer__head" onClick={() => set('selectionExpanded', !state.selectionExpanded)}>
                    <span>{(state.selectedItems && state.selectedItems.length) || state.selectionCount} selected</span>
                    <span style={{display:'inline-flex',transform:state.selectionExpanded ? 'rotate(180deg)' : 'none',transition:'transform 200ms ease'}}>{Icon.Chevron}</span>
                  </button>
                  {state.selectionExpanded && state.selectedItems && state.selectedItems.length > 0 && (
                    <div style={{display:'flex',flexDirection:'column',gap:8,maxHeight:200,overflowY:'auto'}}>
                      {state.selectedItems.map((it, i) => (
                        <div className="db-list-row" key={i}>
                          <div className="db-list-row__main">
                            <div className="db-list-row__title">{it.title}</div>
                            <div className="db-list-row__meta">{it.meta}</div>
                          </div>
                          <button className="db-icon-btn db-icon-btn--danger" aria-label="Remove">{Icon.X}</button>
                        </div>
                      ))}
                    </div>
                  )}
                  <button className={'btn btn--' + state.primaryStyle + (state.primaryStyle === 'pill' || state.primaryStyle === 'pill-amber' ? '' : ' btn--block')} disabled={state.drawerState === 'submitting'} style={state.primaryStyle === 'pill' || state.primaryStyle === 'pill-amber' ? {alignSelf:'stretch',width:'100%',borderRadius:9999} : {}}>
                    {state.drawerState === 'submitting' ? <span className="db-spinner"/> : null}
                    {state.primaryLabel}
                  </button>
                </div>
              </>
            ) : (
              <div className="drawer-container drawer-container--scroll">
                <DrawerHeaderView state={state} onClose={() => set('isOpen', false)} />
                <SectionsView sections={sections} state={state} />
                {state.footer === 'cta' && (
                  <button className={'btn btn--' + state.primaryStyle + (state.primaryStyle === 'pill' || state.primaryStyle === 'pill-amber' ? '' : ' btn--block')} style={{marginTop:24, ...(state.primaryStyle === 'pill' || state.primaryStyle === 'pill-amber' ? {alignSelf:'center'} : {})}} disabled={state.drawerState === 'submitting'}>
                    {state.drawerState === 'submitting' ? <span className="db-spinner"/> : null}
                    {state.primaryLabel}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <CodeBox code={code} />
      </div>
    </div>
  );
}

function DrawerHeaderView({ state, onClose }) {
  return (
    <div className="drawer-header">
      <div className="drawer-header__text">
        <h3>{state.title}</h3>
        {state.showSubtitle && state.subtitle && <p>{state.subtitle}</p>}
      </div>
      <button className="drawer-header__close" aria-label="Close" onClick={onClose}>{X_ICON}</button>
    </div>
  );
}

function ErrorBanner({ text }) {
  return (
    <div className="db-banner db-banner--err" role="alert">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <span>{text}</span>
    </div>
  );
}

function LoadingBody() {
  return (
    <div className="db-skel">
      <div className="db-skel__row"><div className="db-skel__bar" style={{width:'70%'}}/></div>
      <div className="db-skel__row"><div className="db-skel__bar" style={{width:'90%'}}/></div>
      <div className="db-skel__row"><div className="db-skel__bar" style={{width:'55%'}}/></div>
      <div className="db-skel__row"><div className="db-skel__bar" style={{width:'80%'}}/></div>
      <p className="db-skel__cap">Loading…</p>
    </div>
  );
}

function EmptyBody({ message }) {
  return (
    <div className="db-empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><rect x="3" y="4" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="16" width="18" height="4" rx="1"/><line x1="3" y1="3" x2="21" y2="21" stroke="#D14343"/></svg>
      <p>{message}</p>
    </div>
  );
}

function SectionsView({ sections, state }) {
  // State overrides
  if (state && state.drawerState === 'loading') return <LoadingBody />;
  if (state && state.drawerState === 'empty') {
    return <EmptyBody message="No items available." />;
  }
  return (
    <div style={{display:'flex',flexDirection:'column',gap:16}}>
      {state && state.drawerState === 'error' && <ErrorBanner text={state.errorText} />}
      {sections.map(sec => {
        const def = REGISTRY[sec.type];
        if (!def) return null;
        return <div key={sec.id}>{def.render(sec.props)}</div>;
      })}
    </div>
  );
}

function CodeBox({ code }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {}
  };
  return (
    <div className="db-codebox">
      <button className={'db-copy' + (copied ? ' copied' : '')} onClick={onCopy}>{copied ? 'Copied' : 'Copy'}</button>
      {code}
    </div>
  );
}

function ctaJsx(state) {
  const label = escAttr(state.primaryLabel);
  switch (state.primaryStyle) {
    case 'pill':
      return `        <Button variant="pill" onClick={onSubmit}>${label}</Button>`;
    case 'pill-amber':
      return `        <Button variant="pillAmber" onClick={onSubmit}>${label}</Button>`;
    case 'danger':
      return `        <Button variant="destructive" onClick={onSubmit} className="w-full sm:w-full mt-2">${label}</Button>`;
    case 'outline':
      return `        <Button variant="outline" onClick={onSubmit} className="w-full sm:w-full mt-2">${label}</Button>`;
    case 'primary':
    default:
      return `        <SubmitButton onClick={onSubmit} className="w-full sm:w-full mt-2">${label}</SubmitButton>`;
  }
}

// ---------- code generator ----------
function buildCode(state, sections) {
  const subtitleAttr = state.showSubtitle && state.subtitle
    ? `\n          subtitle="${escAttr(state.subtitle)}"` : '';
  const containerCls = state.footer === 'selection' ? 'flex-1 overflow-y-auto' : 'h-full overflow-y-auto';

  const sectionLines = sections.map(s => {
    const def = REGISTRY[s.type];
    return def ? def.code(s.props) : '';
  }).filter(Boolean).map(c => indent(c, 8)).join('\n\n');

  const ctaLine = state.footer === 'cta'
    ? `\n\n${ctaJsx(state)}` : '';

  if (state.footer === 'selection') {
    return `import { Drawer, DrawerContainer, DrawerHeader } from './drawer';

export function MyDrawer({ isOpen, onClose }) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerContainer className="${containerCls}">
        <DrawerHeader
          title="${escAttr(state.title)}"${subtitleAttr}
          onClose={onClose}
        />

${sectionLines}
      </DrawerContainer>
      <SelectionFooter
        items={selected}
        getId={(i) => i.id}
        onRemove={(i) => remove(i)}
        isLocked={() => false}
        onNext={next}
        nextLabel="${escAttr(state.primaryLabel)}"
        nextDisabled={selected.length === 0}
        renderItem={(i) => <InfoBlock item={i} />}
      />
    </Drawer>
  );
}`;
  }

  return `import { Drawer, DrawerContainer, DrawerHeader } from './drawer';

export function MyDrawer({ isOpen, onClose }) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerContainer className="${containerCls}">
        <DrawerHeader
          title="${escAttr(state.title)}"${subtitleAttr}
          onClose={onClose}
        />

${sectionLines}${ctaLine}
      </DrawerContainer>
    </Drawer>
  );
}`;
}

// ---------- mount ----------
const root = ReactDOM.createRoot(document.getElementById('db-root'));
root.render(<DrawerBuilder />);
