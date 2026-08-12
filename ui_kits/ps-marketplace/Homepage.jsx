/* PartsSource homepage (ps.com)
   Renders the rich landing experience inside the shell's content area.
   Image placeholders use subtle striped fills + monospace explainers so
   real assets can drop in later.
*/

// ─────────────────────────────────────────────────────────────
// Dropdown component — matches Form-Components/Property1DropDown
//   height 48 · border 1px #949494 · radius 3 · label #4A4A4A 16px
// ─────────────────────────────────────────────────────────────
function PsDropdown({ label, value, options = [], onChange }) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(value || '');
  const wrapRef = React.useRef(null);
  const display = value !== undefined ? value : internal;
  const showLabel = !display;

  React.useEffect(() => {
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const pick = (opt) => {
    setInternal(opt);
    setOpen(false);
    onChange && onChange(opt);
  };

  return (
    <div ref={wrapRef} style={{ position: 'relative', width: '100%' }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          height: 48,
          padding: '0 40px 0 14px',
          background: '#fff',
          border: '1px solid #949494',
          borderRadius: 3,
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: 16,
          color: '#4A4A4A',
          textAlign: 'left',
          cursor: 'pointer',
          outline: 'none',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = '#005BA6'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,91,166,0.15)'; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = '#949494'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        <span style={{ color: showLabel ? '#949494' : '#4A4A4A' }}>{display || label}</span>
        <svg width="14" height="9" viewBox="0 0 14 9" aria-hidden="true" style={{
          position: 'absolute', right: 14, top: '50%', transform: `translateY(-50%) rotate(${open ? 180 : 0}deg)`,
          transition: 'transform 150ms ease',
        }}>
          <path d="M1 1.5L7 7l6-5.5" fill="none" stroke="#949494" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0,
          background: '#fff', border: '1px solid #CCC', borderRadius: 3,
          boxShadow: '0 6px 18px rgba(0,0,0,0.10)',
          maxHeight: 240, overflowY: 'auto', zIndex: 10,
        }}>
          {options.map(opt => (
            <div key={opt}
              onClick={() => pick(opt)}
              style={{
                padding: '12px 14px',
                fontSize: 15,
                color: '#4A4A4A',
                cursor: 'pointer',
                fontFamily: "'Source Sans Pro', sans-serif",
              }}
              onMouseOver={(e)=>{e.currentTarget.style.background='#F1F6FB';e.currentTarget.style.color='#005BA6';}}
              onMouseOut={(e)=>{e.currentTarget.style.background='#fff';e.currentTarget.style.color='#4A4A4A';}}
            >
              {opt}
            </div>
          ))}
          {options.length === 0 && (
            <div style={{ padding: '12px 14px', fontSize: 14, color: '#949494', fontStyle: 'italic' }}>No options</div>
          )}
        </div>
      )}
    </div>
  );
}

function Homepage({ onShopParts }) {
  // Subtle stripe placeholder used for all imagery slots
  const stripe = (color = '#E8EEF3') => ({
    background: `repeating-linear-gradient(45deg, ${color}, ${color} 10px, rgba(255,255,255,0.55) 10px, rgba(255,255,255,0.55) 20px)`,
  });

  const Placeholder = ({ label, h = 'auto', radius = 6, tone = '#E8EEF3', dark = false, style = {} }) => (
    <div style={{
      ...stripe(tone),
      borderRadius: radius,
      minHeight: h,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: dark ? 'rgba(255,255,255,0.85)' : '#6F8694',
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 11, letterSpacing: 0.5,
      ...style,
    }}>
      {label}
    </div>
  );

  const CATEGORIES = [
    'Ultrasound', 'Patient Monitoring', 'Beds & Tables',
    'Facilities & Workspace', 'Respiratory', 'Infusion Pumps',
    'Sterilization', 'Ultrasonic',
  ];

  return (
    <div style={{ background: '#fff' }}>

      {/* ═══════════════ Hero row ═══════════════ */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 1fr',
        gap: 32,
        padding: '40px 40px 24px',
        alignItems: 'center',
      }}>
        <div style={{ position: 'relative', minHeight: 280 }}>
          <h1 style={{
            fontSize: 44,
            fontWeight: 600,
            color: '#1FA9B3',
            lineHeight: 1.05,
            letterSpacing: -0.3,
            maxWidth: 600,
            margin: 0,
          }}>
            Discover 7 Data-Driven Strategies to Reduce Costs and Improve Clinical Uptime
          </h1>
          {/* Decorative dots */}
          <div aria-hidden="true" style={{
            position: 'absolute', right: 0, top: 40,
            width: 220, height: 180, opacity: 0.4,
            background: 'radial-gradient(circle, #B6D9E6 1.5px, transparent 1.5px) 0 0/14px 14px',
          }}/>
        </div>

        {/* Insights report card */}
        <div style={{
          background: '#003763',
          borderRadius: 6,
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          minHeight: 260,
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}>
          <div style={{ padding: '28px 28px 24px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.6, color: '#7FB7CC', marginBottom: 8 }}>
              THE SECOND ANNUAL
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 400, color: '#fff', margin: 0, lineHeight: 1.18, letterSpacing: -0.2 }}>
              State of Healthcare<br/>Technology<br/>Management<br/>Insights Report
            </h3>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.78)', marginTop: 20, lineHeight: 1.5, maxWidth: 280 }}>
              7 Data-Driven Opportunities to Reduce<br/>
              Operating Costs and Improve Clinical Availability
            </div>
          </div>
          <Placeholder label="report cover · technicians photo" tone="#1A4D7E" dark style={{
            borderRadius: 0,
            minHeight: '100%',
          }}/>
        </div>
      </section>

      {/* ═══════════════ Account strip ═══════════════ */}
      <section style={{
        padding: '4px 40px 28px',
        display: 'flex',
        alignItems: 'center',
        gap: 28,
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="ui_kits/ps-shell/chatham-memorial.png" alt="Chatham Memorial Hospital" style={{ height: 36, width: 'auto', display: 'block' }}/>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#005BA6' }}>Earl Grey</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#005BA6', letterSpacing: 1.6 }}>PRO&nbsp;&nbsp;ACCOUNT</div>
          </div>
        </div>

        <a href="#" style={{
          border: '1px solid #CCC',
          borderRadius: 4,
          padding: '8px 18px',
          display: 'inline-flex',
          flexDirection: 'column',
          gap: 2,
          textDecoration: 'none',
          lineHeight: 1.2,
          minWidth: 130,
        }}>
          <span style={{ fontSize: 11, color: '#4A4A4A' }}>Quotes for Review</span>
          <span style={{ fontSize: 15, fontWeight: 600, color: '#005BA6' }}>2 Quotes</span>
        </a>
      </section>

      {/* ═══════════════ Two promo banners ═══════════════ */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        padding: '0 40px 24px',
      }}>
        {/* SKUs banner */}
        <div style={{
          background: '#fff',
          border: '1px solid #E0E6EC',
          borderRadius: 6,
          padding: '24px 28px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          minHeight: 160,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* dotted decoration */}
          <div aria-hidden="true" style={{
            position: 'absolute', left: 16, bottom: 16,
            width: 240, height: 40, opacity: 0.5,
            background: 'radial-gradient(circle, #B6D9E6 1.2px, transparent 1.2px) 0 0/8px 8px',
            pointerEvents: 'none',
          }}/>
          <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 300, color: '#6F8694', lineHeight: 1.15 }}>
              PartsSource Has Over
            </div>
            <div style={{ fontSize: 28, fontWeight: 300, color: '#6F8694', lineHeight: 1.15, marginBottom: 18 }}>
              1.5 Million Facilities SKUs
            </div>
            <button onClick={onShopParts} style={{
              background: '#1FA9B3', color: '#fff', border: 0, borderRadius: 999,
              padding: '10px 28px', fontWeight: 600, fontSize: 14, cursor: 'pointer',
              fontFamily: 'inherit', letterSpacing: 0.3,
            }}>
              Learn More
            </button>
          </div>
          <Placeholder label="product imagery" tone="#E8EEF3" style={{ width: 200, height: 110, flexShrink: 0 }}/>
        </div>

        {/* McKesson banner */}
        <div style={{
          background: '#EFF2F5',
          borderRadius: 6,
          padding: '24px 28px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          minHeight: 160,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 16, right: 16,
            background: '#0F3D6E', color: '#fff', fontSize: 11, fontWeight: 700,
            padding: '4px 12px', borderRadius: 2, letterSpacing: 0.8,
          }}>Now Available!</div>

          <div style={{ flex: 1, paddingRight: 12 }}>
            <div style={{ fontSize: 18, fontWeight: 500, color: '#2B2B2B', lineHeight: 1.3, marginBottom: 14, maxWidth: 320 }}>
              Help keep your staff safe with new McKesson disposable gowns
            </div>
            <a href="#" style={{ color: '#005BA6', fontSize: 14, textDecoration: 'underline', fontWeight: 500 }}>
              Shop Now
            </a>
          </div>
          <Placeholder label="staff in PPE · McKesson logo" tone="#D6E1EA" style={{ width: 240, height: 120, flexShrink: 0 }}/>
        </div>
      </section>

      {/* ═══════════════ Shop by Device ═══════════════ */}
      <ShopByDevice />

      {/* ═══════════════ Exclusively at PartsSource ═══════════════ */}
      <section style={{ padding: '8px 40px 48px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 400, color: '#2B2B2B', margin: '0 0 18px', letterSpacing: -0.2 }}>
          Exclusively at PartsSource
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <Placeholder label="Arjo · device imagery" h={240} radius={4}/>
          <Placeholder label="Repair Services · soldering" h={240} radius={4} tone="#EAEDEF"/>
          <Placeholder label="Tripp-Lite · enclosure" h={240} radius={4}/>
        </div>
      </section>

      {/* ═══════════════ Featured Categories ═══════════════ */}
      <section style={{
        padding: '32px 40px 56px',
        borderTop: '1px solid #E8E8E8',
        background: '#FAFAFA',
      }}>
        <h2 style={{ fontSize: 22, fontWeight: 400, color: '#2B2B2B', margin: '0 0 24px', letterSpacing: -0.2 }}>
          Medical Parts – Featured Categories
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gap: 18,
        }}>
          {CATEGORIES.map(cat => (
            <a key={cat} href="#" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
              textDecoration: 'none', textAlign: 'center',
            }}>
              <div style={{
                ...stripe('#E8EEF3'),
                background: '#fff',
                border: '1px solid #E0E6EC',
                aspectRatio: '1 / 1',
                width: '100%',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#6F8694', fontSize: 10,
                fontFamily: 'ui-monospace, Menlo, monospace',
              }}>
                {cat.toLowerCase().split(' ')[0]}
              </div>
              <span style={{ fontSize: 13, color: '#005BA6', fontWeight: 600 }}>{cat}</span>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}

window.Homepage = Homepage;

// ─────────────────────────────────────────────────────────────
// Shop by Device — uses the PartsSource Dropdown component
// ─────────────────────────────────────────────────────────────
function ShopByDevice() {
  const MANUFACTURERS = ['GE Healthcare', 'Philips', 'Masimo', 'Welch Allyn', '3M Healthcare', 'Olympus America', 'Nellcor – Covidien'];
  const MODELS_BY_MFG = {
    'GE Healthcare':       ['Carescape B650', 'Dash 4000', 'MAC 5500 HD', 'Logiq E10'],
    'Philips':             ['IntelliVue MX700', 'HeartStart MRx', 'Avalon FM30'],
    'Masimo':              ['Radical-7', 'Rad-8', 'Rad-57'],
    'Welch Allyn':         ['Connex Spot Monitor', 'CP 150', 'PanOptic Ophthalmoscope'],
    '3M Healthcare':       ['Bair Hugger 700', 'Bair Hugger 775'],
    'Olympus America':     ['CLV-190', 'CV-190', 'BF-1TH190'],
    'Nellcor – Covidien':  ['PM1000N', 'OxiMax N-595'],
  };
  const [mfg, setMfg] = React.useState('');
  const [model, setModel] = React.useState('');
  const models = mfg ? MODELS_BY_MFG[mfg] || [] : [];

  return (
    <section style={{ padding: '0 40px 40px' }}>
      <div style={{
        background: '#fff',
        border: '1px solid #E0E6EC',
        borderRadius: 6,
        padding: '20px 24px',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr 1fr auto',
        alignItems: 'center',
        gap: 16,
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: '#005BA6', whiteSpace: 'nowrap' }}>
          Shop by Device
        </div>
        <PsDropdown label="Manufacturer" value={mfg} options={MANUFACTURERS}
          onChange={(v) => { setMfg(v); setModel(''); }}/>
        <PsDropdown label="Model" value={model} options={models}
          onChange={(v) => setModel(v)}/>
        <button style={{
          background: '#FFB870', color: '#fff', border: 0, height: 48,
          padding: '0 36px', borderRadius: 3, fontWeight: 700, fontSize: 14,
          letterSpacing: 1.5, cursor: 'pointer', fontFamily: 'inherit',
        }}>
          FIND
        </button>
      </div>
    </section>
  );
}
