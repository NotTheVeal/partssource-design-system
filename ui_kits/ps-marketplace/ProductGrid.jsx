function ProductGrid({ products, onSelect }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
      {products.map(p => <ProductCard key={p.id} product={p} onClick={onSelect} />)}
    </div>
  );
}

function ProductCarousel({ title, subtitle, products, onSelect }) {
  const [offset, setOffset] = React.useState(0);
  const ref = React.useRef(null);
  return (
    <section style={{ padding: '32px 32px 40px', borderTop: '1px solid #F1F1F1' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 20 }}>
        <h2 style={{ fontSize: 24, fontWeight: 300, color: '#002F48', margin: 0 }}>{title}</h2>
        {subtitle && <a href="#" style={{ color: '#005BA7', fontSize: 14, textDecoration: 'none' }}>{subtitle}</a>}
      </div>
      <div style={{ position: 'relative' }}>
        <div ref={ref} style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: 8 }}>
          {products.map(p => (
            <div key={p.id} style={{ minWidth: 200 }}>
              <ProductCard product={p} onClick={onSelect} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ProductGrid = ProductGrid;
window.ProductCarousel = ProductCarousel;
