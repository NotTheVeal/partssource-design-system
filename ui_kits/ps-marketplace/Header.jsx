const { useState } = React;

function Header({ onSearch, onNav, cartCount = 0 }) {
  const [q, setQ] = useState('');
  return (
    <header style={{ borderBottom: '1px solid #DCDCDC', background: '#fff', position: 'sticky', top: 0, zIndex: 10 }}>
      {/* Utility bar */}
      <div style={{ background: '#002F48', color: '#fff', fontSize: 13, padding: '6px 32px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 20 }}>
          <span style={{ opacity: .8 }}>Ship to: Cleveland, OH 44114</span>
          <span style={{ opacity: .8 }}>Customer Support 1-877-497-6412</span>
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          <a style={{ color: '#009CF4', textDecoration: 'none' }} href="#">Help</a>
          <a style={{ color: '#009CF4', textDecoration: 'none' }} href="#">PartsSource PRO</a>
          <a style={{ color: '#009CF4', textDecoration: 'none' }} href="#">Sign In</a>
        </div>
      </div>
      {/* Main bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '14px 32px' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('home'); }} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#005BA7', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 300, letterSpacing: -0.5 }}>PS</div>
          <div style={{ fontSize: 20, fontWeight: 600, color: '#002F48', letterSpacing: -0.5 }}>PartsSource</div>
        </a>
        <form onSubmit={(e) => { e.preventDefault(); onSearch && onSearch(q); }} style={{ flex: 1, display: 'flex', border: '1px solid #DCDCDC', borderRadius: 4, overflow: 'hidden', height: 44 }}>
          <select style={{ border: 0, borderRight: '1px solid #DCDCDC', padding: '0 12px', background: '#F1F1F1', color: '#4A4A4A', fontSize: 14, fontFamily: 'inherit', outline: 'none' }}>
            <option>All Categories</option>
            <option>Parts</option>
            <option>Repair Services</option>
          </select>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by part number, HCPCS, manufacturer, or description" style={{ flex: 1, border: 0, padding: '0 16px', fontSize: 15, color: '#4A4A4A', outline: 'none', fontFamily: 'inherit' }} />
          <button type="submit" style={{ border: 0, background: '#005BA7', color: '#fff', padding: '0 24px', fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: .5, cursor: 'pointer' }}>Search</button>
        </form>
        <button onClick={() => onNav && onNav('cart')} style={{ position: 'relative', background: 'transparent', border: '1px solid #005BA7', color: '#005BA7', height: 44, padding: '0 18px', borderRadius: 4, fontSize: 14, fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit' }}>
          Cart
          {cartCount > 0 && <span style={{ position: 'absolute', top: -6, right: -6, background: '#FF9505', color: '#fff', fontSize: 11, fontWeight: 700, width: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cartCount}</span>}
        </button>
      </div>
      {/* Mega nav */}
      <nav style={{ display: 'flex', gap: 28, padding: '0 32px 0', borderTop: '1px solid #F1F1F1' }}>
        {['Parts', 'Repairs & Services', 'Service Agreements', 'Training', 'PartsSource PRO', 'Resources'].map(item => (
          <a key={item} href="#" style={{ padding: '12px 0', fontSize: 14, fontWeight: 600, color: '#4A4A4A', textDecoration: 'none', borderBottom: '2px solid transparent' }}
             onMouseOver={(e) => { e.currentTarget.style.color = '#005BA7'; e.currentTarget.style.borderBottomColor = '#005BA7'; }}
             onMouseOut={(e) => { e.currentTarget.style.color = '#4A4A4A'; e.currentTarget.style.borderBottomColor = 'transparent'; }}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

window.Header = Header;
