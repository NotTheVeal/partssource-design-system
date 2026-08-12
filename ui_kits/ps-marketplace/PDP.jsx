function Breadcrumb({ items, onNav }) {
  // Find the previous (parent) crumb for the "Back" affordance
  const backCrumb = items.length > 1 ? items[items.length - 2] : null;

  return (
    <nav style={{
      padding: '12px 40px',
      background: '#fff',
      borderBottom: '1px solid #E8E8E8',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: "'Source Sans Pro', sans-serif",
    }}>
      {/* Back chevron link */}
      {backCrumb && (
        <a href="#"
           onClick={(e) => { e.preventDefault(); onNav && onNav(backCrumb); }}
           style={{
             display: 'inline-flex', alignItems: 'center', gap: 6,
             color: '#005BA6', fontSize: 13, fontWeight: 600,
             textDecoration: 'none', padding: '4px 10px',
             border: '1px solid #CCC', borderRadius: 4,
             background: '#fff', whiteSpace: 'nowrap',
           }}
           onMouseOver={(e) => { e.currentTarget.style.background = '#F1F6FB'; }}
           onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M6.5 1.5L3 5l3.5 3.5" stroke="#005BA6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to {backCrumb.label}
        </a>
      )}

      {/* Trail */}
      <div style={{ fontSize: 13, color: '#777', display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        {items.map((it, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span style={{ color: '#CCCCCC' }}>›</span>}
            {i < items.length - 1 ? (
              <a href="#"
                 onClick={(e) => { e.preventDefault(); onNav && onNav(it); }}
                 style={{ color: '#005BA6', textDecoration: 'none', fontWeight: 500 }}
                 onMouseOver={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                 onMouseOut={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>
                {it.label}
              </a>
            ) : (
              <span style={{ color: '#2B2B2B', fontWeight: 500 }}>{it.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

function PDP({ product, onBack, onAdd, hideBreadcrumb }) {
  const [qty, setQty] = React.useState(1);
  return (
    <div>
      {!hideBreadcrumb && (
        <Breadcrumb items={[{ label: 'Home' }, { label: 'Patient Monitoring' }, { label: 'Sensors' }, { label: product.name }]} onNav={onBack} />
      )}
      <div style={{ padding: '0 32px 48px' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onBack && onBack(); }} style={{ fontSize: 13, color: '#005BA7', textDecoration: 'none', display: 'inline-block', marginBottom: 20 }}>‹ Back to Results</a>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <div style={{ background: '#DCEAED', borderRadius: 8, aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <div style={{ width: 160, height: 160, borderRadius: '50%', background: '#fff', border: '2px solid #CCCCCC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#87AFB8', fontSize: 36, fontWeight: 300, letterSpacing: 2 }}>PS</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
              {[0,1,2,3].map(i => <div key={i} style={{ background: '#F1F1F1', aspectRatio: '1/1', borderRadius: 4, border: i === 0 ? '2px solid #005BA7' : '1px solid #DCDCDC' }}></div>)}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: '#777', marginBottom: 8 }}>{product.manufacturer}</div>
            <h1 style={{ fontSize: 30, fontWeight: 300, color: '#002F48', margin: '0 0 12px', lineHeight: 1.2 }}>{product.name}</h1>
            <div style={{ display: 'flex', gap: 16, fontSize: 13, color: '#777', marginBottom: 20 }}>
              <span>Part #: <strong style={{ color: '#4A4A4A' }}>{product.sku || 'DS100A'}</strong></span>
              <span>HCPCS: <strong style={{ color: '#4A4A4A' }}>E0445</strong></span>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#DCFAEF', color: '#17AB78', fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 20, marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#17AB78' }}></span>In Stock · Ships in 24 hrs
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 24 }}>
              <div style={{ fontSize: 36, fontWeight: 300, color: '#002F48' }}>${product.price}.00</div>
              <div style={{ fontSize: 13, color: '#777' }}>each · volume pricing available</div>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
              <div style={{ display: 'flex', border: '1px solid #DCDCDC', borderRadius: 4, height: 48, overflow: 'hidden' }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 40, border: 0, background: '#F1F1F1', fontSize: 18, cursor: 'pointer' }}>−</button>
                <input value={qty} onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))} style={{ width: 60, border: 0, textAlign: 'center', fontSize: 16, outline: 'none', fontFamily: 'inherit' }} />
                <button onClick={() => setQty(qty + 1)} style={{ width: 40, border: 0, background: '#F1F1F1', fontSize: 18, cursor: 'pointer' }}>+</button>
              </div>
              <button onClick={() => onAdd && onAdd(product, qty)} style={{ background: '#005BA7', color: '#fff', border: 0, borderRadius: 4, height: 48, padding: '0 32px', fontSize: 16, fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', flex: 1 }}>Add to Cart</button>
            </div>
            <button style={{ background: 'transparent', color: '#005BA7', border: '1px solid #005BA7', borderRadius: 4, height: 48, width: '100%', fontSize: 16, fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', marginBottom: 24 }}>Request a Quote</button>
            <div style={{ borderTop: '1px solid #F1F1F1', paddingTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 13, color: '#4A4A4A' }}>
              <div><strong style={{ color: '#002F48' }}>OEM compatible:</strong> Masimo Radical-7, Rad-8, Rad-57</div>
              <div><strong style={{ color: '#002F48' }}>Warranty:</strong> 1 year</div>
              <div><strong style={{ color: '#002F48' }}>Weight:</strong> 2.4 oz</div>
              <div><strong style={{ color: '#002F48' }}>Condition:</strong> New</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Breadcrumb = Breadcrumb;
window.PDP = PDP;
