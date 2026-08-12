function Cart({ items, onClose, onRemove, onCheckout }) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  return (
    <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 400, background: '#fff', boxShadow: '-6px 0 20px rgba(0,47,72,.18)', display: 'flex', flexDirection: 'column', zIndex: 100 }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid #DCDCDC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 300, color: '#002F48', margin: 0 }}>Your cart</h2>
          <div style={{ fontSize: 12, color: '#777' }}>{items.length} item{items.length !== 1 ? 's' : ''}</div>
        </div>
        <button onClick={onClose} style={{ background: 'transparent', border: 0, fontSize: 22, color: '#777', cursor: 'pointer' }}>×</button>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '12px 24px' }}>
        {items.length === 0 && <div style={{ padding: 40, textAlign: 'center', color: '#777', fontSize: 14 }}>Your cart is empty.</div>}
        {items.map(it => (
          <div key={it.id} style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: '1px solid #F1F1F1' }}>
            <div style={{ width: 56, height: 56, background: '#DCEAED', borderRadius: 4, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#87AFB8', fontSize: 11, fontWeight: 300, letterSpacing: 1 }}>PS</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#005BA7', textTransform: 'uppercase', lineHeight: 1.3 }}>{it.name}</div>
              <div style={{ fontSize: 11, color: '#777', marginTop: 4 }}>{it.manufacturer} · Qty {it.qty}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#002F48' }}>${(it.price * it.qty).toFixed(2)}</div>
                <button onClick={() => onRemove && onRemove(it)} style={{ background: 'transparent', border: 0, fontSize: 12, color: '#005BA7', cursor: 'pointer', textDecoration: 'underline' }}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid #DCDCDC', padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 14, color: '#4A4A4A' }}><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, fontSize: 14, color: '#4A4A4A' }}><span>Estimated shipping</span><span>Calculated at checkout</span></div>
        <button onClick={onCheckout} disabled={items.length === 0} style={{ width: '100%', background: items.length ? '#005BA7' : '#DCDCDC', color: items.length ? '#fff' : '#949494', border: 0, borderRadius: 4, height: 48, fontSize: 16, fontWeight: 600, textTransform: 'uppercase', cursor: items.length ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>Checkout</button>
      </div>
    </div>
  );
}
window.Cart = Cart;
