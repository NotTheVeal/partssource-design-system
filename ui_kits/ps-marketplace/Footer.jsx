/* PartsSource marketplace footer — 1:1 with reference
   Layout (top → bottom):
     1. Grey separator strip (~80px)
     2. Royal-blue body:
        - 5-column link grid
        - "Also of Interest" row aligned under col 1
     3. Dark navy thin strip: © left, Legal Terms + shield right
*/

function Footer() {
  const BLUE  = '#1A4882';
  const STRIP = '#143A6B';
  const GREY  = '#EFEFEF';
  const SEAL  = '#B8C9DC';

  const linkStyle = {
    color: '#fff',
    fontSize: 15,
    fontWeight: 400,
    textDecoration: 'none',
    fontFamily: 'inherit',
    lineHeight: 1.2,
    whiteSpace: 'nowrap',
  };
  const hover = (e) => { e.currentTarget.style.textDecoration = 'underline'; };
  const leave = (e) => { e.currentTarget.style.textDecoration = 'none'; };
  const A = ({ children, href = '#' }) => (
    <a href={href} style={linkStyle} onMouseOver={hover} onMouseOut={leave}>{children}</a>
  );

  const Col = ({ items }) => (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {items.map(i => <li key={i}><A>{i}</A></li>)}
    </ul>
  );

  return (
    <>
      {/* 1. Grey separator strip */}
      <div style={{ height: 78, background: GREY, width: '100%' }}/>

      {/* 2. Blue body */}
      <footer style={{
        background: BLUE,
        color: '#fff',
        fontFamily: "'Source Sans Pro', 'Source Sans 3', system-ui, sans-serif",
      }}>
        {/* 5-column link grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 1.25fr) repeat(4, 1fr)',
          columnGap: 28,
          padding: '44px 40px 16px',
        }}>
          {/* Col 1 — Contact block */}
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, whiteSpace: 'nowrap' }}>
              Can't Find What You're Looking For?
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.5, marginBottom: 16, whiteSpace: 'nowrap' }}>
              <div>Call us at <A href="tel:8774976412">877-497-6412</A></div>
              <div>or email us at <A href="mailto:help@partssource.com">help@partssource.com</A></div>
            </div>
            <A>Send us Feedback and Suggestions</A>
          </div>

          {/* Col 2–5 */}
          <Col items={['OEMs', 'Models', 'Departments', 'Marketplace Blog']}/>
          <Col items={['Orders', 'Order History', 'Quotes', 'Approve Orders', 'Favorites']}/>
          <Col items={['Repairs', 'Exchanges and Returns', 'MyPartsSource', 'PartsFinder', 'MyServices®']}/>
          <Col items={['Company Profile', 'Contact Us', 'Advertise with Us', 'Customer Support']}/>
        </div>

        {/* "Also of Interest" row — sits under the columns, aligned with col 1 */}
        <div style={{
          padding: '8px 40px 40px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'baseline',
          columnGap: 44,
          rowGap: 12,
          fontSize: 15,
        }}>
          <span style={{ fontWeight: 700 }}>Also of Interest</span>
          <A>Defibrillators and Parts</A>
          <A>48INCH AIR TUBE SET by Hillrom</A>
          <A>ECG Cables and Leadwires</A>
        </div>
      </footer>

      {/* 3. Dark navy thin strip */}
      <div style={{
        background: STRIP,
        padding: '12px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        fontSize: 14,
        minHeight: 56,
        fontFamily: "'Source Sans Pro', 'Source Sans 3', system-ui, sans-serif",
      }}>
        <span>© 2001-2022 PartsSource, Inc.</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <a href="#" style={{ color: '#fff', fontSize: 14, textDecoration: 'underline', textUnderlineOffset: 3 }}>
            Legal Terms &amp; Policies
          </a>

          {/* Trust seal — circular badge with shield + check */}
          <span aria-label="Verified" style={{
            width: 46, height: 46, borderRadius: '50%',
            background: STRIP,
            border: `2px solid ${SEAL}`,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            position: 'relative',
            top: 4,
          }}>
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" aria-hidden="true">
              <path d="M10 1.2 1.6 3.8v6.4c0 5.4 3.5 10.2 8.4 11.8 4.9-1.6 8.4-6.4 8.4-11.8V3.8L10 1.2z"
                    fill="none" stroke={SEAL} strokeWidth="1.6" strokeLinejoin="round"/>
              <path d="M6 12l2.6 2.6L14.2 9"
                    fill="none" stroke={SEAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}

window.Footer = Footer;
