function Hero({ onCta }) {
  return (
    <section style={{ background: '#fff', padding: '56px 32px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center', borderBottom: '1px solid #F1F1F1' }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: '#005BA7', marginBottom: 16 }}>PartsSource PRO®</div>
        <h1 style={{ fontSize: 48, fontWeight: 300, lineHeight: 1.1, color: '#002F48', margin: '0 0 20px', letterSpacing: -0.5 }}>
          Ensuring healthcare is always on.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: '#4A4A4A', margin: '0 0 28px', maxWidth: 520 }}>
          The leading B2B marketplace for medtech replacement parts and mission-critical service. Evidence-based procurement, trusted by the top health systems.
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={onCta} style={{ background: '#005BA7', color: '#fff', border: 0, borderRadius: 4, height: 48, padding: '0 28px', fontSize: 16, fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit' }}>Shop Parts</button>
          <button style={{ background: 'transparent', color: '#005BA7', border: '1px solid #005BA7', borderRadius: 4, height: 48, padding: '0 28px', fontSize: 16, fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit' }}>Request a Quote</button>
        </div>
        <div style={{ display: 'flex', gap: 32, marginTop: 40, paddingTop: 24, borderTop: '1px solid #F1F1F1' }}>
          <div><div style={{ fontSize: 24, fontWeight: 300, color: '#002F48' }}>6x</div><div style={{ fontSize: 12, color: '#777' }}>Supply chain quality</div></div>
          <div><div style={{ fontSize: 24, fontWeight: 300, color: '#002F48' }}>40 days</div><div style={{ fontSize: 12, color: '#777' }}>Improved availability / 1k orders</div></div>
          <div><div style={{ fontSize: 24, fontWeight: 300, color: '#002F48' }}>95%</div><div style={{ fontSize: 12, color: '#777' }}>Productivity boost</div></div>
        </div>
      </div>
      <div style={{ background: '#DCEAED', borderRadius: 8, aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 140, height: 140, borderRadius: '50%', background: '#fff', border: '2px solid #CCCCCC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#87AFB8', fontSize: 32, fontWeight: 300, letterSpacing: 2 }}>PS</div>
      </div>
    </section>
  );
}
window.Hero = Hero;
