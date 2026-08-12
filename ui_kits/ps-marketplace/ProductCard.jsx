function ProductCard({ product, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={() => onClick && onClick(product)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        border: hover ? '2px solid #005BA7' : '1px solid #DCDCDC',
        padding: hover ? 15 : 16,
        borderRadius: 6,
        boxShadow: hover ? '0 6px 20px rgba(0,47,72,.18)' : '0 2px 10px rgba(0,47,72,.10)',
        cursor: 'pointer',
        transition: 'box-shadow 150ms, border-color 150ms',
        display: 'flex', flexDirection: 'column', gap: 12,
      }}>
      <div style={{ background: '#DCEAED', borderRadius: 4, aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#fff', border: '2px solid #CCCCCC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#87AFB8', fontSize: 18, fontWeight: 300, letterSpacing: 1 }}>PS</div>
        {product.badge && (
          <span style={{ position: 'absolute', top: 8, left: 8, background: '#DCEAED', color: '#002F48', fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 20, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#009CF4' }}></span>{product.badge}
          </span>
        )}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: '#005BA7', textTransform: 'uppercase', lineHeight: 1.3, letterSpacing: .3 }}>
        {product.name}
      </div>
      <div style={{ fontSize: 12, color: '#777' }}>{product.manufacturer}</div>
      {product.price && (
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#002F48' }}>${product.price}</div>
          <div style={{ fontSize: 11, color: '#777' }}>each</div>
        </div>
      )}
    </div>
  );
}
window.ProductCard = ProductCard;
